/**
 * Lead-gen car ad — in-stream “video” still used as img src.
 * Writes: src/assets/car-ad-video.jpg (16:9).
 *
 * GEMINI_API_KEY in `.env` or `.env.local`
 * Run: npx tsx scripts/generate-car-ad-video-still.ts
 * Optional: CAR_VIDEO_FRAMING=front (default: side-first to avoid emblems)
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';
import { GoogleGenAI, PersonGeneration } from '@google/genai';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: join(__dirname, '../.env') });
config({ path: join(__dirname, '../.env.local') });

const API_KEY = process.env.GEMINI_API_KEY;
const IMAGE_MODEL = process.env.GEMINI_IMAGE_MODEL ?? 'imagen-4.0-generate-001';

/**
 * Front shots often draw grille or wheel-center emblems — default is side → rear → front.
 * Set CAR_VIDEO_FRAMING=front to prioritize front (not recommended).
 */
const FRONT_FIRST = process.env.CAR_VIDEO_FRAMING === 'front';

const PROMPTS_SIDE_FIRST = [
  [
    'Cinematic 16:9 automotive photograph, streaming app hero still.',
    'Strict side-profile view: silver electric crossover SUV, camera parallel to driver side, eye level near beltline.',
    'Only side body panels, doors, and glass — front bumper and grille must be OUT OF FRAME.',
    'Wheels: dark satin alloy with plain flat hub centers — NO center cap logo, NO chrome ring, NO emblem on spokes;',
    'tire sidewalls without readable text. No fender badge, no script on doors. Fictional unbranded prototype.',
    'Coastal highway, golden hour, subtle motion blur on road, dramatic clouds, photorealistic premium car ad.',
  ].join(' '),
  [
    'Cinematic 16:9 photograph: silver electric SUV rear three-quarter, vehicle driving away on coastal road.',
    'Tailgate and rear lamps visible; front of vehicle not in shot. Smooth liftgate paint — NO rear emblem, NO oval badge,',
    'NO logo between taillights; continuous body color only. Optional full-width LED strip, no text.',
    'No legible license plate. Golden hour, photorealistic, fictional car, no trademarks.',
  ].join(' '),
  [
    'Cinematic 16:9 last-resort front angle: silver EV crossover, nose is one uninterrupted satin panel —',
    'no round badge, no chrome disc, no vertical emblem; slim LED and blank sealed grille only.',
    'Coastal highway, golden hour, fictional concept, no plate text.',
  ].join(' '),
];

const PROMPTS_FRONT_FIRST = [PROMPTS_SIDE_FIRST[2]!, PROMPTS_SIDE_FIRST[0]!, PROMPTS_SIDE_FIRST[1]!];

const PROMPTS = FRONT_FIRST ? PROMPTS_FRONT_FIRST : PROMPTS_SIDE_FIRST;

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function main(): Promise<void> {
  if (!API_KEY) {
    console.error('Missing GEMINI_API_KEY in .env or .env.local');
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const outFile = join(__dirname, '../src/assets/car-ad-video.jpg');

  let buf: Buffer | undefined;
  for (let i = 0; i < PROMPTS.length; i++) {
    if (i > 0) console.log(`Retry ${i + 1}/${PROMPTS.length} (alternate framing, avoid front badge)…`);
    else console.log('Generating car-ad-video.jpg (16:9)…');

    const response = await ai.models.generateImages({
      model: IMAGE_MODEL,
      prompt: PROMPTS[i]!,
      config: {
        numberOfImages: 1,
        aspectRatio: '16:9',
        outputMimeType: 'image/jpeg',
        outputCompressionQuality: 90,
        personGeneration: PersonGeneration.DONT_ALLOW,
      },
    });

    const bytesB64 = response.generatedImages?.[0]?.image?.imageBytes;
    if (bytesB64) {
      buf = Buffer.from(bytesB64, 'base64');
      break;
    }
    const reason = response.generatedImages?.[0]?.raiFilteredReason ?? 'no image bytes';
    console.warn(`Attempt ${i + 1} failed: ${reason}`);
    if (i < PROMPTS.length - 1) await sleep(2000 * (i + 1));
  }

  if (!buf) throw new Error('Generation failed after all prompts');

  writeFileSync(outFile, buf);
  console.log(`Wrote ${outFile} (${buf.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
