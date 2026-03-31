import { useState, useEffect } from 'react';
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
import OliveYoungPromo, { PROMO_ITEMS } from './components/OliveYoungPromo';
import medihealHero from './assets/mediheal-hero.png';

function OliveYoungPromoBrowser() {
  const products = [
    { name: '모로칸오일 트리트먼트 100ml', price: '39,000원', original: '49,000원', discount: '20%', img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200&h=200&fit=crop' },
    { name: '라보떼 헤어 에센스 오일', price: '18,500원', original: '25,000원', discount: '26%', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=200&h=200&fit=crop' },
    { name: '닥터바디 퍼퓸 바디워시', price: '12,900원', original: '18,000원', discount: '28%', img: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=200&h=200&fit=crop' },
    { name: '아모스 녹차 헤어 세럼', price: '15,900원', original: '22,000원', discount: '28%', img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=200&h=200&fit=crop' },
    { name: '려 자양윤모 샴푸 500ml', price: '11,900원', original: '16,000원', discount: '26%', img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200&h=200&fit=crop' },
    { name: '일리윤 세라마이드 바디로션', price: '13,500원', original: '19,000원', discount: '29%', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop' },
  ];

  return (
    <div className="bg-white min-h-full">
      <img
        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=750&h=400&fit=crop"
        alt="올리브영 기획전"
        className="w-full aspect-[16/9] object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-[#9bce26] flex items-center justify-center">
            <span className="text-white text-[10px] font-black">OY</span>
          </div>
          <span className="text-black font-bold text-[14px]">올리브영</span>
        </div>
        <h2 className="text-black font-extrabold text-[20px] leading-tight mt-2">뷰티 꿀 세일</h2>
        <p className="text-gray-500 text-[13px] mt-1">최대 50% 할인 · 올리브영 단독 기획전</p>
        <p className="text-gray-400 text-[11px] mt-1">2026.03.20 ~ 2026.04.10</p>
      </div>
      <div className="h-[1px] bg-gray-100 mx-4" />
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-black font-bold text-[16px]">기획전 상품</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 pb-8">
        {products.map((p, i) => (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="aspect-square bg-gray-50">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-3">
              <p className="text-gray-800 text-[12px] font-medium leading-tight line-clamp-2">{p.name}</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[#FF6B35] text-[13px] font-extrabold">{p.discount}</span>
                <span className="text-black text-[13px] font-bold">{p.price}</span>
              </div>
              <p className="text-gray-400 text-[11px] line-through">{p.original}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PRODUCT_DETAILS: Record<number, { brand: string; name: string; price: string; original: string; discount: string; desc: string; img: string }> = {
  1: { brand: '메디힐', name: '마데카소사이드 흔적 리페어 세럼 50ml', price: '19,800원', original: '28,000원', discount: '29%', desc: '마데카소사이드 성분이 피부 흔적을 집중 케어하는 더마 세럼. 올리브영 어워즈 수상.', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop' },
  2: { brand: '메디힐', name: 'N.M.F 아쿠아링 수분 패드 60매', price: '14,500원', original: '20,000원', discount: '28%', desc: 'N.M.F 보습 인자가 피부에 즉각적인 수분감을 부여하는 데일리 패드.', img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop' },
  3: { brand: '메디힐', name: '티트리 카밍 에센스 패드 50매', price: '12,900원', original: '18,000원', discount: '28%', desc: '티트리 추출물이 자극받은 피부를 빠르게 진정시키는 패드.', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop' },
  4: { brand: '메디힐', name: '콜라겐 에센셜 리프팅 마스크팩 10매', price: '15,900원', original: '22,000원', discount: '28%', desc: '콜라겐이 피부 탄력과 보습에 도움을 주는 시트 마스크팩.', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop' },
  5: { brand: '메디힐', name: '마데카 흔적 리페어 앰플 30ml', price: '22,500원', original: '32,000원', discount: '30%', desc: '고농축 마데카소사이드가 피부 재생과 흔적 개선을 돕는 앰플.', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop' },
  6: { brand: '메디힐', name: '마데카소사이드 선 세럼 SPF50+', price: '16,900원', original: '24,000원', discount: '30%', desc: '마데카소사이드 성분의 자외선 차단 세럼. 피부 보호와 진정을 동시에.', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop' },
  11: { brand: '모로칸오일', name: '오일 트리트먼트 100ml', price: '39,000원', original: '49,000원', discount: '20%', desc: '아르간 오일 기반 헤어 트리트먼트. 모든 모발 타입에 윤기와 부드러움을.', img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop' },
  12: { brand: '라보떼', name: '헤어 에센스 오일 150ml', price: '18,500원', original: '25,000원', discount: '26%', desc: '가볍게 흡수되는 헤어 에센스로 손상된 모발을 집중 케어.', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&h=400&fit=crop' },
  13: { brand: '닥터바디', name: '퍼퓸 바디워시 500ml', price: '12,900원', original: '18,000원', discount: '28%', desc: '은은한 향이 오래 지속되는 퍼퓸 바디워시.', img: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=400&h=400&fit=crop' },
  14: { brand: '아모스', name: '녹차 실크 헤어 세럼 80ml', price: '15,900원', original: '22,000원', discount: '28%', desc: '녹차 추출물이 모발에 실크같은 광택과 영양을 부여.', img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=400&h=400&fit=crop' },
  15: { brand: '려', name: '자양윤모 샴푸 500ml', price: '11,900원', original: '16,000원', discount: '26%', desc: '인삼 성분이 두피와 모발에 영양을 공급하는 한방 샴푸.', img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop' },
  16: { brand: '일리윤', name: '세라마이드 아토 바디로션 350ml', price: '13,500원', original: '19,000원', discount: '29%', desc: '세라마이드가 피부 장벽을 강화하고 깊은 보습을 제공.', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop' },
};

function OliveYoungProductPage({ productId }: { productId: number }) {
  const product = PRODUCT_DETAILS[productId];
  if (!product) return null;

  return (
    <div className="bg-white min-h-full">
      <div className="aspect-square bg-gray-50">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="px-4 py-4">
        <p className="text-gray-500 text-[12px] font-medium">{product.brand}</p>
        <h2 className="text-black font-bold text-[18px] leading-tight mt-1">{product.name}</h2>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[#FF6B35] text-[20px] font-extrabold">{product.discount}</span>
          <span className="text-black text-[20px] font-bold">{product.price}</span>
        </div>
        <p className="text-gray-400 text-[13px] line-through">{product.original}</p>
        <p className="text-gray-600 text-[13px] leading-relaxed mt-4">{product.desc}</p>
      </div>
      <div className="h-[1px] bg-gray-100 mx-4" />
      <div className="px-4 py-4 flex gap-3">
        <button className="flex-1 bg-gray-100 text-gray-700 font-bold text-[14px] py-3 rounded-xl">장바구니</button>
        <button className="flex-1 bg-[#9bce26] text-white font-bold text-[14px] py-3 rounded-xl">바로 구매</button>
      </div>
    </div>
  );
}

export default function App() {
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

  const adContent = isMessaging
    ? {
        videoImg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=750&h=422&fit=crop&crop=center',
        videoAlt: '보험 상담 광고',
        advertiser: '보험 · 삼성생명 · 자세히 알아보기',
        bannerImg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=200&fit=crop&crop=center',
        bannerAlt: '보험 상담 배너',
        bannerTag: 'Insurance Consulting',
        bannerTitle: '삼성생명 무료 보험 상담',
        bannerSub: '지금 상담 신청하면 기프티콘 증정',
        outstreamAlt: '보험 상담 광고',
      }
    : {
        videoImg: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=750&h=422&fit=crop&crop=center',
        videoAlt: 'EV6 자동차 광고',
        advertiser: '자동차 · KIA EV6 · 자세히 알아보기',
        bannerImg: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=700&h=200&fit=crop&crop=center',
        bannerAlt: 'EV6 시승 배너',
        bannerTag: 'Test Drive Event',
        bannerTitle: 'KIA EV6 무료 시승 신청',
        bannerSub: '지금 신청하면 스타벅스 쿠폰 증정',
        outstreamAlt: 'EV6 자동차 광고',
      };

  const ActionButtons = () => (
    <div className="flex gap-2 w-full">
      {isMessaging ? (
        <button 
          onClick={() => alert('카카오톡 채널로 연결됩니다.')}
          className="bg-[#FEE500] text-[#3C1E1E] px-4 py-2.5 rounded-full font-bold text-[11px] flex items-center justify-center gap-2 flex-1 active:scale-95 transition-transform"
        >
          <MessageCircle size={15} fill="#3C1E1E" />
          상담 시작하기
        </button>
      ) : (
        <>
          <button 
            onClick={() => handleTriggerAd('inapp')}
            className="bg-red-600 text-white px-3 py-2.5 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 flex-1 active:scale-95 transition-transform"
          >
            <Smartphone size={13} />
            인앱 브라우저
          </button>
          <button 
            onClick={() => handleTriggerAd('bottomsheet')}
            className="bg-white text-black px-3 py-2.5 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 flex-1 active:scale-95 transition-transform"
          >
            <ChevronDown size={13} />
            바텀 시트
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
          <div className="flex items-center justify-start">
            <div className="flex bg-[#1a1a1a] p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setCategory('leadgen')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${category === 'leadgen' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                리드젠 광고
              </button>
              <button
                onClick={() => setCategory('product')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${category === 'product' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                프러덕트 카탈로그
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
                      <Smartphone size={10} /> 인앱
                    </button>
                    <button onClick={() => setViewMode('bottomsheet')} className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all flex items-center gap-1.5 ${viewMode === 'bottomsheet' ? 'bg-white/10 text-white border-white/20' : 'text-gray-500 border-white/10'}`}>
                      <ChevronDown size={10} /> 바텀시트
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
                {['홈', '드라마', '예능', '영화', '스포츠', '애니', '뉴스'].map((tab, i) => (
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
                {[
                  { rank: 1, title: 'YTN', sub: '뉴스퀘어 2PM', pct: '30.6%', color: '#0072bc', logo: 'YTN', img: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300&h=170&fit=crop' },
                  { rank: 2, title: 'MBC 무한도전', sub: '[335회] 무한도전 우리!...', pct: '10.4%', color: '#c8102e', logo: 'MBC', img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&h=170&fit=crop' },
                  { rank: 3, title: '연합뉴스', sub: '뉴스 현장', pct: '8.3%', color: '#e85d00', logo: '연합', img: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=300&h=170&fit=crop' },
                ].map((item) => (
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
                    광고 정보 더보기
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
                <h3 className="text-white text-[16px] font-bold">인기 정주행 채널</h3>
                <button className="text-gray-500 text-[12px]">더보기</button>
              </div>

              <div className="pl-4 pb-4 flex gap-[10px] overflow-x-auto scrollbar-hide">
                {[
                  { title: '삼시세끼 어촌편5', ep: '7화', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=280&h=380&fit=crop' },
                  { title: '슬기로운 의사생활 시즌2', ep: '8화', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=280&h=380&fit=crop' },
                  { title: '삼시세끼 고창편', ep: '8화', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=280&h=380&fit=crop' },
                ].map((item, i) => (
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
                  { icon: <Home size={20} />, label: '홈', active: true },
                  { icon: <><span className="text-[11px] font-black leading-none">ID</span><span className="text-[8px] text-yellow-400 font-bold leading-none -ml-0.5">$</span></>, label: '쇼츠', active: false },
                  { icon: <><Wifi size={17} /><span className="absolute -top-[1px] -right-[6px] bg-red-600 text-white text-[7px] font-bold w-[13px] h-[13px] rounded-full flex items-center justify-center">N</span></>, label: '라이브', active: false },
                  { icon: <Search size={20} />, label: '검색', active: false },
                  { icon: <FolderOpen size={20} />, label: '기록', active: false },
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
                    광고 정보 더보기
                    <ExternalLink size={11} strokeWidth={2.5} />
                  </button>

                  <div className="absolute bottom-[28px] right-0 bg-black/70 pl-3 pr-3 py-[3px] text-white text-[11px] font-medium rounded-l-full">
                    <span className="font-bold">4</span>초 후 건너뛰기
                  </div>

                  <div className="absolute bottom-[8px] right-[10px] text-[11px] font-bold text-white flex items-center gap-[3px]">
                    광고 <span className="text-[#FFD700]">· 18</span>
                  </div>

                  <div className="absolute bottom-[8px] left-[10px] text-[8px] text-white/30 truncate max-w-[50%]">
                    {adContent.advertiser}
                  </div>
                </div>
              )}

              {/* ── Title ── */}
              <div className="px-4 pt-4 pb-1">
                <h2 className="text-white text-[18px] font-bold leading-snug">뉴스퀘어 2PM</h2>
                <p className="text-gray-500 text-[13px] mt-[2px]">13:50 ~ 15:50</p>
              </div>

              {/* ── 3 Buttons ── */}
              <div className="px-4 py-3 flex gap-2">
                {[
                  { icon: <MessageCircle size={15} />, label: '티빙톡' },
                  { icon: <LayoutList size={15} />, label: '다음 방송' },
                  { icon: <Share2 size={15} />, label: '공유' },
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
                    <span className="text-white font-extrabold text-[11px]">YTN</span>
                  </div>
                  <span className="text-white font-bold text-[16px]">YTN</span>
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
                        src={isStaticList
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
                        <p className="text-white text-[13px] font-bold leading-tight">{isStaticList ? '메디힐 in 올리브영' : '뷰티 꿀 세일 최대 50%'}</p>
                        <p className="text-white/40 text-[10px]">{isStaticList ? '더마 스킨케어 베스트' : '올리브영 단독 기획전'}</p>
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
                        return (
                          <button
                            key={id}
                            onClick={() => { setSelectedProductId(isStaticList ? id : null); setIsInAppBrowserOpen(true); }}
                            className="shrink-0 w-[72px] text-left active:scale-[0.95] transition-transform"
                          >
                            <div className="w-[72px] h-[72px] rounded-[8px] overflow-hidden bg-white/10 ring-1 ring-white/10">
                              <img src={p.img} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <p className="text-white/60 text-[9px] font-medium mt-[3px] leading-tight line-clamp-1 text-center">{p.name.split(' ').slice(0, 2).join(' ')}</p>
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
                <button className="pb-[10px] text-white font-bold text-[14px] border-b-2 border-white">전체 채널</button>
                <button className="pb-[10px] text-gray-500 font-medium text-[14px]">추천 콘텐츠</button>
              </div>


              {/* ── Channel List ── */}
              <div className="px-4 pt-3 space-y-[14px] pb-36">
                {[
                  { title: '뉴스퀘어 2PM', time: '13:50 ~ 15:50', logo: 'YTN', color: '#0072bc' },
                  { title: '[335회] 무한도전 우리! 어디 가? 두 번째 이야기', time: '14:18 ~ 15:37', logo: 'MBC', color: '#c8102e' },
                  { title: '뉴스 현장', time: '13:40 ~ 15:10', logo: '연합뉴스TV', color: '#e85d00' },
                  { title: '명탐정 코난 11기 (자막) 30화', time: '14:29 ~ 14:50', logo: 'ANIMAX', color: '#00b4d8' },
                ].map((item, i) => (
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
              ? selectedProductId
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
            title={isMessaging ? '보험 상담 신청' : '시승 신청'}
          >
            <NativeLeadGenForm onSubmit={() => setIsBottomSheetOpen(false)} variant={isMessaging ? 'insurance' : 'car'} />
          </BottomSheet>

          {/* Web Bridge Overlay */}
          {showBridge && (
            <div className="absolute inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-6 rounded-[2.2rem]">
              <div className="w-20 h-20 rounded-[22px] bg-[#FEE500] flex items-center justify-center shadow-lg">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M22 6C12.611 6 5 12.05 5 19.5C5 24.267 8.385 28.42 13.32 30.77L11.5 37.5C11.4 37.85 11.8 38.15 12.1 37.95L20.1 32.75C20.72 32.82 21.35 32.86 22 32.86C31.389 32.86 39 26.93 39 19.5C39 12.05 31.389 6 22 6Z" fill="#3C1E1E"/>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-black font-bold text-[15px]">카카오톡으로 이동중입니다...</p>
                <p className="text-gray-400 text-[12px]">잠시만 기다려주세요</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-[#FEE500] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-[#FEE500] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-[#FEE500] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        {/* Messaging: Arrow + KakaoTalk Phone */}
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

            <div className={`relative w-[360px] bg-black rounded-[2.8rem] border-[6px] border-[#2a2a2a] overflow-hidden transition-all duration-500 ${isKakaoActive ? 'shadow-[0_0_60px_rgba(254,229,0,0.15),0_0_120px_rgba(254,229,0,0.06)]' : 'shadow-[0_0_60px_rgba(0,0,0,0.6)] opacity-40'}`} style={{ aspectRatio: '9 / 19.5' }}>
              {/* Dynamic Island */}
              <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-center gap-[38px]">
                <div className="w-[7px] h-[7px] bg-[#1a1a2e] rounded-full" />
              </div>

              {isKakaoActive ? (
                <div className="absolute inset-0 z-10 overflow-hidden">
                  <div className="h-[11px] bg-black" />
                  <div className="h-[calc(100%-11px)]">
                    <KakaoChannelFlow key={kakaoKey} />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 z-10 bg-[#FEE500]/5 flex flex-col items-center justify-center gap-3">
                  <div className="w-[60px] h-[60px] bg-[#FEE500] rounded-2xl flex items-center justify-center">
                    <MessageCircle size={28} className="text-[#3C1E1E]" fill="#3C1E1E" />
                  </div>
                  <p className="text-gray-500 text-[12px] font-medium">카카오톡</p>
                  <p className="text-gray-600 text-[10px] text-center px-8">광고 클릭 시 카카오톡 채널로 이동합니다</p>
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
