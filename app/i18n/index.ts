import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/app/i18n/locales/en';
import fr from '@/app/i18n/locales/fr';

const i18n = i18next
  .createInstance()
  .use(LanguageDetector)
  .use(initReactI18next);

  if (!i18n.isInitialized) {
    i18n.init({
      resources: {
        en: {
          translation: en
        },
        fr: {
          translation: fr
        }
      },
      fallbackLng: 'fr',
      interpolation: {
        escapeValue: false
      }
    });
  }
  
  export default i18n;