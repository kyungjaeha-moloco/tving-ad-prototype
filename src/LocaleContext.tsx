import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, TranslationKey, t as translate } from './i18n';
import { GENERIC_BRANDING_STORAGE_KEY } from './branding';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  genericBranding: boolean;
  setGenericBranding: (value: boolean) => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

function readStoredGenericBranding(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(GENERIC_BRANDING_STORAGE_KEY) === '1';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ko');
  const [genericBranding, setGenericBrandingState] = useState<boolean>(readStoredGenericBranding);
  const t = (key: TranslationKey) => translate(key, locale);

  const setGenericBranding = (value: boolean) => {
    setGenericBrandingState(value);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(GENERIC_BRANDING_STORAGE_KEY, genericBranding ? '1' : '0');
  }, [genericBranding]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, genericBranding, setGenericBranding, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
