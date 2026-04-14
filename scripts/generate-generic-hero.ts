/**
 * Generic branding (checkbox) — OliveYoungPromo / in-app hero background.
 * Writes: src/assets/generic/hero.jpg (16:9, matches aspect-video).
 *
 * GEMINI_API_KEY in `.env` or `.env.local`
 * Run: npx tsx scripts/generate-generic-hero.ts
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

const HERO_PROMPT = [
  'Wide cinematic 16:9 beauty retail hero photograph for a mobile app banner.',
  'Soft-focus still life: pastel marble or matte stone surface, a few unbranded frosted glass bottles',
  'and a stack of plain white cotton pads in the background bokeh, shallow depth of field.',
  'Fresh daylight from the side, sage green and warm coral reflections, premium clean aesthetic.',
  'Leave lower third slightly darker and less busy so dark gradient UI can sit on top.',
  'Absolutely no logos, no brand names, no readable text, no faces, no watermarks, no QR codes.',
  'Photorealistic, high-end Korean beauty store mood, fictional products only.',
].join(' ');

async function main(): Promise<void> {
  if (!API_KEY) {
    console.error('Missing GEMINI_API_KEY in .env or .env.local');
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const outFile = join(__dirname, '../src/assets/generic/hero.jpg');

  console.log('Generating generic hero (16:9)…');
  const response = await ai.models.generateImages({
    model: IMAGE_MODEL,
    prompt: HERO_PROMPT,
    config: {
      numberOfImages: 1,
      aspectRatio: '16:9',
      outputMimeType: 'image/jpeg',
      outputCompressionQuality: 90,
      personGeneration: PersonGeneration.DONT_ALLOW,
    },
  });

  const bytesB64 = response.generatedImages?.[0]?.image?.imageBytes;
  if (!bytesB64) {
    const reason = response.generatedImages?.[0]?.raiFilteredReason ?? 'no image bytes';
    throw new Error(`Hero generation failed: ${reason}`);
  }

  const buf = Buffer.from(bytesB64, 'base64');
  writeFileSync(outFile, buf);
  console.log(`Wrote ${outFile} (${buf.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
