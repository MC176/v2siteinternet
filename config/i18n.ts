export const locales = ['fr', 'en', 'de', 'nl'] as const;
export const defaultLocale = 'fr' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands'
}; 