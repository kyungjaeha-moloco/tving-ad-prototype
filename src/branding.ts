import type { Locale } from './i18n';
import type { ProductDetail } from './types';
import type { TranslationKey } from './i18n';

export const GENERIC_BRANDING_STORAGE_KEY = 'tving-ad-generic-branding';

/** Single neutral stock image for all generic product thumbnails */
export const GENERIC_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop';

/** Hero / banner when hiding retailer-specific art */
export const GENERIC_HERO_IMAGE =
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=750&h=422&fit=crop&crop=center';

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
