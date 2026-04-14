import { t as translate } from './i18n';
import type { Locale } from './i18n';
import type { ProductDetail } from './types';
import type { TranslationKey } from './i18n';
/**
 * Bundled JPEGs — Unsplash License https://unsplash.com/license (where noted)
 * Car in-stream still: generated — `npm run generate:car-ad-video`
 * Car lower banner strip: generated — `npm run generate:car-ad-banner`
 * Other insurance stills: 1450101499163
 * Generic binge row (match reality/drama labels): 1506905925346, 1517604931442, 1469474968028
 * Generic ranking row: 1495020689067, 1514525253161, 1519681393784
 * Generic catalog/hero: 1620916566398, 1596462502278
 * Generic channel row thumbs: 1511379938547, 1485846234645, 1469474968028, 1519681393784 (no streaming-service UI shots)
 */
import carAdVideo from './assets/car-ad-video.jpg';
import carAdBanner from './assets/car-ad-banner.jpg';
import insuranceAdVideo from './assets/insurance-ad-video.jpg';
import insuranceAdBanner from './assets/insurance-ad-banner.jpg';
import genericProduct1 from './assets/generic/product-1.jpg';
import genericProduct2 from './assets/generic/product-2.jpg';
import genericProduct3 from './assets/generic/product-3.jpg';
import genericProduct4 from './assets/generic/product-4.jpg';
import genericProduct5 from './assets/generic/product-5.jpg';
import genericProduct6 from './assets/generic/product-6.jpg';
import genericHero from './assets/generic/hero.jpg';
import genericRanking1 from './assets/generic/ranking-1.jpg';
import genericRanking2 from './assets/generic/ranking-2.jpg';
import genericRanking3 from './assets/generic/ranking-3.jpg';
import genericBinge1 from './assets/generic/binge-1.jpg';
import genericBinge2 from './assets/generic/binge-2.jpg';
import genericBinge3 from './assets/generic/binge-3.jpg';
import genericChannel1 from './assets/generic/channel-1.jpg';
import genericChannel2 from './assets/generic/channel-2.jpg';
import genericChannel3 from './assets/generic/channel-3.jpg';
import genericChannel4 from './assets/generic/channel-4.jpg';

export const GENERIC_BRANDING_STORAGE_KEY = 'tving-ad-generic-branding';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Inline SVG data URL (no external fetch, no stock photo).
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

/** Square catalog / product thumbs (generic mode — one per slot, 6 variants) */
export const GENERIC_PRODUCT_IMAGES = [
  genericProduct1,
  genericProduct2,
  genericProduct3,
  genericProduct4,
  genericProduct5,
  genericProduct6,
] as const;

/** @deprecated use GENERIC_PRODUCT_IMAGES[slot] or genericProductImageForId */
export const GENERIC_PRODUCT_IMAGE = genericProduct1;

const GENERIC_CATALOG_SIZE = GENERIC_PRODUCT_IMAGES.length;

function genericProductImageForId(productId: number): string {
  let idx: number;
  if (productId >= 1 && productId <= 6) idx = productId - 1;
  else if (productId >= 11 && productId <= 16) idx = productId - 11;
  else idx = ((productId % GENERIC_CATALOG_SIZE) + GENERIC_CATALOG_SIZE) % GENERIC_CATALOG_SIZE;
  return GENERIC_PRODUCT_IMAGES[idx];
}

/** 16:9 hero / promo hero */
export const GENERIC_HERO_IMAGE = genericHero;

/** Out-stream ranking cards (~16:10), one per slot */
export const GENERIC_RANKING_THUMBS = [genericRanking1, genericRanking2, genericRanking3] as const;

/** @deprecated use GENERIC_RANKING_THUMBS */
export const GENERIC_RANKING_THUMB = genericRanking1;

/** Portrait binge cards (generic mode — one image per slot) */
export const GENERIC_BINGE_POSTERS = [genericBinge1, genericBinge2, genericBinge3] as const;

/** @deprecated use GENERIC_BINGE_POSTERS — kept for single-thumb fallbacks */
export const GENERIC_BINGE_POSTER = genericBinge1;

/** In-stream channel list thumbs (generic mode), one per row */
export const GENERIC_CHANNEL_THUMBS = [
  genericChannel1,
  genericChannel2,
  genericChannel3,
  genericChannel4,
] as const;

/** 16:9 in-stream / out-stream “video” still */
export const CAR_AD_VIDEO_STILL = carAdVideo;
export const INSURANCE_AD_VIDEO_STILL = insuranceAdVideo;

/** ~3.5:1 lower-third style strip */
export const CAR_AD_BANNER_STRIP = carAdBanner;
export const INSURANCE_AD_BANNER_STRIP = insuranceAdBanner;

/** Lead-gen form header (full width) */
export const GENERIC_LEADGEN_HEADER_CAR = carAdBanner;
export const GENERIC_LEADGEN_HEADER_INSURANCE = insuranceAdBanner;

/** @deprecated use CAR_AD_* / INSURANCE_AD_* — kept for any stale imports */
export const GENERIC_AD_VIDEO_STILL = carAdVideo;
export const GENERIC_AD_BANNER_STRIP = carAdBanner;

const PREVIEW_BASE = 'https://example.com/preview';

export function buildGenericPreviewUrl(
  selectedProductId: number | null,
  isStaticList: boolean
): string {
  if (selectedProductId == null) {
    return isStaticList ? `${PREVIEW_BASE}/brand-feature` : `${PREVIEW_BASE}/promotion`;
  }
  return isStaticList
    ? `${PREVIEW_BASE}/product/${selectedProductId}`
    : `${PREVIEW_BASE}/item/${selectedProductId}`;
}

type TFn = (key: TranslationKey) => string;

/**
 * Fictitious SKU labels for generic branding (prototype-only; not real trademarks).
 * Keys match product ids in STATIC_ITEMS (1–6) and PROMO_ITEMS (11–16).
 */
export const GENERIC_FICTITIOUS_PRODUCT_NAMES: Record<number, { ko: string; en: string }> = {
  1: { ko: '흔적 케어 세럼 50ml', en: 'Scar Care Serum 50ml' },
  2: { ko: '하이드로 베일 수분 패드 60매', en: 'Hydro Veil Moisture Pad 60ea' },
  3: { ko: '보태니컬 쿨링 패드 50매', en: 'Botanical Cooling Pad 50ea' },
  4: { ko: '리프팅 콜라겐 마스크 10매', en: 'Lifting Collagen Mask 10ea' },
  5: { ko: '흔적 리페어 앰플 30ml', en: 'Scar Repair Ampoule 30ml' },
  6: { ko: 'UV 실드 선세럼 SPF50+', en: 'UV Shield Sun Serum SPF50+' },
  11: { ko: '실크 헤어 오일 트리트먼트', en: 'Silk Hair Oil Treatment' },
  12: { ko: '헤어 글로우 에센스', en: 'Hair Glow Essence' },
  13: { ko: '포레스트 퍼퓸 바디워시', en: 'Forest Perfume Body Wash' },
  14: { ko: '허브 실크 헤어 세럼', en: 'Herbal Silk Hair Serum' },
  15: { ko: '허벌 뉴트리션 샴푸', en: 'Herbal Nutrition Shampoo' },
  16: { ko: '스킨 배리어 릴렉스 로션', en: 'Skin Barrier Relax Lotion' },
};

export function genericFictitiousProductName(productId: number): { ko: string; en: string } {
  const named = GENERIC_FICTITIOUS_PRODUCT_NAMES[productId];
  if (named) return named;
  const idx = ((Math.abs(productId) % 6) + 6) % 6;
  const rotateId = ([1, 2, 3, 4, 5, 6] as const)[idx];
  return GENERIC_FICTITIOUS_PRODUCT_NAMES[rotateId]!;
}

export function resolveProductDetail(
  productId: number,
  base: ProductDetail,
  generic: boolean,
  _locale: Locale,
  _t: TFn
): ProductDetail {
  if (!generic) return base;
  const fictitious = genericFictitiousProductName(productId);
  return {
    brand: {
      ko: translate('generic.brand_name', 'ko'),
      en: translate('generic.brand_name', 'en'),
    },
    name: fictitious,
    price: base.price,
    original: base.original,
    discount: base.discount,
    desc: {
      ko: translate('generic.product_desc', 'ko'),
      en: translate('generic.product_desc', 'en'),
    },
    img: genericProductImageForId(productId),
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
  _locale: Locale,
  _t: TFn
): PromoListItem[] {
  if (!generic) return items;
  return items.map((item) => ({
    ...item,
    name: genericFictitiousProductName(item.id),
    img: genericProductImageForId(item.id),
  }));
}
