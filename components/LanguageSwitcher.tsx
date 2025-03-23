'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity ${
          language === 'fr' ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fr.svg"
          alt="French"
          width={24}
          height={24}
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity ${
          language === 'en' ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg"
          alt="English"
          width={24}
          height={24}
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => setLanguage('nl')}
        className={`w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity ${
          language === 'nl' ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/nl.svg"
          alt="Dutch"
          width={24}
          height={24}
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};