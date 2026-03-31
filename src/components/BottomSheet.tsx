import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function BottomSheet({ isOpen, onClose, children, title }: BottomSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 z-40"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="absolute bottom-0 left-0 right-0 bg-[#141414] rounded-t-[14px] z-50 max-h-[82%] overflow-hidden flex flex-col"
          >
            <div className="w-9 h-[5px] bg-white/20 rounded-full mx-auto mt-[6px] mb-[2px]" />

            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
              <h3 className="text-white font-semibold text-[15px] flex-1 text-center">{title || '광고 정보'}</h3>
              <button onClick={onClose} className="absolute right-4 p-1 text-white/50 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
