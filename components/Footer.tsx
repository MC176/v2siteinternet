'use client'

import Link from 'next/link'
import { Instagram, Facebook, Globe } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/lib/LanguageContext'
import { useTranslation } from '@/lib/translations'

const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <footer className="bg-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Legal Links */}
          <div className="text-center md:text-left">
            <Link
              href="/cgu"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors underline block"
            >
              {t('termsOfUse')}
            </Link>
            <Link
              href="/cgv"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors underline block"
            >
              {t('termsOfSale')}
            </Link>
          </div>

          {/* Social Media & Blog Link */}
          <div className="flex items-center justify-center gap-4">
            {/* Blog Link */}
            <Link
              href="/blog"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              {t('blog')}
            </Link>

            {/* Social Media Links */}
            <a
              href="https://www.instagram.com/le_mas_deylieux/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/lemasdeylieux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}

export default Footer