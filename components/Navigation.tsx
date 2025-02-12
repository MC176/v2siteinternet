'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Le Domaine', href: '/presentation' },
  { name: 'Nos Gîtes', href: '/gites' },
  { name: 'Informations', href: '/informations' },
  { name: 'Avis', href: '/avis' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredItem) {
      setIsVisible(true);
      const startTime = Date.now();

      const animate = () => {
        const progress = Math.min((Date.now() - startTime) / 200, 1);
        setLineWidth(progress * 100);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    } else {
      setLineWidth(0);
      setIsVisible(false);
    }
  }, [hoveredItem]);

  // Fermer le menu lors du clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (linkRef.current && !linkRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-transparent absolute w-full z-50" ref={linkRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex flex-shrink-0 items-center">
              <span className="text-2xl font-bold text-white">Le Mas d&apos;Eylieux</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                  {isVisible && hoveredItem === item.name && (
                    <span
                      style={{
                        width: `${lineWidth}%`,
                        transition: 'none',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '2px',
                        backgroundColor: 'white',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:bg-opacity-20 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-white">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}