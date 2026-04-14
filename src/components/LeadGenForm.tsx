import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLocale } from '../LocaleContext';
import { t as translate } from '../i18n';
import { GENERIC_LEADGEN_HEADER_CAR, GENERIC_LEADGEN_HEADER_INSURANCE } from '../branding';

const MOCK_USER = { phone: '010-1234-5678', car: 'EV6 GT-Line' };

interface LeadGenFormProps {
  onSubmit: () => void;
  variant?: 'car' | 'insurance';
}

export default function LeadGenForm({ onSubmit, variant = 'car' }: LeadGenFormProps) {
  const { t, genericBranding, locale } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState(() => translate('native.mock_name', locale));
  const [phone, setPhone] = useState(MOCK_USER.phone);
  const [car, setCar] = useState(MOCK_USER.car);

  useEffect(() => {
    setName(translate('native.mock_name', locale));
  }, [locale]);

  const isCar = variant === 'car';
  const accentColor = isCar ? '#0b2a4a' : '#1a5632';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: accentColor }}>
          <CheckCircle className="text-white" size={30} />
        </div>
        <h2 className="text-[22px] font-bold text-gray-900 mb-2">
          {isCar ? t('form.car.success_title') : t('form.insurance.success_title')}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {isCar
            ? t('form.car.success_desc').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))
            : t('form.insurance.success_desc').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))
          }
        </p>
        <button
          onClick={onSubmit}
          className="mt-10 px-8 py-3 text-white rounded-lg font-bold text-sm active:scale-95 transition-transform"
          style={{ backgroundColor: accentColor }}
        >
          {t('form.close')}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative -mx-6 -mt-6 h-[120px] overflow-hidden">
        <img
          src={
            genericBranding
              ? isCar
                ? GENERIC_LEADGEN_HEADER_CAR
                : GENERIC_LEADGEN_HEADER_INSURANCE
              : isCar
                ? 'https://picsum.photos/seed/luxury_suv_ev/800/400'
                : 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop'
          }
          alt={isCar ? (genericBranding ? t('generic.form.car.title') : t('form.car.title')) : genericBranding ? t('generic.form.insurance.title') : t('form.insurance.title')}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em]" style={{ color: `${accentColor}80` }}>
            {isCar ? 'Test Drive Event' : 'Insurance Consulting'}
          </span>
          <h2 className="text-[17px] font-extrabold leading-tight mt-0.5" style={{ color: accentColor }}>
            {isCar ? (genericBranding ? t('generic.form.car.title') : t('form.car.title')) : genericBranding ? t('generic.form.insurance.title') : t('form.insurance.title')}
          </h2>
        </div>
      </div>

      <p className="text-[13px] text-gray-500 leading-relaxed">
        {isCar
          ? <>{t('form.car.incentive')} <span className="font-semibold text-gray-700">{t(genericBranding ? 'generic.form.car.incentive_item' : 'form.car.incentive_item')}</span>{t('form.car.incentive_suffix')}</>
          : <>{t('form.insurance.incentive')} <span className="font-semibold text-gray-700">{t(genericBranding ? 'generic.form.insurance.incentive_item' : 'form.insurance.incentive_item')}</span>{t('form.insurance.incentive_suffix')}</>
        }
      </p>

      <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-gray-600">{t('form.name')}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('form.name_placeholder')}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none transition-colors"
            style={{ '--tw-ring-color': accentColor } as React.CSSProperties}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-semibold text-gray-600">{t('form.phone')}</label>
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
              <label className="text-[11px] font-semibold text-gray-600">{t('form.car_model')}</label>
              <select
                value={car}
                onChange={(e) => setCar(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
                required
              >
                <option value="">{t('form.car_model_placeholder')}</option>
                <option>EV6 Standard (RWD)</option>
                <option>EV6 Long Range (RWD)</option>
                <option>EV6 Long Range (AWD)</option>
                <option>EV6 GT-Line</option>
                <option>EV6 GT</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600">{t('form.test_drive_date')}</label>
              <input
                type="date"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600">{t('form.insurance_type')}</label>
              <select
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
                defaultValue={t('insurance.comprehensive')}
                required
              >
                <option value="">{t('form.insurance_placeholder')}</option>
                <option value="comprehensive">{t('insurance.comprehensive')}</option>
                <option value="health">{t('insurance.health')}</option>
                <option value="auto">{t('insurance.auto')}</option>
                <option value="pension">{t('insurance.pension')}</option>
                <option value="savings">{t('insurance.savings')}</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-600">{t('form.consulting_time')}</label>
              <select
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-gray-900 text-sm focus:outline-none transition-colors"
                defaultValue="morning"
              >
                <option value="morning">{t('time.morning')}</option>
                <option value="afternoon1">{t('time.afternoon1')}</option>
                <option value="afternoon2">{t('time.afternoon2')}</option>
                <option value="evening">{t('time.evening')}</option>
              </select>
            </div>
          </>
        )}

        <div className="flex items-start gap-2.5">
          <input type="checkbox" id="terms" className="mt-0.5 w-4 h-4 shrink-0" style={{ accentColor }} required />
          <label htmlFor="terms" className="text-[11px] text-gray-500 leading-relaxed">
            {isCar ? t('form.car.terms') : t('form.insurance.terms')}
          </label>
        </div>

        <button
          type="submit"
          className="w-full text-white font-bold py-3.5 rounded-lg transition-colors text-[14px] active:scale-[0.98]"
          style={{ backgroundColor: accentColor }}
        >
          {isCar ? t('form.car.submit') : t('form.insurance.submit')}
        </button>
      </form>
    </div>
  );
}
