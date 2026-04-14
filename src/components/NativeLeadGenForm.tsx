import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLocale } from '../LocaleContext';

const TVING_RED = '#FF0015';
const MOCK_USER = { name: '하경제', phone: '010-1234-5678', car: 'EV6 GT-Line' };

interface NativeLeadGenFormProps {
  onSubmit: () => void;
  variant?: 'car' | 'insurance';
}

export default function NativeLeadGenForm({ onSubmit, variant = 'car' }: NativeLeadGenFormProps) {
  const { t, genericBranding } = useLocale();
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
          {isCar ? t('native.success_title_car') : t('native.success_title_insurance')}
        </h2>
        <p className="text-gray-400 text-[13px]">
          {isCar ? t('native.success_desc_car') : t('native.success_desc_insurance')}
        </p>
        <button
          onClick={onSubmit}
          className="mt-8 px-6 py-2.5 font-semibold text-[15px] active:opacity-60"
          style={{ color: TVING_RED }}
        >
          {t('native.confirm')}
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
            ? <>{t('native.car.incentive')} <span className="text-white font-medium">{t(genericBranding ? 'generic.native.car.incentive_item' : 'native.car.incentive_item')}</span>{t('native.car.incentive_suffix')}</>
            : <>{t('native.insurance.incentive')} <span className="text-white font-medium">{t(genericBranding ? 'generic.native.insurance.incentive_item' : 'native.insurance.incentive_item')}</span>{t('native.insurance.incentive_suffix')}</>
          }
        </p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden divide-y divide-white/[0.06]">
          <div className="flex items-center px-4">
            <label className="text-[13px] text-gray-400 w-[60px] shrink-0">{t('form.name')}</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t('form.name_placeholder')} className={inputClass} required />
          </div>
          <div className="flex items-center px-4">
            <label className="text-[13px] text-gray-400 w-[60px] shrink-0">{t('form.phone')}</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" className={inputClass} required />
          </div>
          {isCar ? (
            <>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">{t('native.car_label')}</label>
                <select value={car} onChange={(e) => setCar(e.target.value)} className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] appearance-none" required>
                  <option value="" className="bg-[#1e1e1e]">{t('native.select')}</option>
                  <option className="bg-[#1e1e1e]">{genericBranding ? 'Demo EV Standard' : 'EV6 Standard'}</option>
                  <option className="bg-[#1e1e1e]">{genericBranding ? 'Demo EV Long Range' : 'EV6 Long Range'}</option>
                  <option className="bg-[#1e1e1e]">{genericBranding ? 'Demo EV Sport' : 'EV6 GT-Line'}</option>
                  <option className="bg-[#1e1e1e]">{genericBranding ? 'Demo EV Performance' : 'EV6 GT'}</option>
                </select>
              </div>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">{t('native.date_label')}</label>
                <input type="date" className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] [color-scheme:dark]" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">{t('native.insurance_label')}</label>
                <select className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] appearance-none" defaultValue={t('insurance.comprehensive')} required>
                  <option value="" className="bg-[#1e1e1e]">{t('native.select')}</option>
                  <option className="bg-[#1e1e1e]">{t('insurance.comprehensive')}</option>
                  <option className="bg-[#1e1e1e]">{t('insurance.health')}</option>
                  <option className="bg-[#1e1e1e]">{t('insurance.auto')}</option>
                  <option className="bg-[#1e1e1e]">{t('insurance.pension')}</option>
                  <option className="bg-[#1e1e1e]">{t('insurance.savings')}</option>
                </select>
              </div>
              <div className="flex items-center px-4">
                <label className="text-[13px] text-gray-400 w-[60px] shrink-0">{t('native.consulting_label')}</label>
                <select className="w-full bg-transparent text-[14px] text-white focus:outline-none py-[10px] appearance-none" defaultValue={t('time.morning')}>
                  <option className="bg-[#1e1e1e]">{t('time.morning')}</option>
                  <option className="bg-[#1e1e1e]">{t('time.afternoon1')}</option>
                  <option className="bg-[#1e1e1e]">{t('time.afternoon2')}</option>
                  <option className="bg-[#1e1e1e]">{t('time.evening')}</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="bg-[#1e1e1e] rounded-xl px-4 py-3 mt-3 flex items-center justify-between gap-3">
          <span className="text-[13px] text-gray-400 leading-snug flex-1">{t('form.agree_privacy')}</span>
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
          {isCar ? t('form.privacy_car') : t('form.privacy_insurance')}
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
          {isCar ? t('form.car.submit') : t('form.insurance.submit')}
        </button>
      </form>
    </div>
  );
}
