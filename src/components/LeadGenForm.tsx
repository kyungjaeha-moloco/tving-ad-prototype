import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const MOCK_USER = { name: '하경제', phone: '010-1234-5678', car: 'EV6 GT-Line' };

interface LeadGenFormProps {
  onSubmit: () => void;
  variant?: 'car' | 'insurance';
}

export default function LeadGenForm({ onSubmit, variant = 'car' }: LeadGenFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState(MOCK_USER.name);
  const [phone, setPhone] = useState(MOCK_USER.phone);
  const [car, setCar] = useState(MOCK_USER.car);

  const isCar = variant === 'car';
  const accentColor = isCar ? '#0b2a4a' : '#1a5632';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: accentColor }}>
          <CheckCircle className="text-white" size={30} />
        </div>
        <h2 className="text-[22px] font-bold text-gray-900 mb-2">
          {isCar ? '시승 신청이 완료되었습니다' : '상담 신청이 완료되었습니다'}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {isCar
            ? <>담당 딜러가 영업일 기준 1~2일 내<br />연락드릴 예정입니다.</>
            : <>전문 설계사가 영업일 기준 1일 내<br />연락드릴 예정입니다.</>
          }
        </p>
        <button
          onClick={onSubmit}
          className="mt-10 px-8 py-3 text-white rounded-lg font-bold text-sm active:scale-95 transition-transform"
          style={{ backgroundColor: accentColor }}
        >
          닫기
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative -mx-6 -mt-6 h-[120px] overflow-hidden">
        <img
          src={isCar
            ? 'https://picsum.photos/seed/luxury_suv_ev/800/400'
            : 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop'
          }
          alt={isCar ? '시승 차량' : '보험 상담'}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em]" style={{ color: `${accentColor}80` }}>
            {isCar ? 'Test Drive Event' : 'Insurance Consulting'}
          </span>
          <h2 className="text-[17px] font-extrabold leading-tight mt-0.5" style={{ color: accentColor }}>
            {isCar ? 'The All-New EV6 무료 시승 신청' : '삼성생명 무료 보험 상담'}
          </h2>
        </div>
      </div>

      <p className="text-[13px] text-gray-500 leading-relaxed">
        {isCar
          ? <>지금 시승 신청하시면 <span className="font-semibold text-gray-700">스타벅스 아메리카노 쿠폰</span>을 드립니다.</>
          : <>지금 상담 신청하시면 <span className="font-semibold text-gray-700">배스킨라빈스 기프티콘</span>을 드립니다.</>
        }
      </p>

      <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-gray-600">이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="성함을 입력해주세요"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none transition-colors"
            style={{ '--tw-ring-color': accentColor } as React.CSSProperties}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-gray-600">연락처</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none transition-colors"
            required
          />
        </div>

        {isCar ? (
          <>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600">희망 차종</label>
              <select
                value={car}
                onChange={(e) => setCar(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
                required
              >
                <option value="">차종을 선택해주세요</option>
                <option>EV6 Standard (RWD)</option>
                <option>EV6 Long Range (RWD)</option>
                <option>EV6 Long Range (AWD)</option>
                <option>EV6 GT-Line</option>
                <option>EV6 GT</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600">희망 시승일</label>
              <input
                type="date"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600">관심 보험</label>
              <select
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
                defaultValue="종합보험"
                required
              >
                <option value="">보험 유형을 선택해주세요</option>
                <option>종합보험</option>
                <option>건강보험</option>
                <option>자동차보험</option>
                <option>연금보험</option>
                <option>저축보험</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600">희망 상담 시간</label>
              <select
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
                defaultValue="오전 (10시~12시)"
              >
                <option>오전 (10시~12시)</option>
                <option>오후 (13시~15시)</option>
                <option>오후 (15시~17시)</option>
                <option>저녁 (18시~20시)</option>
              </select>
            </div>
          </>
        )}

        <div className="flex items-start gap-2.5">
          <input type="checkbox" id="terms" className="mt-0.5 w-4 h-4 shrink-0" style={{ accentColor }} required />
          <label htmlFor="terms" className="text-[11px] text-gray-500 leading-relaxed">
            {isCar
              ? '개인정보 수집 및 이용에 동의합니다. 수집된 정보는 시승 상담 목적으로만 사용됩니다. (필수)'
              : '개인정보 수집 및 이용에 동의합니다. 수집된 정보는 보험 상담 목적으로만 사용됩니다. (필수)'
            }
          </label>
        </div>

        <button
          type="submit"
          className="w-full text-white font-bold py-3.5 rounded-lg transition-colors text-[14px] active:scale-[0.98]"
          style={{ backgroundColor: accentColor }}
        >
          {isCar ? '시승 신청하기' : '상담 신청하기'}
        </button>
      </form>
    </div>
  );
}
