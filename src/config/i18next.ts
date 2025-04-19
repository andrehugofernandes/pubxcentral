import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { defaultNS, fallbackLng, resources } from './i18n';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    defaultNS,
    fallbackLng,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18next; 