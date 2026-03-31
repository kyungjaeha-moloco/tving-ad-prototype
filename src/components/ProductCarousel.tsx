import { motion } from 'motion/react';
import { MOCK_PRODUCTS, ProductItem } from '../types';
import { ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
  items?: ProductItem[];
  showPromo?: boolean;
}

export default function ProductCarousel({ items = MOCK_PRODUCTS, showPromo = false }: ProductCarouselProps) {
  return (
    <div className="flex flex-col gap-3 w-full bg-[#121212] p-4 rounded-xl border border-white/5">
      {showPromo && (
        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-1">
          <img 
            src="https://picsum.photos/seed/promo/800/400" 
            alt="Promotion" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1">Special Offer</span>
            <h4 className="text-white font-bold text-lg leading-tight">올리브영 단독 특가 세일</h4>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-1">
        <h5 className="text-white text-sm font-bold">추천 상품</h5>
        <button className="text-gray-400 text-[10px] flex items-center gap-0.5">
          더보기 <ChevronRight size={12} />
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-hide flex gap-3 pb-2">
        {items.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-32 bg-[#1e1e1e] rounded-lg overflow-hidden border border-white/5"
          >
            <div className="aspect-square w-full">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-2 flex flex-col gap-0.5">
              <p className="text-white text-[11px] font-medium truncate">{item.name}</p>
              <p className="text-red-500 text-[11px] font-bold">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
