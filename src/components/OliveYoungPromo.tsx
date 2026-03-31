import { useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import medihealHero from '../assets/mediheal-hero.png';

interface OliveYoungPromoProps {
  onProductClick: (productId: number) => void;
  onPromoClick: () => void;
  variant?: 'promo' | 'static';
  showSkip?: boolean;
  showDetail?: boolean;
}

export const PROMO_ITEMS = [
  { id: 11, name: '모로칸 오일 트리트먼트', img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200&h=200&fit=crop&crop=center' },
  { id: 12, name: '라보떼 헤어 에센스', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=200&h=200&fit=crop&crop=center' },
  { id: 13, name: '닥터바디 바디워시', img: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=200&h=200&fit=crop&crop=center' },
  { id: 14, name: '아모스 헤어 세럼', img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=200&h=200&fit=crop&crop=center' },
  { id: 15, name: '려 자양윤모 샴푸', img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200&h=200&fit=crop&crop=center' },
  { id: 16, name: '일리윤 바디로션', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop&crop=center' },
];

export const STATIC_ITEMS = [
  { id: 1, name: '마데카소사이드 세럼', price: '19,800원', discount: '29%', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop&crop=center' },
  { id: 2, name: 'N.M.F 수분 패드', price: '14,500원', discount: '28%', img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=200&h=200&fit=crop&crop=center' },
  { id: 3, name: '티트리 진정 크림', price: '12,900원', discount: '28%', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop&crop=center' },
  { id: 4, name: '콜라겐 마스크팩', price: '15,900원', discount: '28%', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&crop=center' },
  { id: 5, name: '흔적 리페어 앰플', price: '22,500원', discount: '30%', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop&crop=center' },
  { id: 6, name: '마데카 선크림', price: '16,900원', discount: '30%', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop&crop=center' },
];

const HERO_CONFIG = {
  promo: {
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=750&h=422&fit=crop&crop=center',
    alt: '올리브영 기획전',
  },
  static: {
    img: medihealHero,
    alt: '메디힐 in 올리브영',
  },
};

export default function OliveYoungPromo({ onProductClick, onPromoClick, variant = 'promo', showSkip = true, showDetail = false }: OliveYoungPromoProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPromo = variant === 'promo';
  const hero = HERO_CONFIG[variant];
  const items = isPromo ? PROMO_ITEMS : STATIC_ITEMS;

  return (
    <div className="relative w-full shrink-0">
      <button onClick={onPromoClick} className="relative w-full aspect-video overflow-hidden active:opacity-95 transition-opacity block">
        <img
          src={hero.img}
          alt={hero.alt}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="absolute top-[8px] left-[10px] bg-black/50 text-white text-[9px] font-bold px-[6px] py-[2px] rounded z-10 backdrop-blur-sm">AD</div>

        {showSkip && (
          <div className="absolute top-[8px] right-[10px] bg-black/50 text-white text-[11px] font-medium px-3 py-[3px] rounded-full z-10 backdrop-blur-sm">
            <span className="font-bold">4</span>초 후 건너뛰기
          </div>
        )}

        {isPromo ? (
          <div className="absolute top-[34px] left-0 right-0 px-5">
            <div className="flex items-center gap-[6px] mb-2">
              <div className="w-5 h-5 rounded-full bg-[#9bce26] flex items-center justify-center">
                <ShoppingBag size={10} className="text-white" />
              </div>
              <span className="text-white text-[11px] font-bold">올리브영</span>
            </div>
            <p className="text-white font-black text-[20px] leading-[1.15] tracking-tight">
              뷰티 꿀 세일 최대 <span className="text-[#9bce26]">50%</span>
            </p>
          </div>
        ) : (
          <div className={`absolute top-0 left-0 right-0 flex items-center justify-center ${showDetail ? 'bottom-[130px]' : 'bottom-[90px]'}`}>
            <span className="text-white text-[22px] font-black tracking-tight">메디힐</span>
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
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-white/70 text-[9px] font-medium mt-[4px] leading-tight line-clamp-1 text-center">{item.name}</p>
              {showDetail && !isPromo && 'price' in item && (
                <div className="flex items-center justify-center gap-[3px] mt-[2px]">
                  <span className="text-[#FF6B35] text-[8px] font-bold">{(item as { discount: string }).discount}</span>
                  <span className="text-white/90 text-[8px] font-bold">{(item as { price: string }).price}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
