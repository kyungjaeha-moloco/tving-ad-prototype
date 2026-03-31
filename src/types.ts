export type AdCategory = 'leadgen' | 'product';
export type LeadGenSubtype = 'manual' | 'messaging';
export type ProductSubtype = 'promo_list' | 'static_list';
export type Placement = 'instream' | 'outstream' | 'banner';
export type ViewMode = 'inapp' | 'bottomsheet';
export type MessagingViewMode = 'app_to_app' | 'web_bridge';

export interface ProductItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

export const MOCK_PRODUCTS: ProductItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Product ${i + 1}`,
  price: `${(Math.random() * 50000 + 10000).toLocaleString()}원`,
  image: `https://picsum.photos/seed/product${i + 1}/200/200`,
}));
