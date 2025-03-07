'use client'

import Link from 'next/link'
import { Instagram, Facebook, Globe } from 'lucide-react'

const Footer = () => {
  const switchLanguage = (lang: string) => {
    console.log(`Switching to ${lang}`)
  }

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
              Conditions Générales d&apos;Utilisation
            </Link>
            <Link
              href="/cgv"
              className="text-xs text-gray-600 hover:text-gray-900 transition-colors underline block"
            >
              Conditions Générales de Vente
            </Link>
          </div>

          {/* Social Media & Blog Link */}
          <div className="flex items-center justify-center gap-4">
            {/* Blog Link */}
            <Link
              href="/blog"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              📝 Blog
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
          <div className="flex items-center gap-1">
            <button
              onClick={() => switchLanguage('fr')}
              className="w-5 h-5 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fr.svg"
                alt="French"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
