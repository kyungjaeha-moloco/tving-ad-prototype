import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const TVING_RED = '#FF0015';
const MOCK_USER = { name: '하경제', phone: '010-1234-5678', car: 'EV6 GT-Line' };

interface NativeLeadGenFormProps {
  onSubmit: () => void;
  variant?: 'car' | 'insurance';
}

export default function NativeLeadGenForm({ onSubmit, variant = 'car' }: NativeLeadGenFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState(MOCK_USER.name);
  const [phone, setPhone] = useState(MOCK_USER.phone);
  const [car, setCar] = useState(MOCK_USER.car);

  const isCar = variant === 'car';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: TVING_RED }}>
          <CheckCircle className="text-white" size={28} />
        </div>
        <h2 className="text-[18px] font-bold text-white mb-1">
          {isCar ? '신청 완료' : '상담 신청 완료'}
        </h2>
        <p className="text-gray-400 text-[13px]">
          {isCar ? '담당 딜러가 곧 연락드리겠습니다.' : '전문 설계사가 곧 연락드리겠습니다.'}
        </p>
        <button
          onClick={onSubmit}
          className="mt-8 px-6 py-2.5 font-semibold text-[15px] active:opacity-60"
          style={{ color: TVING_RED }}
        >
          확인
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-transparent text-white text-[14px] placeholder:text-gray-500 focus:outline-none py-[10px]";

  return (
    <div className="space-y-4 pt-3">
      <div className="text-center pb-1">
        <p className="text-[13px] text-gray-400">
          {isCar
            ? <>EV6 시승 신청 시 <span className="text-white font-medium">스타벅스 쿠폰</span> 증정</>
            : <>무료 보험 상담 신청 시 <span className="text-white font-medium">배스킨라빈스 기프티콘</span> 증정</>
          }
        </p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden divide-y divide-white/[0.06]">
          <div className="flex items-center px-4">
            <label className="text-[13px] text-gray-400 w-[60px] shrink-0">이름</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="성함을 입력해주세요" className={inputClass} required />
          </div>
          <div className="flex items-center px-4">
            <label className="text-[13px] text-gray-400 w-[60px] shrink-0">연락처</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" className={inputClass} required />
          </div>
          {isCar ? (
            <>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">차종</label>
                <select value={car} onChange={(e) => setCar(e.target.value)} className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] appearance-none" required>
                  <option value="" className="bg-[#1e1e1e]">선택해주세요</option>
                  <option className="bg-[#1e1e1e]">EV6 Standard</option>
                  <option className="bg-[#1e1e1e]">EV6 Long Range</option>
                  <option className="bg-[#1e1e1e]">EV6 GT-Line</option>
                  <option className="bg-[#1e1e1e]">EV6 GT</option>
                </select>
              </div>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">시승일</label>
                <input type="date" className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] [color-scheme:dark]" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">보험</label>
                <select className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] appearance-none" defaultValue="종합보험" required>
                  <option value="" className="bg-[#1e1e1e]">선택해주세요</option>
                  <option className="bg-[#1e1e1e]">종합보험</option>
                  <option className="bg-[#1e1e1e]">건강보험</option>
                  <option className="bg-[#1e1e1e]">자동차보험</option>
                  <option className="bg-[#1e1e1e]">연금보험</option>
                  <option className="bg-[#1e1e1e]">저축보험</option>
                </select>
              </div>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">상담</label>
                <select className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] appearance-none" defaultValue="오전 (10시~12시)">
                  <option className="bg-[#1e1e1e]">오전 (10시~12시)</option>
                  <option className="bg-[#1e1e1e]">오후 (13시~15시)</option>
                  <option className="bg-[#1e1e1e]">오후 (15시~17시)</option>
                  <option className="bg-[#1e1e1e]">저녁 (18시~20시)</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="bg-[#1e1e1e] rounded-xl px-4 py-3 mt-3 flex items-center justify-between gap-3">
          <span className="text-[13px] text-gray-400 leading-snug flex-1">개인정보 수집 및 이용 동의</span>
          <button
            type="button"
            onClick={() => setAgreed(!agreed)}
            className="relative w-[44px] h-[26px] rounded-full transition-colors shrink-0"
            style={{ backgroundColor: agreed ? TVING_RED : '#3a3a3c' }}
          >
            <div className={`absolute top-[2px] w-[22px] h-[22px] bg-white rounded-full shadow-sm transition-transform ${agreed ? 'left-[20px]' : 'left-[2px]'}`} />
          </button>
        </div>

        <p className="text-[11px] text-gray-600 px-1 mt-1">
          {isCar
            ? '수집된 정보는 시승 상담 목적으로만 사용됩니다.'
            : '수집된 정보는 보험 상담 목적으로만 사용됩니다.'
          }
        </p>

        <button
          type="submit"
          disabled={!agreed}
          className="w-full mt-4 py-3.5 rounded-xl font-bold text-[15px] transition-all active:scale-[0.98]"
          style={{
            backgroundColor: agreed ? TVING_RED : '#2a2a2a',
            color: agreed ? 'white' : '#555',
            cursor: agreed ? 'pointer' : 'not-allowed',
          }}
        >
          {isCar ? '시승 신청하기' : '상담 신청하기'}
        </button>
      </form>
    </div>
  );
}
