import { createContext, useContext, useState } from 'react';
import { TRANSLATIONS } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('netsadr_lang') || 'en'; }
    catch { return 'en'; }
  });

  const toggleLang = () => {
    const next = lang === 'en' ? 'am' : 'en';
    setLang(next);
    try { localStorage.setItem('netsadr_lang', next); } catch { /* ignore */ }
  };

  // t('key') looks up the current language's string. Falls back to the
  // English string if a key is ever missing from the Amharic dictionary
  // (safer than showing a blank or a raw key while translation is in
  // progress on the rest of the site).
  const t = (key, ...args) => {
    const value = TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
    return typeof value === 'function' ? value(...args) : value;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
