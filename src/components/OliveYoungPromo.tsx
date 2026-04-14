import { useMemo, useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useLocale } from '../LocaleContext';
import medihealHero from '../assets/mediheal-hero.png';
import { GENERIC_HERO_IMAGE, resolvePromoListItems } from '../branding';

interface OliveYoungPromoProps {
  onProductClick: (productId: number) => void;
  onPromoClick: () => void;
  variant?: 'promo' | 'static';
  showSkip?: boolean;
  showDetail?: boolean;
}

export const PROMO_ITEMS = [
  { id: 11, name: { ko: '모로칸 오일 트리트먼트', en: 'Moroccan Oil Treatment' }, img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200&h=200&fit=crop&crop=center' },
  { id: 12, name: { ko: '라보떼 헤어 에센스', en: 'La Beaute Hair Essence' }, img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=200&h=200&fit=crop&crop=center' },
  { id: 13, name: { ko: '닥터바디 바디워시', en: 'Dr.Body Body Wash' }, img: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=200&h=200&fit=crop&crop=center' },
  { id: 14, name: { ko: '아모스 헤어 세럼', en: 'Amos Hair Serum' }, img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=200&h=200&fit=crop&crop=center' },
  { id: 15, name: { ko: '려 자양윤모 샴푸', en: 'Ryo Jayang Shampoo' }, img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200&h=200&fit=crop&crop=center' },
  { id: 16, name: { ko: '일리윤 바디로션', en: 'Illiyoon Body Lotion' }, img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop&crop=center' },
];

export const STATIC_ITEMS = [
  { id: 1, name: { ko: '마데카소사이드 세럼', en: 'Madecassoside Serum' }, price: { ko: '19,800원', en: '₩19,800' }, discount: '29%', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop&crop=center' },
  { id: 2, name: { ko: 'N.M.F 수분 패드', en: 'N.M.F Moisture Pad' }, price: { ko: '14,500원', en: '₩14,500' }, discount: '28%', img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=200&h=200&fit=crop&crop=center' },
  { id: 3, name: { ko: '티트리 진정 크림', en: 'Tea Tree Calming Cream' }, price: { ko: '12,900원', en: '₩12,900' }, discount: '28%', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop&crop=center' },
  { id: 4, name: { ko: '콜라겐 마스크팩', en: 'Collagen Mask Pack' }, price: { ko: '15,900원', en: '₩15,900' }, discount: '28%', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&crop=center' },
  { id: 5, name: { ko: '흔적 리페어 앰플', en: 'Scar Repair Ampoule' }, price: { ko: '22,500원', en: '₩22,500' }, discount: '30%', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop&crop=center' },
  { id: 6, name: { ko: '마데카 선크림', en: 'Madeca Sunscreen' }, price: { ko: '16,900원', en: '₩16,900' }, discount: '30%', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop&crop=center' },
];

export default function OliveYoungPromo({ onProductClick, onPromoClick, variant = 'promo', showSkip = true, showDetail = false }: OliveYoungPromoProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { locale, t, genericBranding } = useLocale();
  const isPromo = variant === 'promo';
  const hero = useMemo(() => {
    if (genericBranding) {
      return { img: GENERIC_HERO_IMAGE };
    }
    return variant === 'promo'
      ? { img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=750&h=422&fit=crop&crop=center' }
      : { img: medihealHero };
  }, [genericBranding, variant]);
  const items = useMemo(() => {
    const raw = isPromo ? PROMO_ITEMS : STATIC_ITEMS;
    return resolvePromoListItems(raw, genericBranding, locale, t);
  }, [isPromo, genericBranding, locale, t]);

  return (
    <div className="relative w-full shrink-0">
      <button onClick={onPromoClick} className="relative w-full aspect-video overflow-hidden active:opacity-95 transition-opacity block">
        <img
          src={hero.img}
          alt={isPromo ? (genericBranding ? t('generic.retailer_name') : t('product.olive_young')) : genericBranding ? t('generic.brand_name') : t('product.mediheal')}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="absolute top-[8px] left-[10px] bg-black/50 text-white text-[9px] font-bold px-[6px] py-[2px] rounded z-10 backdrop-blur-sm">AD</div>

        {showSkip && (
          <div className="absolute top-[8px] right-[10px] bg-black/50 text-white text-[11px] font-medium px-3 py-[3px] rounded-full z-10 backdrop-blur-sm">
            <span className="font-bold">4</span>{t('promo.skip_after')}
          </div>
        )}

        {isPromo ? (
          <div className="absolute top-[34px] left-0 right-0 px-5">
            <div className="flex items-center gap-[6px] mb-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${genericBranding ? 'bg-slate-600' : 'bg-[#9bce26]'}`}>
                <ShoppingBag size={10} className="text-white" />
              </div>
              <span className="text-white text-[11px] font-bold">{genericBranding ? t('generic.retailer_name') : t('product.olive_young')}</span>
            </div>
            <p className="text-white font-black text-[20px] leading-[1.15] tracking-tight">
              {genericBranding ? (
                <>{t('generic.promo_hero_line')} <span className="text-[#9bce26]">50%</span></>
              ) : (
                <>{t('product.beauty_sale')} <span className="text-[#9bce26]">50%</span></>
              )}
            </p>
          </div>
        ) : (
          <div className={`absolute top-0 left-0 right-0 flex items-center justify-center ${showDetail ? 'bottom-[130px]' : 'bottom-[90px]'}`}>
            <span className="text-white text-[22px] font-black tracking-tight">{genericBranding ? t('generic.brand_name') : t('product.mediheal')}</span>
          </div>
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0">
        <div ref={scrollRef} className={`flex overflow-x-auto scrollbar-hide px-4 pb-3 ${showDetail && !isPromo ? 'gap-[6px]' : 'gap-[8px]'}`}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={(e) => { e.stopPropagation(); onProductClick(item.id); }}
              className={`shrink-0 text-left active:scale-[0.95] transition-transform ${showDetail && !isPromo ? 'w-[90px]' : 'w-[72px]'}`}
            >
              <div className={`rounded-[10px] overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] ring-1 ring-white/10 ${showDetail && !isPromo ? 'w-[90px] h-[90px]' : 'w-[72px] h-[72px]'}`}>
                <img
                  src={item.img}
                  alt={item.name[locale]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-white/70 text-[9px] font-medium mt-[4px] leading-tight line-clamp-1 text-center">{item.name[locale]}</p>
              {showDetail && !isPromo && 'price' in item && (
                <div className="flex items-center justify-center gap-[3px] mt-[2px]">
                  <span className="text-[#FF6B35] text-[8px] font-bold">{(item as typeof STATIC_ITEMS[0]).discount}</span>
                  <span className="text-white/90 text-[8px] font-bold">{(item as typeof STATIC_ITEMS[0]).price[locale]}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
