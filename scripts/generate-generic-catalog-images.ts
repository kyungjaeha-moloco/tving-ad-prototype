/**
 * Generates JPEGs for the **generic branding (control-panel checkbox)** product row only.
 * Output: src/assets/generic/product-1.jpg … product-6.jpg
 * (Same files are reused for STATIC_ITEMS ids 1–6 and PROMO_ITEMS 11–16 via genericProductImageForId.)
 *
 * Requires GEMINI_API_KEY in `.env` or `.env.local` (see .env.example).
 * Run: npx tsx scripts/generate-generic-catalog-images.ts
 * Resume: FROM_SLOT=4 MAX_SLOT=6 npx tsx scripts/generate-generic-catalog-images.ts
 * Single slot: FROM_SLOT=5 MAX_SLOT=5 …
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';
import { GoogleGenAI, PersonGeneration } from '@google/genai';

/**
 * English labels for generic catalog slots 1–6 (control-panel checkbox).
 * Keep in sync with `GENERIC_FICTITIOUS_PRODUCT_NAMES` ids 1–6 in `src/branding.ts`.
 * Promo ids 11–16 reuse these same six image files.
 */
const GENERIC_SLOT_EN: Record<number, string> = {
  1: 'Scar Care Serum 50ml',
  2: 'Hydro Veil Moisture Pad 60ea',
  3: 'Botanical Cooling Pad 50ea',
  4: 'Lifting Collagen Mask 10ea',
  5: 'Scar Repair Ampoule 30ml',
  6: 'UV Shield Sun Serum SPF50+',
};

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: join(__dirname, '../.env') });
config({ path: join(__dirname, '../.env.local') });

const API_KEY = process.env.GEMINI_API_KEY;
/** Imagen on Gemini API — adjust if your project exposes a different model id */
const IMAGE_MODEL = process.env.GEMINI_IMAGE_MODEL ?? 'imagen-4.0-generate-001';

const SLOT_IDS = [1, 2, 3, 4, 5, 6] as const;

const MIN_SLOT = Math.max(
  1,
  Math.min(6, Number.parseInt(process.env.FROM_SLOT ?? '1', 10) || 1)
);
const MAX_SLOT = Math.max(
  MIN_SLOT,
  Math.min(6, Number.parseInt(process.env.MAX_SLOT ?? '6', 10) || 6)
);

function buildPrompt(englishLabel: string): string {
  return [
    'Professional beauty e-commerce product photograph, single hero item.',
    `Subject (fictitious prototype, not a real trademark): ${englishLabel}.`,
    'Clean white or very light gray studio backdrop, soft diffused daylight, 3/4 angle.',
    'Photorealistic packaging: glass, plastic, or paper — surfaces must be completely blank.',
    'No stickers, no paper sleeves, no silk-screen text, no embossed letters, no fake glyphs.',
    'If a label area is needed, use a single matte color block with zero characters.',
    'Square 1:1 framing, sharp focus, catalog thumbnail style.',
  ].join(' ');
}

/** Safer wording when the API returns empty / safety-filtered results (e.g. medical or SPF claims). */
function buildPromptFallback(englishLabel: string): string {
  return [
    'Studio product photo of one fictional Korean beauty SKU, no trademarks.',
    `Loosely inspired by: ${englishLabel} — generic bottle, jar, pouch, or pad pack only.`,
    'Plain minimalist packaging, soft colors, white or light gray background.',
    'All outer surfaces blank: no printing, no symbols, no fake text, no logos.',
    'Photorealistic 1:1.',
  ].join(' ');
}

/** Shape-only description — avoids marketing words that trigger label imagery (use on last retries). */
function buildPromptShapeOnly(id: number): string {
  const shapes: Record<number, string> = {
    1: 'Tall frosted glass serum pump bottle with plain cylindrical body and solid pastel pump collar.',
    2: 'Wide round tub of stacked white cotton pads, lid on, no writing on tub or lid.',
    3: 'Soft mint-green flexible pouch or low jar holding pads, completely blank faces.',
    4: 'Stack of plain pastel sheet-mask sachets or one sealed pouch, no graphics.',
    5: 'One small skincare dropper bottle: frosted cylindrical glass, rubber bulb dropper top, uniform frosted surface like sandblasted glass with no separate label sticker and no ink — only material color and light reflection.',
    6: 'Pearl-white or soft peach plastic face lotion bottle with short wide cylindrical body and matching airless pump cap; continuous matte plastic with no separate label panel, no sun icons, no SPF numbers, no stripes — only material form and soft shadow.',
  };
  const shape = shapes[id] ?? 'Generic skincare container, all surfaces blank.';
  return [
    'Premium product photo, single object centered.',
    shape,
    'White cyclorama studio, soft shadow, 3/4 view, photorealistic.',
    'Critical: absolutely no letters, numbers, symbols, stickers, or printed patterns anywhere.',
    'Square 1:1.',
  ].join(' ');
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function main(): Promise<void> {
  if (!API_KEY) {
    console.error('Missing GEMINI_API_KEY. Add it to .env or .env.local (see .env.example).');
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const outDir = join(__dirname, '../src/assets/generic');

  const attempts = 4;

  for (const id of SLOT_IDS) {
    if (id < MIN_SLOT || id > MAX_SLOT) continue;
    const label = GENERIC_SLOT_EN[id];
    if (!label) {
      console.warn(`Skip id ${id}: no generic label`);
      continue;
    }
    console.log(`Generating product-${id}.jpg — ${label}…`);

    let buf: Buffer | undefined;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      /** Slots 5–6 often get fake on-pack text — use shape-only prompts only. */
      const prompt =
        id === 5 || id === 6
          ? buildPromptShapeOnly(id)
          : attempt >= 4
            ? buildPromptShapeOnly(id)
            : attempt >= 3
              ? buildPromptFallback(label)
              : buildPrompt(label);
      if (attempt > 1) {
        const mode =
          id === 5 || id === 6
            ? ' (shape-only retry)'
            : attempt >= 4
              ? ' (shape-only, no label words)'
              : attempt >= 3
                ? ' (softer prompt)'
                : '';
        console.log(`  retry ${attempt}/${attempts}${mode}…`);
      }

      const response = await ai.models.generateImages({
        model: IMAGE_MODEL,
        prompt,
        config: {
          numberOfImages: 1,
          aspectRatio: '1:1',
          outputMimeType: 'image/jpeg',
          outputCompressionQuality: 92,
          personGeneration: PersonGeneration.DONT_ALLOW,
        },
      });

      const gi = response.generatedImages?.[0];
      const bytesB64 = gi?.image?.imageBytes;
      if (bytesB64) {
        buf = Buffer.from(bytesB64, 'base64');
        break;
      }
      const reason = gi?.raiFilteredReason ?? 'no image bytes';
      console.warn(`  attempt ${attempt} failed: ${reason}`);
      if (attempt < attempts) await sleep(1500 * attempt);
    }

    if (!buf) {
      throw new Error(`Generation failed for id ${id} after ${attempts} attempts`);
    }

    const file = join(outDir, `product-${id}.jpg`);
    writeFileSync(file, buf);
    console.log(`  wrote ${file} (${buf.length} bytes)`);
  }

  console.log('Done. Toggle “generic brands” in the app to see these thumbs.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
