/**
 * Lead-gen car ad — lower banner strip background (`object-cover` in ~80px-tall row).
 * Writes: src/assets/car-ad-banner.jpg (16:9 source; UI crops wide strip).
 *
 * GEMINI_API_KEY in `.env` or `.env.local`
 * Run: npx tsx scripts/generate-car-ad-banner.ts
 * Optional: CAR_BANNER_FRAMING=front (default: road-atmosphere first — no hero car, no emblems)
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

const FRONT_FIRST = process.env.CAR_BANNER_FRAMING === 'front';

/** Hero cars in-frame often get fake badges — try empty road / bokeh first. */
const PROMPTS_SIDE_FIRST = [
  [
    'Ultra-wide 16:9 cinematic banner for mobile streaming lower-third car-ad background.',
    'NO close-up vehicle: empty wet multi-lane highway at blue hour, shallow rain puddles on asphalt,',
    'distant traffic as soft red and white light streaks and bokeh only — no sharp car shape, no grille, no wheels visible,',
    'no front of any automobile in frame. Left third darker foreground pavement for text overlay.',
    'Premium EV marketing mood, motion and depth, photorealistic, no logos, no readable signs, no people.',
  ].join(' '),
  [
    'Ultra-wide 16:9 banner: silver fictional electric SUV in strict side profile, low camera, vehicle in RIGHT two-thirds.',
    'LEFT third darker empty asphalt for UI text. Front grille OUT OF FRAME. Plain wheel centers, NO hub emblem.',
    'Dusk, wet road, city bokeh, photorealistic, no fender badges.',
  ].join(' '),
  [
    'Wide 16:9: silver EV rear three-quarter driving away, smooth tailgate — NO rear emblem, NO logo between lights.',
    'Left area darker road for overlay. Dusk highway, photorealistic, fictional car.',
  ].join(' '),
  [
    'Wide 16:9 last resort: low front three-quarter silver EV, satin blank nose — NO round grille badge.',
    'Left third darker for overlay, wet asphalt, no plate text.',
  ].join(' '),
];

const PROMPTS_FRONT_FIRST = [
  PROMPTS_SIDE_FIRST[3]!,
  PROMPTS_SIDE_FIRST[1]!,
  PROMPTS_SIDE_FIRST[2]!,
  PROMPTS_SIDE_FIRST[0]!,
];
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
  const outFile = join(__dirname, '../src/assets/car-ad-banner.jpg');

  let buf: Buffer | undefined;
  for (let i = 0; i < PROMPTS.length; i++) {
    if (i > 0) console.log(`Retry ${i + 1}/${PROMPTS.length}…`);
    else console.log('Generating car-ad-banner.jpg (16:9, road-atmosphere first)…');

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
