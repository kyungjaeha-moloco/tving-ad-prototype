import type { Locale } from './i18n';
import type { ProductDetail } from './types';
import type { TranslationKey } from './i18n';

export const GENERIC_BRANDING_STORAGE_KEY = 'tving-ad-generic-branding';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Neutral placeholder as an inline SVG data URL (no external fetch, no stock photo).
 * Safe for marketing/legal review when you only ship assets you authored.
 */
export function rightsSafePlaceholderDataUrl(
  width: number,
  height: number,
  label = ''
): string {
  const fontSize = Math.max(10, Math.round(Math.min(width, height) * 0.045));
  const text =
    label.length > 0
      ? `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#a1a1aa" font-family="ui-sans-serif,system-ui,sans-serif" font-size="${fontSize}">${escapeXml(label)}</text>`
      : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3f3f46"/><stop offset="100%" stop-color="#18181b"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/>${text}</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Square catalog / product thumb (generic mode) */
export const GENERIC_PRODUCT_IMAGE = rightsSafePlaceholderDataUrl(400, 400, '');

/** 16:9 hero / promo hero */
export const GENERIC_HERO_IMAGE = rightsSafePlaceholderDataUrl(750, 422, '');

/** Out-stream ranking card (~16:10) */
export const GENERIC_RANKING_THUMB = rightsSafePlaceholderDataUrl(300, 170, '');

/** Portrait binge card */
export const GENERIC_BINGE_POSTER = rightsSafePlaceholderDataUrl(280, 380, '');

/** In-stream / out-stream video area */
export const GENERIC_AD_VIDEO_STILL = rightsSafePlaceholderDataUrl(750, 422, '');

/** Horizontal banner strip */
export const GENERIC_AD_BANNER_STRIP = rightsSafePlaceholderDataUrl(700, 200, '');

/** Lead-gen form header strip */
export const GENERIC_LEADGEN_HEADER = rightsSafePlaceholderDataUrl(800, 400, '');

const DEMO_BASE = 'https://example.com/demo';

export function buildGenericDemoUrl(
  selectedProductId: number | null,
  isStaticList: boolean
): string {
  if (selectedProductId == null) {
    return isStaticList ? `${DEMO_BASE}/brand-feature` : `${DEMO_BASE}/promotion`;
  }
  return isStaticList
    ? `${DEMO_BASE}/product/${selectedProductId}`
    : `${DEMO_BASE}/item/${selectedProductId}`;
}

type TFn = (key: TranslationKey) => string;

export function resolveProductDetail(
  productId: number,
  base: ProductDetail,
  generic: boolean,
  locale: Locale,
  t: TFn
): ProductDetail {
  if (!generic) return base;
  const label = locale === 'ko' ? t('generic.item_name_prefix') : 'Item';
  return {
    brand: { ko: t('generic.brand_name'), en: t('generic.brand_name') },
    name: {
      ko: `${label} ${productId}`,
      en: `${label} ${productId}`,
    },
    price: base.price,
    original: base.original,
    discount: base.discount,
    desc: {
      ko: t('generic.product_desc'),
      en: t('generic.product_desc'),
    },
    img: GENERIC_PRODUCT_IMAGE,
  };
}

export interface PromoListItem {
  id: number;
  name: { ko: string; en: string };
  img: string;
}

export function resolvePromoListItems(
  items: PromoListItem[],
  generic: boolean,
  locale: Locale,
  t: TFn
): PromoListItem[] {
  if (!generic) return items;
  const label = locale === 'ko' ? t('generic.item_name_prefix') : 'Item';
  return items.map((item) => ({
    ...item,
    name: { ko: `${label} ${item.id}`, en: `${label} ${item.id}` },
    img: GENERIC_PRODUCT_IMAGE,
  }));
}
