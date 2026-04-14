import { useState, useEffect, useMemo } from 'react';
import { useLocale } from './LocaleContext';
import { 
  AdCategory, 
  LeadGenSubtype, 
  ProductSubtype, 
  Placement, 
  ViewMode,
  MessagingViewMode
} from './types';
import { 
  Smartphone, 
  MessageCircle, 
  LayoutList, 
  ExternalLink,
  ChevronDown,
  X,
  Share2,
  MoreHorizontal,
  Star,
  Monitor,
  Layers,
  Tag,
  VolumeX,
  Home,
  Search,
  FolderOpen,
  Wifi,
  ShoppingBag
} from 'lucide-react';
import BottomSheet from './components/BottomSheet';
import InAppBrowser from './components/InAppBrowser';
import LeadGenForm from './components/LeadGenForm';
import NativeLeadGenForm from './components/NativeLeadGenForm';
import ProductCarousel from './components/ProductCarousel';
import KakaoChannelFlow from './components/KakaoChannelFlow';
import LineChannelFlow from './components/LineChannelFlow';
import OliveYoungPromo, { PROMO_ITEMS } from './components/OliveYoungPromo';
import medihealHero from './assets/mediheal-hero.png';
import type { ProductDetail } from './types';
import {
  buildGenericDemoUrl,
  GENERIC_AD_BANNER_STRIP,
  GENERIC_AD_VIDEO_STILL,
  GENERIC_BINGE_POSTER,
  GENERIC_HERO_IMAGE,
  GENERIC_PRODUCT_IMAGE,
  GENERIC_RANKING_THUMB,
  resolveProductDetail,
} from './branding';

function OliveYoungPromoBrowser() {
  const { t, locale, genericBranding } = useLocale();
  const products = [
    { name: 'Moroccan Oil Treatment 100ml', nameKo: '모로칸오일 트리트먼트 100ml', price: '39,000원', priceEn: '₩39,000', original: '49,000원', originalEn: '₩49,000', discount: '20%', img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200&h=200&fit=crop' },
    { name: 'La Beaute Hair Essence Oil', nameKo: '라보떼 헤어 에센스 오일', price: '18,500원', priceEn: '₩18,500', original: '25,000원', originalEn: '₩25,000', discount: '26%', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=200&h=200&fit=crop' },
    { name: 'Dr.Body Perfume Body Wash', nameKo: '닥터바디 퍼퓸 바디워시', price: '12,900원', priceEn: '₩12,900', original: '18,000원', originalEn: '₩18,000', discount: '28%', img: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=200&h=200&fit=crop' },
    { name: 'Amos Green Tea Hair Serum', nameKo: '아모스 녹차 헤어 세럼', price: '15,900원', priceEn: '₩15,900', original: '22,000원', originalEn: '₩22,000', discount: '28%', img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=200&h=200&fit=crop' },
    { name: 'Ryo Jayang Shampoo 500ml', nameKo: '려 자양윤모 샴푸 500ml', price: '11,900원', priceEn: '₩11,900', original: '16,000원', originalEn: '₩16,000', discount: '26%', img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200&h=200&fit=crop' },
    { name: 'Illiyoon Ceramide Body Lotion', nameKo: '일리윤 세라마이드 바디로션', price: '13,500원', priceEn: '₩13,500', original: '19,000원', originalEn: '₩19,000', discount: '29%', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop' },
  ];

  const isEn = locale === 'en';
  const resolvedProducts = genericBranding
    ? products.map((p, i) => ({
        ...p,
        name: `${t('generic.item_name_prefix')} ${i + 1}`,
        nameKo: `${t('generic.item_name_prefix')} ${i + 1}`,
        img: GENERIC_PRODUCT_IMAGE,
      }))
    : products;

  return (
    <div className="bg-white min-h-full">
      <img
        src={genericBranding ? GENERIC_HERO_IMAGE : 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=750&h=400&fit=crop'}
        alt={genericBranding ? t('generic.retailer_name') : t('product.olive_young')}
        className="w-full aspect-[16/9] object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center ${genericBranding ? 'bg-slate-600' : 'bg-[#9bce26]'}`}>
            <span className="text-white text-[10px] font-black">{genericBranding ? t('generic.retailer_badge') : 'OY'}</span>
          </div>
          <span className="text-black font-bold text-[14px]">{genericBranding ? t('generic.retailer_name') : t('product.olive_young')}</span>
        </div>
        <h2 className="text-black font-extrabold text-[20px] leading-tight mt-2">{genericBranding ? t('generic.promo_headline') : t('product.beauty_honey_sale')}</h2>
        <p className="text-gray-500 text-[13px] mt-1">{genericBranding ? t('generic.up_to_line') : t('product.up_to_50')}</p>
        <p className="text-gray-400 text-[11px] mt-1">2026.03.20 ~ 2026.04.10</p>
      </div>
      <div className="h-[1px] bg-gray-100 mx-4" />
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-black font-bold text-[16px]">{t('product.promo_products')}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 pb-8">
        {resolvedProducts.map((p, i) => (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="aspect-square bg-gray-50">
              <img src={p.img} alt={isEn ? p.name : p.nameKo} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-3">
              <p className="text-gray-800 text-[12px] font-medium leading-tight line-clamp-2">{isEn ? p.name : p.nameKo}</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[#FF6B35] text-[13px] font-extrabold">{p.discount}</span>
                <span className="text-black text-[13px] font-bold">{isEn ? p.priceEn : p.price}</span>
              </div>
              <p className="text-gray-400 text-[11px] line-through">{isEn ? p.originalEn : p.original}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PRODUCT_DETAILS: Record<number, ProductDetail> = {
  1: { brand: { ko: '메디힐', en: 'Mediheal' }, name: { ko: '마데카소사이드 흔적 리페어 세럼 50ml', en: 'Madecassoside Scar Repair Serum 50ml' }, price: { ko: '19,800원', en: '₩19,800' }, original: { ko: '28,000원', en: '₩28,000' }, discount: '29%', desc: { ko: '마데카소사이드 성분이 피부 흔적을 집중 케어하는 더마 세럼.', en: 'A derma serum with madecassoside for intensive scar care.' }, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop' },
  2: { brand: { ko: '메디힐', en: 'Mediheal' }, name: { ko: 'N.M.F 아쿠아링 수분 패드 60매', en: 'N.M.F Aquaring Moisture Pad 60pcs' }, price: { ko: '14,500원', en: '₩14,500' }, original: { ko: '20,000원', en: '₩20,000' }, discount: '28%', desc: { ko: 'N.M.F 보습 인자가 피부에 즉각적인 수분감을 부여하는 패드.', en: 'Daily moisture pads with N.M.F hydrating factor.' }, img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop' },
  3: { brand: { ko: '메디힐', en: 'Mediheal' }, name: { ko: '티트리 카밍 에센스 패드 50매', en: 'Tea Tree Calming Essence Pad 50pcs' }, price: { ko: '12,900원', en: '₩12,900' }, original: { ko: '18,000원', en: '₩18,000' }, discount: '28%', desc: { ko: '티트리 추출물이 자극받은 피부를 빠르게 진정시키는 패드.', en: 'Tea tree extract pads for rapid skin soothing.' }, img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop' },
  4: { brand: { ko: '메디힐', en: 'Mediheal' }, name: { ko: '콜라겐 에센셜 리프팅 마스크팩 10매', en: 'Collagen Essential Lifting Mask 10pcs' }, price: { ko: '15,900원', en: '₩15,900' }, original: { ko: '22,000원', en: '₩22,000' }, discount: '28%', desc: { ko: '콜라겐이 피부 탄력과 보습에 도움을 주는 시트 마스크팩.', en: 'Collagen sheet masks for skin elasticity and hydration.' }, img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop' },
  5: { brand: { ko: '메디힐', en: 'Mediheal' }, name: { ko: '마데카 흔적 리페어 앰플 30ml', en: 'Madeca Scar Repair Ampoule 30ml' }, price: { ko: '22,500원', en: '₩22,500' }, original: { ko: '32,000원', en: '₩32,000' }, discount: '30%', desc: { ko: '고농축 마데카소사이드가 피부 재생과 흔적 개선을 돕는 앰플.', en: 'High-concentrate madecassoside ampoule for skin regeneration.' }, img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop' },
  6: { brand: { ko: '메디힐', en: 'Mediheal' }, name: { ko: '마데카소사이드 선 세럼 SPF50+', en: 'Madecassoside Sun Serum SPF50+' }, price: { ko: '16,900원', en: '₩16,900' }, original: { ko: '24,000원', en: '₩24,000' }, discount: '30%', desc: { ko: '마데카소사이드 성분의 자외선 차단 세럼.', en: 'Madecassoside sun protection serum.' }, img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop' },
  11: { brand: { ko: '모로칸오일', en: 'Moroccanoil' }, name: { ko: '오일 트리트먼트 100ml', en: 'Oil Treatment 100ml' }, price: { ko: '39,000원', en: '₩39,000' }, original: { ko: '49,000원', en: '₩49,000' }, discount: '20%', desc: { ko: '아르간 오일 기반 헤어 트리트먼트.', en: 'Argan oil-based hair treatment for all hair types.' }, img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop' },
  12: { brand: { ko: '라보떼', en: 'La Beaute' }, name: { ko: '헤어 에센스 오일 150ml', en: 'Hair Essence Oil 150ml' }, price: { ko: '18,500원', en: '₩18,500' }, original: { ko: '25,000원', en: '₩25,000' }, discount: '26%', desc: { ko: '가볍게 흡수되는 헤어 에센스.', en: 'Lightweight hair essence for damaged hair.' }, img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&h=400&fit=crop' },
  13: { brand: { ko: '닥터바디', en: 'Dr.Body' }, name: { ko: '퍼퓸 바디워시 500ml', en: 'Perfume Body Wash 500ml' }, price: { ko: '12,900원', en: '₩12,900' }, original: { ko: '18,000원', en: '₩18,000' }, discount: '28%', desc: { ko: '은은한 향이 오래 지속되는 퍼퓸 바디워시.', en: 'Long-lasting fragrance perfume body wash.' }, img: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=400&h=400&fit=crop' },
  14: { brand: { ko: '아모스', en: 'Amos' }, name: { ko: '녹차 실크 헤어 세럼 80ml', en: 'Green Tea Silk Hair Serum 80ml' }, price: { ko: '15,900원', en: '₩15,900' }, original: { ko: '22,000원', en: '₩22,000' }, discount: '28%', desc: { ko: '녹차 추출물이 모발에 실크같은 광택과 영양을 부여.', en: 'Green tea extract for silky smooth hair.' }, img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=400&h=400&fit=crop' },
  15: { brand: { ko: '려', en: 'Ryo' }, name: { ko: '자양윤모 샴푸 500ml', en: 'Jayang Nourishing Shampoo 500ml' }, price: { ko: '11,900원', en: '₩11,900' }, original: { ko: '16,000원', en: '₩16,000' }, discount: '26%', desc: { ko: '인삼 성분이 두피와 모발에 영양을 공급.', en: 'Ginseng-enriched herbal shampoo for scalp and hair.' }, img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop' },
  16: { brand: { ko: '일리윤', en: 'Illiyoon' }, name: { ko: '세라마이드 아토 바디로션 350ml', en: 'Ceramide Ato Body Lotion 350ml' }, price: { ko: '13,500원', en: '₩13,500' }, original: { ko: '19,000원', en: '₩19,000' }, discount: '29%', desc: { ko: '세라마이드가 피부 장벽을 강화하고 깊은 보습을 제공.', en: 'Ceramide for skin barrier strengthening and deep hydration.' }, img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop' },
};

function OliveYoungProductPage({ productId }: { productId: number }) {
  const { locale, t, genericBranding } = useLocale();
  const base = PRODUCT_DETAILS[productId];
  if (!base) return null;
  const product = resolveProductDetail(productId, base, genericBranding, locale, t);

  return (
    <div className="bg-white min-h-full">
      <div className="aspect-square bg-gray-50">
        <img src={product.img} alt={product.name[locale]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="px-4 py-4">
        <p className="text-gray-500 text-[12px] font-medium">{product.brand[locale]}</p>
        <h2 className="text-black font-bold text-[18px] leading-tight mt-1">{product.name[locale]}</h2>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[#FF6B35] text-[20px] font-extrabold">{product.discount}</span>
          <span className="text-black text-[20px] font-bold">{product.price[locale]}</span>
        </div>
        <p className="text-gray-400 text-[13px] line-through">{product.original[locale]}</p>
        <p className="text-gray-600 text-[13px] leading-relaxed mt-4">{product.desc[locale]}</p>
      </div>
      <div className="h-[1px] bg-gray-100 mx-4" />
      <div className="px-4 py-4 flex gap-3">
        <button className="flex-1 bg-gray-100 text-gray-700 font-bold text-[14px] py-3 rounded-xl">{t('product.add_to_cart')}</button>
        <button className="flex-1 bg-[#9bce26] text-white font-bold text-[14px] py-3 rounded-xl">{t('product.buy_now')}</button>
      </div>
    </div>
  );
}

export default function App() {
  const { locale, setLocale, t, genericBranding, setGenericBranding } = useLocale();
  const [category, setCategory] = useState<AdCategory>('leadgen');
  const [leadGenSubtype, setLeadGenSubtype] = useState<LeadGenSubtype>('manual');
  const [productSubtype, setProductSubtype] = useState<ProductSubtype>('promo_list');
  const [placement, setPlacement] = useState<Placement>('instream');

  const [viewMode, setViewMode] = useState<ViewMode>('inapp');
  const [messagingViewMode, setMessagingViewMode] = useState<MessagingViewMode>('app_to_app');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isInAppBrowserOpen, setIsInAppBrowserOpen] = useState(false);
  const [isKakaoActive, setIsKakaoActive] = useState(false);
  const [kakaoKey, setKakaoKey] = useState(0);
  const [showBridge, setShowBridge] = useState(false);

  useEffect(() => {
    setIsBottomSheetOpen(false);
    setIsInAppBrowserOpen(false);
    setIsKakaoActive(false);
    setShowBridge(false);
  }, [category, leadGenSubtype, productSubtype, placement, viewMode, messagingViewMode]);

  const handleTriggerAd = (mode: ViewMode) => {
    if (isMessaging) {
      if (messagingViewMode === 'web_bridge') {
        setShowBridge(true);
        setTimeout(() => {
          setShowBridge(false);
          setIsKakaoActive(true);
          setKakaoKey(prev => prev + 1);
        }, 2000);
      } else {
        setIsKakaoActive(true);
        setKakaoKey(prev => prev + 1);
      }
      return;
    }
    if (mode === 'bottomsheet') {
      setIsBottomSheetOpen(true);
    } else {
      setIsInAppBrowserOpen(true);
    }
  };

  const isMessaging = category === 'leadgen' && leadGenSubtype === 'messaging';
  const isPromoList = category === 'product' && productSubtype === 'promo_list';
  const isStaticList = category === 'product' && productSubtype === 'static_list';
  const isProduct = category === 'product';
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const adContent = useMemo(() => {
    const g = genericBranding;
    return isMessaging
      ? {
          videoImg: g ? GENERIC_AD_VIDEO_STILL : 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=750&h=422&fit=crop&crop=center',
          videoAlt: t('ad.insurance.video_alt'),
          advertiser: g ? t('generic.ad.insurance.advertiser') : t('ad.insurance.advertiser'),
          bannerImg: g ? GENERIC_AD_BANNER_STRIP : 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=200&fit=crop&crop=center',
          bannerAlt: t('ad.insurance.video_alt'),
          bannerTag: t('ad.insurance.banner_tag'),
          bannerTitle: g ? t('generic.ad.insurance.banner_title') : t('ad.insurance.banner_title'),
          bannerSub: g ? t('generic.ad.insurance.banner_sub') : t('ad.insurance.banner_sub'),
          outstreamAlt: t('ad.insurance.video_alt'),
        }
      : {
          videoImg: g ? GENERIC_AD_VIDEO_STILL : 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=750&h=422&fit=crop&crop=center',
          videoAlt: t('ad.car.video_alt'),
          advertiser: g ? t('generic.ad.car.advertiser') : t('ad.car.advertiser'),
          bannerImg: g ? GENERIC_AD_BANNER_STRIP : 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=700&h=200&fit=crop&crop=center',
          bannerAlt: t('ad.car.video_alt'),
          bannerTag: t('ad.car.banner_tag'),
          bannerTitle: g ? t('generic.ad.car.banner_title') : t('ad.car.banner_title'),
          bannerSub: g ? t('generic.ad.car.banner_sub') : t('ad.car.banner_sub'),
          outstreamAlt: t('ad.car.video_alt'),
        };
  }, [isMessaging, genericBranding, t]);

  const ActionButtons = () => (
    <div className="flex gap-2 w-full">
      {isMessaging ? (
        <button 
          onClick={() => alert(t('kakao.alert'))}
          className={`px-4 py-2.5 rounded-full font-bold text-[11px] flex items-center justify-center gap-2 flex-1 active:scale-95 transition-transform ${
            locale === 'en'
              ? 'bg-[#06C755] text-white'
              : 'bg-[#FEE500] text-[#3C1E1E]'
          }`}
        >
          {locale === 'en' ? (
            <svg width="15" height="15" viewBox="0 0 40 40" fill="none">
              <path d="M33 18.2C33 12.5 27.2 7.8 20 7.8C12.8 7.8 7 12.5 7 18.2C7 23.3 11.5 27.6 17.6 28.5C18 28.6 18.6 28.7 18.7 29C18.8 29.3 18.8 29.7 18.7 30L18.4 31.4C18.3 31.8 18.1 32.6 19.1 32.2C20.1 31.8 26.8 27.6 29.6 24.3C31.7 22 33 20.2 33 18.2Z" fill="white"/>
            </svg>
          ) : (
            <MessageCircle size={15} fill="#3C1E1E" />
          )}
          {t('action.start_consulting')}
        </button>
      ) : (
        <>
          <button 
            onClick={() => handleTriggerAd('inapp')}
            className="bg-red-600 text-white px-3 py-2.5 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 flex-1 active:scale-95 transition-transform"
          >
            <Smartphone size={13} />
            {t('action.inapp_browser')}
          </button>
          <button 
            onClick={() => handleTriggerAd('bottomsheet')}
            className="bg-white text-black px-3 py-2.5 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 flex-1 active:scale-95 transition-transform"
          >
            <ChevronDown size={13} />
            {t('action.bottom_sheet')}
          </button>
        </>
      )}
    </div>
  );

  const placementOptions: { key: Placement; label: string; icon: typeof Monitor }[] = [
    { key: 'instream', label: 'In-Stream', icon: Monitor },
    { key: 'outstream', label: 'Out-Stream', icon: Layers },
    { key: 'banner', label: 'Banner', icon: Tag },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-500/30">
      {/* ── Control Panel ── */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex bg-[#1a1a1a] p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setCategory('leadgen')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${category === 'leadgen' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                {t('category.leadgen')}
              </button>
              <button
                onClick={() => setCategory('product')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${category === 'product' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                {t('category.product')}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer select-none group">
                <input
                  type="checkbox"
                  checked={genericBranding}
                  onChange={(e) => setGenericBranding(e.target.checked)}
                  className="rounded border-white/25 bg-[#1a1a1a] text-red-600 focus:ring-2 focus:ring-red-500/30"
                  aria-label={t('settings.generic_brands_aria')}
                />
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-300 max-w-[100px] leading-tight">
                  {t('settings.generic_brands')}
                </span>
              </label>
              <button
                type="button"
                onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-bold transition-all hover:border-white/30 bg-[#1a1a1a]"
              >
                <span className={locale === 'ko' ? 'text-white' : 'text-gray-500'}>KR</span>
                <span className="text-gray-600">/</span>
                <span className={locale === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            {/* Subtype */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 font-semibold tracking-wider">TYPE</span>
              {category === 'leadgen' ? (
                <>
                  <button onClick={() => setLeadGenSubtype('manual')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${leadGenSubtype === 'manual' ? 'bg-white text-black border-white' : 'text-gray-400 border-white/10'}`}>
                    Manual submission
                  </button>
                  <button onClick={() => setLeadGenSubtype('messaging')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${leadGenSubtype === 'messaging' ? 'bg-white text-black border-white' : 'text-gray-400 border-white/10'}`}>
                    Messaging
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => setProductSubtype('promo_list')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${productSubtype === 'promo_list' ? 'bg-white text-black border-white' : 'text-gray-400 border-white/10'}`}>
                    Promo + List
                  </button>
                  <button onClick={() => setProductSubtype('static_list')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${productSubtype === 'static_list' ? 'bg-white text-black border-white' : 'text-gray-400 border-white/10'}`}>
                    Static list
                  </button>
                </>
              )}
            </div>

            <div className="w-px h-5 bg-white/10" />

            {/* View Mode */}
            {category !== 'product' && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500 font-semibold tracking-wider">VIEW</span>
                {isMessaging ? (
                  <>
                    <button onClick={() => setMessagingViewMode('app_to_app')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all flex items-center gap-1.5 ${messagingViewMode === 'app_to_app' ? 'bg-white/10 text-white border-white/20' : 'text-gray-500 border-white/10'}`}>
                      <ExternalLink size={10} /> App to App
                    </button>
                    <button onClick={() => setMessagingViewMode('web_bridge')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all flex items-center gap-1.5 ${messagingViewMode === 'web_bridge' ? 'bg-white/10 text-white border-white/20' : 'text-gray-500 border-white/10'}`}>
                      <Monitor size={10} /> Web Bridge Page
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setViewMode('inapp')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all flex items-center gap-1.5 ${viewMode === 'inapp' ? 'bg-white/10 text-white border-white/20' : 'text-gray-500 border-white/10'}`}>
                      <Smartphone size={10} /> {t('view.inapp')}
                    </button>
                    <button onClick={() => setViewMode('bottomsheet')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all flex items-center gap-1.5 ${viewMode === 'bottomsheet' ? 'bg-white/10 text-white border-white/20' : 'text-gray-500 border-white/10'}`}>
                      <ChevronDown size={10} /> {t('view.bottomsheet')}
                    </button>
                  </>
                )}
              </div>
            )}

            {category !== 'product' && <div className="w-px h-5 bg-white/10" />}

            {/* Placement */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 font-semibold tracking-wider">PLACEMENT</span>
              {placementOptions.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setPlacement(key)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all flex items-center gap-1.5 ${
                    placement === key
                      ? 'bg-red-600/20 text-red-400 border-red-500/40'
                      : 'text-gray-500 border-white/10 hover:border-white/20'
                  }`}
                >
                  <Icon size={11} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Phone Mockup ── */}
      <main className="mx-auto px-6 py-8 flex flex-col items-center max-w-7xl">
        <div className={`flex items-center ${isMessaging ? 'gap-6' : ''}`}>
        <div className="relative w-[360px] bg-black rounded-[2.8rem] border-[6px] border-[#2a2a2a] shadow-[0_0_60px_rgba(0,0,0,0.6),0_0_120px_rgba(220,38,38,0.06)] overflow-hidden" style={{ aspectRatio: '9 / 19.5' }}>

          {/* Dynamic Island */}
          <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-center gap-[38px]">
            <div className="w-[7px] h-[7px] bg-[#1a1a2e] rounded-full" />
          </div>

          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-[48px] flex items-end pb-[6px] px-7 justify-between z-40">
            <span className="text-white font-semibold text-[15px] tabular-nums w-10">2:48</span>
            <div className="w-[100px]" />
            <div className="flex items-center gap-[5px]">
              <div className="flex items-end gap-[1.5px] h-[11px]">
                <div className="w-[3px] h-[3px] bg-white rounded-[0.5px]" />
                <div className="w-[3px] h-[5px] bg-white rounded-[0.5px]" />
                <div className="w-[3px] h-[7px] bg-white rounded-[0.5px]" />
                <div className="w-[3px] h-[10px] bg-white rounded-[0.5px]" />
              </div>
              <span className="text-white font-semibold text-[12px] ml-[2px]">LTE</span>
              <div className="flex items-center ml-[3px]">
                <div className="relative w-[22px] h-[11px] border border-white/60 rounded-[2.5px] overflow-hidden">
                  <div className="absolute inset-[1px] rounded-[1.5px] bg-[#34C759]" style={{ width: 'calc(100% - 2px)' }} />
                </div>
                <div className="w-[1.5px] h-[4px] bg-white/50 rounded-r-[1px] ml-[1px]" />
              </div>
            </div>
          </div>

          {/* Scrollable Phone Content */}
          {placement === 'outstream' ? (
            /* ══════════ OUT-STREAM: Home Feed Layout ══════════ */
            <div className="absolute inset-0 z-10 bg-black flex flex-col overflow-y-auto scrollbar-hide">
              <div className="h-[52px] shrink-0" />

              {/* Category Tabs */}
              <div className="px-3 pt-1 pb-2 flex gap-[14px] overflow-x-auto scrollbar-hide">
                {[t('tab.home'), t('tab.drama'), t('tab.entertainment'), t('tab.movie'), t('tab.sports'), t('tab.anime'), t('tab.news')].map((tab, i) => (
                  <button
                    key={tab}
                    className={`shrink-0 text-[15px] font-bold pb-1 transition-colors ${
                      i === 0 ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Ranking Section */}
              <div className="pl-3 pt-2 pb-3 flex gap-[10px] overflow-x-auto scrollbar-hide">
                {(genericBranding
                  ? [
                      { rank: 1, title: t('generic.channel_title_1'), sub: t('generic.ranking_sub_1'), pct: '30.6%', color: '#0072bc', logo: t('generic.channel_logo_1'), img: GENERIC_RANKING_THUMB },
                      { rank: 2, title: t('generic.channel_title_2'), sub: t('generic.ranking_sub_2'), pct: '10.4%', color: '#c8102e', logo: t('generic.channel_logo_2'), img: GENERIC_RANKING_THUMB },
                      { rank: 3, title: t('generic.channel_title_3'), sub: t('generic.ranking_sub_3'), pct: '8.3%', color: '#e85d00', logo: t('generic.channel_logo_3'), img: GENERIC_RANKING_THUMB },
                    ]
                  : [
                      { rank: 1, title: 'YTN', sub: t('ranking.sub_newsquare'), pct: '30.6%', color: '#0072bc', logo: 'YTN', img: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300&h=170&fit=crop' },
                      { rank: 2, title: 'MBC', sub: t('ranking.sub_mudo'), pct: '10.4%', color: '#c8102e', logo: 'MBC', img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&h=170&fit=crop' },
                      { rank: 3, title: locale === 'ko' ? '연합뉴스' : 'Yonhap', sub: t('ranking.sub_yonhap'), pct: '8.3%', color: '#e85d00', logo: locale === 'ko' ? '연합' : 'YH', img: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=300&h=170&fit=crop' },
                    ]
                ).map((item) => (
                  <div key={item.rank} className="shrink-0 w-[150px]">
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#111]">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      
                      <div className="absolute top-[4px] right-[4px] bg-black/60 rounded-[3px] overflow-hidden flex items-center justify-center" style={{ width: 20, height: 14 }}>
                        <span className="text-white text-[7px] font-bold">{item.logo}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-[6px] mt-[6px]">
                      <span className="text-white font-black text-[22px] leading-none">{item.rank}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-white text-[11px] font-bold truncate">{item.title}</p>
                        <p className="text-gray-500 text-[9px] truncate">{item.sub}</p>
                        <p className="text-gray-600 text-[9px]">{item.pct}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── OUT-STREAM AD ── */}
              {isProduct ? (
                <OliveYoungPromo
                  variant={isStaticList ? 'static' : 'promo'}
                  showSkip={false}
                  showDetail={isStaticList}
                  onProductClick={(id) => { setSelectedProductId(isStaticList ? id : null); setIsInAppBrowserOpen(true); }}
                  onPromoClick={() => { setSelectedProductId(null); setIsInAppBrowserOpen(true); }}
                />
              ) : (
                <div className="relative w-full bg-[#111] overflow-hidden">
                  <div className="absolute top-[8px] left-[10px] bg-black/60 text-white text-[9px] font-bold px-[6px] py-[2px] rounded z-10">AD</div>
                  <button className="absolute top-[8px] right-[10px] text-white/70 z-10">
                    <VolumeX size={16} />
                  </button>

                  <button
                    onClick={() => handleTriggerAd(viewMode)}
                    className="absolute bottom-[16px] right-3 bg-white/95 text-black pl-3 pr-2.5 py-[5px] rounded-[3px] font-bold text-[11px] flex items-center gap-1 shadow-sm active:scale-95 transition-transform z-10"
                  >
                    {t('ad.more_info')}
                    <ExternalLink size={11} strokeWidth={2.5} />
                  </button>

                  <div className="w-full aspect-video bg-[#111] overflow-hidden">
                    <img
                      src={adContent.videoImg}
                      alt={adContent.outstreamAlt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Red progress bar */}
                  <div className="w-full h-[3px] bg-gray-800">
                    <div className="h-full bg-red-600" style={{ width: '35%' }} />
                  </div>
                </div>
              )}

              {/* Popular Binge Channels */}
              <div className="px-4 pt-4 pb-2 flex items-center justify-between">
                <h3 className="text-white text-[16px] font-bold">{t('section.popular_binge')}</h3>
                <button className="text-gray-500 text-[12px]">{t('section.see_more')}</button>
              </div>

              <div className="pl-4 pb-4 flex gap-[10px] overflow-x-auto scrollbar-hide">
                {(genericBranding
                  ? [
                      { title: t('generic.binge_1'), ep: `7${t('binge.ep')}`, img: GENERIC_BINGE_POSTER },
                      { title: t('generic.binge_2'), ep: `8${t('binge.ep')}`, img: GENERIC_BINGE_POSTER },
                      { title: t('generic.binge_3'), ep: `8${t('binge.ep')}`, img: GENERIC_BINGE_POSTER },
                    ]
                  : [
                      { title: t('binge.samsiseki5'), ep: `7${t('binge.ep')}`, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=280&h=380&fit=crop' },
                      { title: t('binge.hospital2'), ep: `8${t('binge.ep')}`, img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=280&h=380&fit=crop' },
                      { title: t('binge.samsiseki_gochang'), ep: `8${t('binge.ep')}`, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=280&h=380&fit=crop' },
                    ]
                ).map((item, i) => (
                  <div key={i} className="shrink-0 w-[120px]">
                    <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#1a1a1a]">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      
                    </div>
                    <p className="text-white text-[11px] font-medium mt-[5px] truncate">{item.title}</p>
                    <p className="text-gray-500 text-[10px]">{item.ep}</p>
                  </div>
                ))}
              </div>

              {/* Bottom spacer for tab bar */}
              <div className="h-[70px] shrink-0" />

              {/* Bottom Tab Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 flex items-end justify-around px-2 pt-[6px] pb-[22px] z-20">
                {[
                  { icon: <Home size={20} />, label: t('tab_bar.home'), active: true },
                  { icon: <><span className="text-[11px] font-black leading-none">ID</span><span className="text-[8px] text-yellow-400 font-bold leading-none -ml-0.5">$</span></>, label: t('tab_bar.shorts'), active: false },
                  { icon: <><Wifi size={17} /><span className="absolute -top-[1px] -right-[6px] bg-red-600 text-white text-[7px] font-bold w-[13px] h-[13px] rounded-full flex items-center justify-center">N</span></>, label: t('tab_bar.live'), active: false },
                  { icon: <Search size={20} />, label: t('tab_bar.search'), active: false },
                  { icon: <FolderOpen size={20} />, label: t('tab_bar.history'), active: false },
                ].map((tab, i) => (
                  <button key={i} className="flex flex-col items-center gap-[2px] relative min-w-[48px]">
                    <div className={`relative ${tab.active ? 'text-white' : 'text-gray-600'}`}>{tab.icon}</div>
                    <span className={`text-[9px] ${tab.active ? 'text-white font-bold' : 'text-gray-600'}`}>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* ══════════ IN-STREAM / BANNER: Default Layout ══════════ */
            <div className="absolute inset-0 z-10 bg-black flex flex-col overflow-y-auto scrollbar-hide">
              <div className="h-[52px] shrink-0" />

              {/* ── Video / Promo Area ── */}
              {isProduct && placement !== 'banner' ? (
                <OliveYoungPromo
                  variant={isStaticList ? 'static' : 'promo'}
                  onProductClick={(id) => { setSelectedProductId(isStaticList ? id : null); setIsInAppBrowserOpen(true); }}
                  onPromoClick={() => { setSelectedProductId(null); setIsInAppBrowserOpen(true); }}
                />
              ) : (
                <div className="relative w-full aspect-video bg-[#111] shrink-0 overflow-hidden">
                  <img
                    src={adContent.videoImg}
                    alt={adContent.videoAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <button
                    onClick={() => handleTriggerAd(viewMode)}
                    className="absolute top-3 right-3 bg-white/95 text-black pl-3 pr-2.5 py-[5px] rounded-[3px] font-bold text-[11px] flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
                  >
                    {t('ad.more_info')}
                    <ExternalLink size={11} strokeWidth={2.5} />
                  </button>

                  <div className="absolute bottom-[28px] right-0 bg-black/70 pl-3 pr-3 py-[3px] text-white text-[11px] font-medium rounded-l-full">
                    <span className="font-bold">4</span>{t('ad.skip')}
                  </div>

                  <div className="absolute bottom-[8px] right-[10px] text-[11px] font-bold text-white flex items-center gap-[3px]">
                    {t('ad.label')} <span className="text-[#FFD700]">· 18</span>
                  </div>

                  <div className="absolute bottom-[8px] left-[10px] text-[8px] text-white/30 truncate max-w-[50%]">
                    {adContent.advertiser}
                  </div>
                </div>
              )}

              {/* ── Title ── */}
              <div className="px-4 pt-4 pb-1">
                <h2 className="text-white text-[18px] font-bold leading-snug">{genericBranding ? t('generic.content_program') : t('content.title')}</h2>
                <p className="text-gray-500 text-[13px] mt-[2px]">{t('content.time')}</p>
              </div>

              {/* ── 3 Buttons ── */}
              <div className="px-4 py-3 flex gap-2">
                {[
                  { icon: <MessageCircle size={15} />, label: t('btn.tving_talk') },
                  { icon: <LayoutList size={15} />, label: t('btn.next_show') },
                  { icon: <Share2 size={15} />, label: t('btn.share') },
                ].map(({ icon, label }) => (
                  <button key={label} className="flex-1 bg-[#1c1c1c] py-[10px] rounded-lg flex items-center justify-center gap-[6px] text-[12px] font-medium text-white/80 active:bg-[#2a2a2a] transition-colors">
                    {icon} {label}
                  </button>
                ))}
              </div>

              {/* ── Channel Info ── */}
              <div className="px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#0072bc] flex items-center justify-center">
                    <span className="text-white font-extrabold text-[11px]">{genericBranding ? t('generic.channel_logo_1') : 'YTN'}</span>
                  </div>
                  <span className="text-white font-bold text-[16px]">{genericBranding ? t('generic.channel_title_1') : 'YTN'}</span>
                </div>
                <Star size={24} className="text-gray-600" />
              </div>

              {/* ── Banner AD ── */}
              <div className={isProduct && placement === 'banner' ? 'py-2' : 'px-4 py-2'}>
                {isProduct && placement === 'banner' ? (
                  <div className="relative w-full overflow-hidden border-y border-red-500/30">
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img
                        src={
                          genericBranding
                            ? GENERIC_HERO_IMAGE
                            : isStaticList
                              ? medihealHero
                              : 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=750&h=400&fit=crop&crop=center'
                        }
                        alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
                    </div>

                    <div className="absolute top-[8px] right-[10px] z-10 bg-red-600 text-white text-[7px] font-bold px-1.5 py-0.5 rounded">AD</div>

                    {/* Header */}
                    <button
                      onClick={() => { setSelectedProductId(null); setIsInAppBrowserOpen(true); }}
                      className={`relative w-full flex items-center gap-[10px] px-4 pt-3 pb-2 active:opacity-80 transition-opacity z-10 ${isPromoList ? 'justify-center' : ''}`}
                    >
                      
                      <div className={`min-w-0 ${isPromoList ? 'text-center' : 'flex-1 text-left'}`}>
                        <p className="text-white text-[13px] font-bold leading-tight">
                          {isStaticList
                            ? genericBranding
                              ? t('generic.mediheal_in_store')
                              : t('product.mediheal_in_oy')
                            : genericBranding
                              ? t('generic.promo_sale_with_pct')
                              : `${t('product.beauty_sale')} 50%`}
                        </p>
                        <p className="text-white/40 text-[10px]">
                          {isStaticList
                            ? genericBranding
                              ? t('generic.derma_sub')
                              : t('product.derma_best')
                            : genericBranding
                              ? t('generic.promo_banner_sub')
                              : t('product.oy_exclusive')}
                        </p>
                      </div>
                      
                    </button>

                    {/* Scrollable product cards */}
                    <div className="relative flex gap-[8px] overflow-x-auto scrollbar-hide px-4 pb-3 z-10">
                      {(isStaticList
                        ? [1, 2, 3, 4, 5, 6]
                        : [11, 12, 13, 14, 15, 16]
                      ).map(id => {
                        const p = PRODUCT_DETAILS[id];
                        if (!p) return null;
                        const row = resolveProductDetail(id, p, genericBranding, locale, t);
                        return (
                          <button
                            key={id}
                            onClick={() => { setSelectedProductId(isStaticList ? id : null); setIsInAppBrowserOpen(true); }}
                            className="shrink-0 w-[72px] text-left active:scale-[0.95] transition-transform"
                          >
                            <div className="w-[72px] h-[72px] rounded-[8px] overflow-hidden bg-white/10 ring-1 ring-white/10">
                              <img src={row.img} alt={row.name[locale]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <p className="text-white/60 text-[9px] font-medium mt-[3px] leading-tight line-clamp-1 text-center">{row.name[locale].split(' ').slice(0, 2).join(' ')}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={placement === 'banner' ? () => handleTriggerAd(viewMode) : undefined}
                    className={`relative w-full rounded-xl overflow-hidden border text-left transition-all ${
                      placement === 'banner'
                        ? 'border-red-500/40 ring-1 ring-red-500/20 active:scale-[0.98] cursor-pointer'
                        : 'border-white/5 cursor-default'
                    }`}
                  >
                    {placement === 'banner' && (
                      <div className="absolute bottom-2 right-2 bg-red-600 text-white text-[7px] font-bold px-1.5 py-0.5 rounded z-10">AD</div>
                    )}
                    <div className="relative w-full h-[80px] overflow-hidden">
                      <img
                        src={adContent.bannerImg}
                        alt={adContent.bannerAlt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center px-4">
                        <div className="flex flex-col">
                          <p className="text-[9px] text-gray-300 font-semibold tracking-wider uppercase">{adContent.bannerTag}</p>
                          <p className="text-[15px] font-extrabold text-white leading-snug">{adContent.bannerTitle}</p>
                          <p className="text-[10px] text-gray-300 mt-[1px]">{adContent.bannerSub}</p>
                        </div>
                      </div>
                    </div>
                    
                  </button>
                )}
              </div>

              {/* ── Tabs ── */}
              <div className="px-4 pt-3 flex gap-6 border-b border-white/10">
                <button className="pb-[10px] text-white font-bold text-[14px] border-b-2 border-white">{t('tab.all_channels')}</button>
                <button className="pb-[10px] text-gray-500 font-medium text-[14px]">{t('tab.recommended')}</button>
              </div>


              {/* ── Channel List ── */}
              <div className="px-4 pt-3 space-y-[14px] pb-36">
                {(genericBranding
                  ? [
                      { title: t('generic.channel_title_1'), time: '13:50 ~ 15:50', logo: t('generic.channel_logo_1'), color: '#0072bc' },
                      { title: t('generic.channel_title_2'), time: '14:18 ~ 15:37', logo: t('generic.channel_logo_2'), color: '#c8102e' },
                      { title: t('generic.channel_title_3'), time: '13:40 ~ 15:10', logo: t('generic.channel_logo_3'), color: '#e85d00' },
                      { title: t('generic.channel_title_4'), time: '14:29 ~ 14:50', logo: t('generic.channel_logo_4'), color: '#00b4d8' },
                    ]
                  : [
                      { title: t('content.title'), time: '13:50 ~ 15:50', logo: 'YTN', color: '#0072bc' },
                      { title: t('channel.mudo'), time: '14:18 ~ 15:37', logo: 'MBC', color: '#c8102e' },
                      { title: t('channel.yonhap'), time: '13:40 ~ 15:10', logo: locale === 'ko' ? '연합뉴스TV' : 'Yonhap TV', color: '#e85d00' },
                      { title: t('channel.conan'), time: '14:29 ~ 14:50', logo: 'ANIMAX', color: '#00b4d8' },
                    ]
                ).map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="relative w-[124px] aspect-video rounded-lg overflow-hidden shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: item.color }}>
                        <span className="text-white font-bold text-[10px] text-center leading-tight px-1 drop-shadow">{item.logo}</span>
                      </div>
                      
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-[13px] font-medium leading-snug line-clamp-2">{item.title}</h4>
                      <p className="text-gray-500 text-[11px] mt-[3px]">{item.time}</p>
                    </div>
                    <button className="text-gray-600 shrink-0 p-1">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* (Banner triggers via 3 PACK banner inline) */}

          {/* ── Overlay Views ── */}
          <InAppBrowser
            isOpen={isInAppBrowserOpen}
            onClose={() => { setIsInAppBrowserOpen(false); setSelectedProductId(null); }}
            url={isProduct
              ? genericBranding
                ? buildGenericDemoUrl(selectedProductId, isStaticList)
                : selectedProductId
                  ? isStaticList
                    ? `https://www.oliveyoung.co.kr/store/goods/${selectedProductId}`
                    : `https://www.oliveyoung.co.kr/product/${selectedProductId}`
                  : isStaticList
                    ? 'https://www.oliveyoung.co.kr/store/brand/mediheal'
                    : 'https://www.oliveyoung.co.kr/store/planshop'
              : 'https://tving.com/ads'
            }
          >
            {isProduct ? (
              selectedProductId ? (
                <OliveYoungProductPage productId={selectedProductId} />
              ) : (
                <OliveYoungPromoBrowser />
              )
            ) : (
              <div className="p-5">
                <LeadGenForm onSubmit={() => setIsInAppBrowserOpen(false)} variant={isMessaging ? 'insurance' : 'car'} />
              </div>
            )}
          </InAppBrowser>

          <BottomSheet
            isOpen={isBottomSheetOpen}
            onClose={() => setIsBottomSheetOpen(false)}
            title={isMessaging ? t('bottomsheet.insurance') : t('bottomsheet.test_drive')}
          >
            <NativeLeadGenForm onSubmit={() => setIsBottomSheetOpen(false)} variant={isMessaging ? 'insurance' : 'car'} />
          </BottomSheet>

          {/* Web Bridge Overlay */}
          {showBridge && (
            <div className={`absolute inset-0 z-[60] flex flex-col items-center justify-center gap-6 rounded-[2.2rem] ${locale === 'en' ? 'bg-[#06C755]' : 'bg-white'}`}>
              {locale === 'en' ? (
                <>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="36" fill="white" />
                    <path d="M58 35.4C58 26.1 49.4 18.6 38.8 18.6C28.2 18.6 19.6 26.1 19.6 35.4C19.6 43.8 26.2 50.9 35.2 52.2C35.8 52.4 36.6 52.6 36.8 53C37 53.4 36.9 54 36.8 54.4L36.4 56.2C36.3 56.8 35.9 57.8 37.3 57.2C38.7 56.6 47.5 51.2 51.4 46.9C54.2 43.9 58 41.5 58 35.4Z" fill="#06C755"/>
                  </svg>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-white font-bold text-[15px]">{t('bridge.moving_to_kakao')}</p>
                    <p className="text-white/70 text-[12px]">{t('bridge.please_wait')}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 rounded-[22px] bg-[#FEE500] flex items-center justify-center shadow-lg">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <path d="M22 6C12.611 6 5 12.05 5 19.5C5 24.267 8.385 28.42 13.32 30.77L11.5 37.5C11.4 37.85 11.8 38.15 12.1 37.95L20.1 32.75C20.72 32.82 21.35 32.86 22 32.86C31.389 32.86 39 26.93 39 19.5C39 12.05 31.389 6 22 6Z" fill="#3C1E1E"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-black font-bold text-[15px]">{t('bridge.moving_to_kakao')}</p>
                    <p className="text-gray-400 text-[12px]">{t('bridge.please_wait')}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-[#FEE500] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[#FEE500] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[#FEE500] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Messaging: Arrow + demo messenger phone */}
        {isMessaging && (
          <>
            <div className="flex flex-col items-center gap-1 text-gray-500 shrink-0">
              <span className="text-[10px] font-bold tracking-wider">
                {messagingViewMode === 'web_bridge' ? 'WEB BRIDGE' : 'APP TO APP'}
              </span>
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path d="M4 12H32M32 12L24 5M32 12L24 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className={`relative w-[360px] bg-black rounded-[2.8rem] border-[6px] border-[#2a2a2a] overflow-hidden transition-all duration-500 ${isKakaoActive ? (locale === 'en' ? 'shadow-[0_0_60px_rgba(6,199,85,0.15),0_0_120px_rgba(6,199,85,0.06)]' : 'shadow-[0_0_60px_rgba(254,229,0,0.15),0_0_120px_rgba(254,229,0,0.06)]') : 'shadow-[0_0_60px_rgba(0,0,0,0.6)] opacity-40'}`} style={{ aspectRatio: '9 / 19.5' }}>
              {/* Dynamic Island */}
              <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-center gap-[38px]">
                <div className="w-[7px] h-[7px] bg-[#1a1a2e] rounded-full" />
              </div>

              {isKakaoActive ? (
                <div className="absolute inset-0 z-10 overflow-hidden">
                  <div className="h-[11px] bg-black" />
                  <div className="h-[calc(100%-11px)]">
                    {locale === 'en' ? <LineChannelFlow key={kakaoKey} /> : <KakaoChannelFlow key={kakaoKey} />}
                  </div>
                </div>
              ) : locale === 'en' ? (
                <div
                  className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 ${
                    genericBranding ? 'bg-zinc-900/40' : 'bg-[#06C755]/5'
                  }`}
                >
                  <div
                    className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center ${
                      genericBranding
                        ? 'bg-gradient-to-br from-zinc-600 to-zinc-900 ring-1 ring-white/15 shadow-inner'
                        : 'bg-[#06C755]'
                    }`}
                  >
                    {genericBranding ? (
                      <span className="text-[13px] font-black text-white tracking-tight">{t('messaging.idle_icon_mark')}</span>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                        <path d="M33 18.2C33 12.5 27.2 7.8 20 7.8C12.8 7.8 7 12.5 7 18.2C7 23.3 11.5 27.6 17.6 28.5C18 28.6 18.6 28.7 18.7 29C18.8 29.3 18.8 29.7 18.7 30L18.4 31.4C18.3 31.8 18.1 32.6 19.1 32.2C20.1 31.8 26.8 27.6 29.6 24.3C31.7 22 33 20.2 33 18.2Z" fill="white"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-500 text-[12px] font-medium">{t('kakao.name')}</p>
                  <p className="text-gray-600 text-[10px] text-center px-8">{t('kakao.channel_move')}</p>
                </div>
              ) : (
                <div
                  className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 ${
                    genericBranding ? 'bg-zinc-900/40' : 'bg-[#FEE500]/5'
                  }`}
                >
                  <div
                    className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center ${
                      genericBranding
                        ? 'bg-gradient-to-br from-zinc-600 to-zinc-900 ring-1 ring-white/15 shadow-inner'
                        : 'bg-[#FEE500]'
                    }`}
                  >
                    {genericBranding ? (
                      <span className="text-[13px] font-black text-white tracking-tight">{t('messaging.idle_icon_mark')}</span>
                    ) : (
                      <MessageCircle size={28} className="text-[#3C1E1E]" fill="#3C1E1E" />
                    )}
                  </div>
                  <p className="text-gray-500 text-[12px] font-medium">{t('kakao.name')}</p>
                  <p className="text-gray-600 text-[10px] text-center px-8">{t('kakao.channel_move')}</p>
                </div>
              )}
            </div>
          </>
        )}
        </div>

      </main>

      <footer className="py-6" />
    </div>
  );
}
