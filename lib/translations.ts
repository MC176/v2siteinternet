'use client';

import { useLanguage } from './LanguageContext';

export type Language = 'fr' | 'en' | 'nl';

type TranslationKeys = 'termsOfUse' | 'termsOfSale' | 'blog';

type Translations = {
  [K in Language]: {
    [T in TranslationKeys]: string;
  };
};

const translations: Translations = {
  fr: {
    termsOfUse: 'Conditions d\'utilisation',
    termsOfSale: 'Conditions générales de vente',
    blog: 'Blog'
  },
  en: {
    termsOfUse: 'Terms of Use',
    termsOfSale: 'Terms of Sale',
    blog: 'Blog'
  },
  nl: {
    termsOfUse: 'Gebruiksvoorwaarden',
    termsOfSale: 'Verkoopvoorwaarden',
    blog: 'Blog'
  }
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  return (key: TranslationKeys): string => {
    return translations[language][key];
  };
};