'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

const locales = [
  { code: 'fr', label: '🇫🇷', alt: 'Français' },
  { code: 'en', label: '🇬🇧', alt: 'English' },
  { code: 'de', label: '🇩🇪', alt: 'Deutsch' },
  { code: 'nl', label: '🇳🇱', alt: 'Nederlands' }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      {locales.map(({ code, label, alt }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity ${
            language === code ? 'ring-2 ring-blue-500' : ''
          }`}
          title={alt}
        >
          <span className="text-xl" role="img" aria-label={alt}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}