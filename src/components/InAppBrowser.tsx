import { motion, AnimatePresence } from 'motion/react';
import { X, RotateCcw, MoreHorizontal } from 'lucide-react';
import { ReactNode } from 'react';

interface InAppBrowserProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  url?: string;
}

export default function InAppBrowser({ isOpen, onClose, children, url = 'https://tving.com/ads' }: InAppBrowserProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="absolute inset-0 bg-white z-50 flex flex-col"
        >
          {/* Status Bar */}
          <div className="bg-[#f8f8f8] flex items-end pb-[6px] px-7 justify-between h-[48px] shrink-0">
            <span className="text-black font-semibold text-[15px] tabular-nums w-10">2:48</span>
            <div className="w-[100px]" />
            <div className="flex items-center gap-[5px]">
              <div className="flex items-end gap-[1.5px] h-[11px]">
                <div className="w-[3px] h-[3px] bg-black rounded-[0.5px]" />
                <div className="w-[3px] h-[5px] bg-black rounded-[0.5px]" />
                <div className="w-[3px] h-[7px] bg-black rounded-[0.5px]" />
                <div className="w-[3px] h-[10px] bg-black rounded-[0.5px]" />
              </div>
              <span className="text-black font-semibold text-[12px] ml-[2px]">LTE</span>
              <div className="flex items-center ml-[3px]">
                <div className="relative w-[22px] h-[11px] border border-black/40 rounded-[2.5px] overflow-hidden">
                  <div className="absolute inset-[1px] rounded-[1.5px] bg-[#34C759]" style={{ width: 'calc(100% - 2px)' }} />
                </div>
                <div className="w-[1.5px] h-[4px] bg-black/30 rounded-r-[1px] ml-[1px]" />
              </div>
            </div>
          </div>

          {/* Browser Header */}
          <div className="bg-[#f8f8f8] border-b border-gray-200 px-4 py-2 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <button onClick={onClose} className="text-gray-600">
                <X size={24} />
              </button>
              <div className="flex-1 mx-4 bg-gray-200 rounded-lg px-3 py-1 flex items-center gap-2 overflow-hidden">
                <div className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
                <span className="text-xs text-gray-600 truncate">{url}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <RotateCcw size={20} />
                <MoreHorizontal size={20} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto bg-white">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
