import { useState } from 'react';
import { ChevronLeft, X, MoreVertical, Search, Menu } from 'lucide-react';
import { useLocale } from '../LocaleContext';

type KakaoStep = 'channel_home' | 'subscribe_popup' | 'chatroom';

export default function KakaoChannelFlow() {
  const [step, setStep] = useState<KakaoStep>('channel_home');
  const { locale, genericBranding, t } = useLocale();
  const marketingOptinLines = t('messaging.marketing_optin').split('\n');
  const isEn = locale === 'en';

  const StatusBar = () => (
    <div className="flex items-end pb-[6px] px-7 justify-between h-[48px]">
      <span className="text-black font-semibold text-[15px] tabular-nums w-10">12:56</span>
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
          <div className="relative w-[22px] h-[11px] border border-black/60 rounded-[2.5px] overflow-hidden">
            <div className="absolute inset-[1px] rounded-[1.5px] bg-[#34C759]" style={{ width: '82%' }} />
          </div>
          <div className="w-[1.5px] h-[4px] bg-black/50 rounded-r-[1px] ml-[1px]" />
        </div>
      </div>
    </div>
  );

  const brandName = genericBranding ? t('generic.financial_short') : isEn ? 'Samsung Life' : '삼성생명';

  const ChannelHome = () => (
    <div className="flex flex-col h-full bg-[#111]">
      <div className="bg-white">
        <StatusBar />
        <div className="flex items-center justify-between px-4 py-2">
          <ChevronLeft size={24} className="text-black" />
          <div className="flex items-center gap-4">
            <MoreVertical size={20} className="text-black" />
            <X size={20} className="text-black" />
          </div>
        </div>

        <div className="px-4 pt-2 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-[52px] h-[52px] bg-[#0050a0] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-bold leading-tight text-center">{brandName}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="text-black font-bold text-[16px]">{brandName}</span>
                <div className="w-[16px] h-[16px] bg-[#3DB5F5] rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">✓</span>
                </div>
              </div>
              <p className="text-gray-500 text-[12px]">{isEn ? 'Friends 1,451,268' : '친구 1,451,268'}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <div className="w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center bg-[#FEE500]">
                <span className="text-[9px] font-bold text-black">Ch+</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-[13px] mt-3">{genericBranding ? t('generic.financial_tagline') : isEn ? 'Your lifetime financial partner' : '고객과 함께하는 인생금융파트너'}</p>
          <div className="flex gap-2 mt-3">
            <button className="px-3 py-[6px] border border-gray-300 rounded-full text-[12px] text-black flex items-center gap-1">
              📋 {isEn ? 'News' : '소식'}
            </button>
            <button className="px-3 py-[6px] border border-gray-300 rounded-full text-[12px] text-black flex items-center gap-1">
              📞 {isEn ? 'Call' : '전화하기'}
            </button>
          </div>
        </div>

        <button
          onClick={() => setStep('subscribe_popup')}
          className="mx-4 mb-4 w-[calc(100%-32px)] bg-[#FEE500] text-black font-bold text-[14px] py-3 rounded-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <span className="bg-black text-[#FEE500] text-[8px] font-bold px-1.5 py-0.5 rounded">Ch+</span>
          {isEn ? 'Add channel for benefits' : '채널 친구 추가하고 혜택 알림 받기'}
        </button>
      </div>

      <div className="flex-1 bg-[#111] overflow-y-auto">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <h3 className="text-white font-bold text-[16px]">{isEn ? 'News' : '소식'}</h3>
          <span className="text-gray-500 text-[12px]">∧</span>
        </div>

        <div className="px-4 grid grid-cols-2 gap-3 pb-6">
          {(genericBranding
            ? [
                { title: t('generic.kakao.news_a'), sub: '' },
                { title: t('generic.kakao.news_b'), sub: '' },
                { title: t('generic.kakao.news_a'), sub: '' },
                { title: t('generic.kakao.news_b'), sub: '' },
              ]
            : isEn
              ? [
                  { title: 'Is your tax refund enough this year?', sub: 'Again and again,' },
                  { title: 'Apply for Samsung Life Customer Panel 2025!', sub: '' },
                  { title: 'Apply for Samsung Life Customer Panel 2024!', sub: '' },
                  { title: 'Recruiting Samsung Life Customer Panel 2023!', sub: 'News you must check!' },
                ]
              : [
                  { title: '올해 연말정산 환급, 충분하신가요?', sub: '하고 하고 또 해도,' },
                  { title: '2025년 삼성생명 고객패널에 지원해 보세요!', sub: '' },
                  { title: '2024년 삼성생명 고객패널에 지원해 보세요!', sub: '' },
                  { title: '2023 삼성생명 고객패널을 모집합니다!', sub: '이 시기에 꼭 챙겨야 할 뉴스!' },
                ]
          ).map((item, i) => (
            <div key={i} className="bg-[#1c1c1c] rounded-lg overflow-hidden">
              <div className="w-full aspect-square bg-gradient-to-br from-[#f5e6d0] to-[#e8d5b8] flex items-center justify-center p-3">
                <span className="text-[10px] text-[#6b5a3e] font-medium text-center leading-tight">{i % 2 === 1 ? (isEn ? '2,000 spots!' : '총 2천명 모집!') : '📊'}</span>
              </div>
              <div className="p-2">
                <p className="text-white text-[11px] font-medium leading-snug line-clamp-2">{item.title}</p>
                {item.sub && <p className="text-gray-500 text-[10px] mt-1 truncate">{item.sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SubscribePopup = () => (
    <div className="flex flex-col h-full bg-[#111] relative">
      <div className="bg-white opacity-60 pointer-events-none absolute inset-0 z-0">
        <ChannelHome />
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl z-20 p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-[36px] h-[36px] bg-[#0050a0] rounded-full flex items-center justify-center shrink-0">
            <span className="text-white text-[7px] font-bold leading-tight text-center">{brandName}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-black font-bold text-[15px]">{brandName}</span>
            <div className="w-[14px] h-[14px] bg-[#3DB5F5] rounded-full flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">✓</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-[13px] leading-relaxed mb-5">
          {marketingOptinLines[0]}
          <br />
          {marketingOptinLines[1] ?? ''}
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setStep('channel_home')}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-black font-bold text-[14px] active:bg-gray-100 transition-colors"
          >
            {isEn ? 'Cancel' : '취소'}
          </button>
          <button
            onClick={() => setStep('chatroom')}
            className="flex-1 py-3 bg-[#FEE500] rounded-lg text-black font-bold text-[14px] flex items-center justify-center gap-1.5 active:bg-[#e6cf00] transition-colors"
          >
            <span className="bg-black text-[#FEE500] text-[7px] font-bold px-1 py-0.5 rounded">Ch+</span>
            {isEn ? 'Add Channel' : '채널 추가'}
          </button>
        </div>
      </div>
    </div>
  );

  const Chatroom = () => (
    <div className="flex flex-col h-full bg-[#9bbbd4]">
      <div className="bg-[#9bbbd4]">
        <StatusBar />
        <div className="flex items-center justify-between px-4 py-2">
          <ChevronLeft size={24} className="text-black" />
          <div className="text-center">
            <p className="text-black font-bold text-[14px]">{brandName} ✦</p>
            <p className="text-black/50 text-[10px]">1588-3114</p>
          </div>
          <div className="flex items-center gap-3">
            <Search size={18} className="text-black" />
            <Menu size={18} className="text-black" />
          </div>
        </div>
        <div className="flex justify-center py-1">
          <span className="bg-black/10 text-black/60 text-[10px] px-3 py-1 rounded-full">
            {isEn ? '✅ Verified business channel' : '✅ 사업자/기관 정보가 확인된 채널'}
          </span>
        </div>
        <div className="flex justify-center py-2">
          <span className="bg-white/60 text-black/70 text-[11px] px-3 py-1 rounded-full">
            {isEn ? 'Tuesday, March 31, 2026 >' : '2026년 3월 31일 화요일 >'}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="flex gap-2 mt-2">
          <div className="w-[32px] h-[32px] bg-[#0050a0] rounded-full flex items-center justify-center shrink-0 mt-1">
            <span className="text-white text-[6px] font-bold leading-tight text-center">{brandName}</span>
          </div>
          <div>
            <span className="text-black/70 text-[11px] font-medium">{brandName}</span>
            <div className="bg-white rounded-xl rounded-tl-sm p-3 mt-1 max-w-[240px]">
              {genericBranding ? (
                <p className="text-black text-[12px] leading-relaxed">{t('generic.kakao.chat_line1')}</p>
              ) : isEn ? (
                <>
                  <p className="text-black text-[12px] leading-relaxed">
                    Thank you for adding the '{brandName}' channel.
                    You can now receive various news and benefits via messages.
                  </p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">
                    Welcome to {brandName}! We're delighted to have you as a friend.
                  </p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">
                    We'll always communicate with you through various information and events.
                  </p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">
                    Enjoy your time with Korea's #1 insurance company, {brandName}! ^_^
                  </p>
                  <p className="text-black/60 text-[10px] leading-relaxed mt-3 border-t border-black/10 pt-2">
                    ※ If you register during evening hours (20:00~08:00), event messages will be sent after 08:00 the next day.
                  </p>
                  <p className="text-black/60 text-[10px] leading-relaxed mt-1">
                    Channel added: March 31, 2026 00:56
                  </p>
                </>
              ) : (
                <>
                  <p className="text-black text-[12px] leading-relaxed">
                    '삼성생명' 채널을 추가해 주셔서 감사합니다.
                    앞으로 다양한 소식과 혜택/정보를 메시지로 받으실 수 있습니다.
                  </p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">
                    감사합니다!<br />
                    고객에게 사랑을 전달하는 "사람, 사랑" 삼성생명과 친구가 되신 것을 환영합니다!!
                  </p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">
                    저희 삼성생명은 다양한 정보와 이벤트로 항상 플친 여러분과 함께 소통하겠습니다
                  </p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">
                    '대한민국 1등 보험회사' 삼성생명과 함께 즐거운 시간되세요^_^
                  </p>
                  <p className="text-black/60 text-[10px] leading-relaxed mt-3 border-t border-black/10 pt-2">
                    ※저녁시간(20:00~08:00)에 삼성생명 플러스친구 등록 시 본 메시지 이외의 이벤트 메시지는 익일 08:00시 이후 자동 발송팀을 알려드립니다.
                  </p>
                  <p className="text-black/60 text-[10px] leading-relaxed mt-1">
                    채널 추가 일시: 2026년 03월 31일 00:56
                  </p>
                </>
              )}
              <div className="mt-2 flex justify-center">
                <div className="text-[24px]">🐻🐰🦁🐶</div>
              </div>
            </div>
            <span className="text-black/40 text-[10px] ml-1">{isEn ? 'AM 12:56' : '오전 12:56'}</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 px-4 py-3 space-y-2">
        <button className="w-full text-left text-[13px] text-black py-2 px-1 flex items-center gap-2 active:bg-gray-50 rounded">
          🍀 {genericBranding ? t('generic.kakao.cta_app') : isEn ? 'Meet Samsung Monimo App' : '삼성금융통합앱 모니모 만나기'}
        </button>
        <div className="border-t border-gray-100" />
        <button className="w-full text-left text-[13px] text-black py-2 px-1 flex items-center gap-2 active:bg-gray-50 rounded">
          {genericBranding ? t('generic.kakao.cta_site') : isEn ? 'Go to Samsung Life website' : '삼성생명 홈페이지 바로가기'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full">
      {step === 'channel_home' && <ChannelHome />}
      {step === 'subscribe_popup' && <SubscribePopup />}
      {step === 'chatroom' && <Chatroom />}
    </div>
  );
}
