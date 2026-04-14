import { useState } from 'react';
import { ChevronLeft, X, MoreVertical, Search, Menu, Phone } from 'lucide-react';
import { useLocale } from '../LocaleContext';

type LineStep = 'channel_home' | 'add_friend_popup' | 'chatroom';

export default function LineChannelFlow() {
  const [step, setStep] = useState<LineStep>('channel_home');
  const { genericBranding, t } = useLocale();
  const addFriendAdsLines = t('messaging.add_friend_ads').split('\n');

  const brandName = genericBranding ? t('generic.financial_full') : 'Samsung Life Insurance';
  const brandNameShort = genericBranding ? t('generic.financial_short') : 'Samsung Life';

  const StatusBar = () => (
    <div className="flex items-end pb-[6px] px-7 justify-between h-[48px]">
      <span className="text-black font-semibold text-[15px] tabular-nums w-10">4:11</span>
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

  const LineLogo = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#06C755" />
      <path d="M33 18.2C33 12.5 27.2 7.8 20 7.8C12.8 7.8 7 12.5 7 18.2C7 23.3 11.5 27.6 17.6 28.5C18 28.6 18.6 28.7 18.7 29C18.8 29.3 18.8 29.7 18.7 30L18.4 31.4C18.3 31.8 18.1 32.6 19.1 32.2C20.1 31.8 26.8 27.6 29.6 24.3C31.7 22 33 20.2 33 18.2Z" fill="white"/>
    </svg>
  );

  const ChannelHome = () => (
    <div className="flex flex-col h-full bg-white">
      <StatusBar />
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <ChevronLeft size={24} className="text-black" />
        <div className="flex items-center gap-4">
          <MoreVertical size={20} className="text-black" />
          <X size={20} className="text-black" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-4 pt-2 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-[52px] h-[52px] bg-[#0050a0] rounded-full flex items-center justify-center shrink-0 overflow-hidden">
            <span className="text-white text-[8px] font-bold leading-tight text-center px-1">{brandNameShort}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-black font-bold text-[16px]">{brandNameShort}</span>
              <div className="bg-[#06C755] rounded-full px-1.5 py-[1px]">
                <span className="text-white text-[7px] font-bold">Premium</span>
              </div>
            </div>
            <p className="text-gray-500 text-[12px]">Friends 554,501</p>
          </div>
        </div>

        <p className="text-gray-500 text-[12px] mt-2">
          {brandName}
          {t('messaging.official_badge')}
        </p>
        <p className="text-[#06C755] text-[12px]">{genericBranding ? t('generic.financial_url') : 'insurance.samsung.com'}</p>

        <button
          onClick={() => setStep('add_friend_popup')}
          className="mt-3 bg-[#06C755] text-white font-bold text-[13px] px-5 py-2 rounded-full flex items-center gap-1.5 active:scale-[0.98] transition-transform"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          Add Friend
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 flex">
        <button className="flex-1 pb-2 pt-1 text-[13px] font-bold text-black border-b-2 border-black text-center">Account Info</button>
        <button className="flex-1 pb-2 pt-1 text-[13px] text-gray-400 text-center">Basic Info</button>
      </div>

      {/* Account Info */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-6">
        <h4 className="text-black font-bold text-[14px] mb-3">Account Info</h4>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-gray-700 text-[12px] leading-relaxed">
            {genericBranding
              ? t('generic.line.welcome_blurb')
              : t('messaging.welcome_official_account').replace('{brand}', brandName)}
          </p>
        </div>

        <h4 className="text-black font-bold text-[14px] mt-6 mb-3">Basic Info</h4>
        <div className="flex items-center gap-3 py-2">
          <div className="w-5 h-5 flex items-center justify-center text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          </div>
          <span className="text-[#06C755] text-[12px]">{genericBranding ? `${t('generic.financial_url')} + 1 more` : 'insurance.samsung.com + 1 more'}</span>
        </div>
      </div>

      {/* Bottom Add Friend CTA */}
      <div className="border-t border-gray-100 px-4 py-3">
        <button
          onClick={() => setStep('add_friend_popup')}
          className="w-full bg-[#06C755] text-white font-bold text-[14px] py-3 rounded-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          Add Friend
        </button>
        <p className="text-gray-400 text-[10px] text-right mt-1">Country or region: Global</p>
      </div>
    </div>
  );

  const AddFriendPopup = () => (
    <div className="flex flex-col h-full relative">
      <div className="bg-white opacity-60 pointer-events-none absolute inset-0 z-0">
        <ChannelHome />
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl z-20 p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[40px] h-[40px] bg-[#0050a0] rounded-full flex items-center justify-center shrink-0">
            <span className="text-white text-[7px] font-bold leading-tight text-center">{brandNameShort}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black font-bold text-[15px]">{brandNameShort}</span>
            <div className="bg-[#06C755] rounded-full px-1.5 py-[1px]">
              <span className="text-white text-[7px] font-bold">P</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-[13px] leading-relaxed mb-5">
          {addFriendAdsLines[0]}
          <br />
          {addFriendAdsLines[1] ?? ''}
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setStep('channel_home')}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-black font-bold text-[14px] active:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => setStep('chatroom')}
            className="flex-1 py-3 bg-[#06C755] rounded-lg text-white font-bold text-[14px] flex items-center justify-center gap-1.5 active:bg-[#05b34c] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Add Friend
          </button>
        </div>
      </div>
    </div>
  );

  const Chatroom = () => (
    <div className="flex flex-col h-full bg-[#7BAFD4]">
      <div className="bg-[#7BAFD4]">
        <StatusBar />
        <div className="flex items-center justify-between px-4 py-2">
          <ChevronLeft size={24} className="text-black" />
          <div className="text-center">
            <p className="text-black font-bold text-[14px]">{brandNameShort}</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={17} className="text-black" />
            <Menu size={18} className="text-black" />
          </div>
        </div>
        <div className="flex justify-center py-1">
          <span className="bg-black/10 text-black/60 text-[10px] px-3 py-1 rounded-full">
            ✅ Official Account (Premium)
          </span>
        </div>
        <div className="flex justify-center py-2">
          <span className="bg-white/60 text-black/70 text-[11px] px-3 py-1 rounded-full">Tuesday, March 31, 2026 &gt;</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="flex gap-2 mt-2">
          <div className="w-[32px] h-[32px] bg-[#0050a0] rounded-full flex items-center justify-center shrink-0 mt-1">
            <span className="text-white text-[6px] font-bold leading-tight text-center">{brandNameShort}</span>
          </div>
          <div>
            <span className="text-black/70 text-[11px] font-medium">{brandNameShort}</span>
            <div className="bg-white rounded-xl rounded-tl-sm p-3 mt-1 max-w-[240px]">
              <p className="text-black text-[12px] leading-relaxed">
                {genericBranding
                  ? t('generic.line.welcome_blurb')
                  : t('messaging.chat_thanks_friend').replace('{name}', brandNameShort)}
              </p>
              {!genericBranding && (
                <>
                  <p className="text-black text-[12px] leading-relaxed mt-2">{t('messaging.chat_inbox_line')}</p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">{t('messaging.chat_consult_offer')}</p>
                  <p className="text-black text-[12px] leading-relaxed mt-2">
                    {t('messaging.chat_welcome_brand').replace('{brand}', brandName)} 💙
                  </p>
                </>
              )}
              <p className="text-black/60 text-[10px] leading-relaxed mt-3 border-t border-black/10 pt-2">
                ※ Messages sent during off-hours (8PM-8AM) will be delivered after 8:00 AM the next day.
              </p>
              <p className="text-black/60 text-[10px] leading-relaxed mt-1">
                Friend added: March 31, 2026 04:11
              </p>
            </div>
            <span className="text-black/40 text-[10px] ml-1">4:11 AM</span>
          </div>
        </div>
      </div>

      {/* Bottom quick actions */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 space-y-2">
        <button className="w-full text-left text-[13px] text-black py-2 px-1 flex items-center gap-2 active:bg-gray-50 rounded">
          💼 {genericBranding ? t('generic.line.cta_consult') : 'Get a free insurance consultation'}
        </button>
        <div className="border-t border-gray-100" />
        <button className="w-full text-left text-[13px] text-black py-2 px-1 flex items-center gap-2 active:bg-gray-50 rounded">
          {genericBranding ? t('generic.line.cta_web') : 'Visit Samsung Life website'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full">
      {step === 'channel_home' && <ChannelHome />}
      {step === 'add_friend_popup' && <AddFriendPopup />}
      {step === 'chatroom' && <Chatroom />}
    </div>
  );
}
