'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Le Domaine', href: '/presentation' },
  { 
    name: 'Nos Gîtes', 
    href: '/gites',
    submenu: [
      { name: 'Châteaunette', href: '/gites/chateaunette' },
      { name: 'Côté Source', href: '/gites/cote-source' },
      { name: 'Noisettiers', href: '/gites/noisettiers' },
      { name: 'Maisonette', href: '/gites/maisonette' },
      { name: 'Citronniers', href: '/gites/citronniers' },
      { name: 'Figuiers', href: '/gites/figuiers' },
    ]
  },
  { name: 'Informations', href: '/informations' },
  { name: 'Avis', href: '/avis' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  return (
    <Disclosure as="nav" className="bg-transparent absolute w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <span className="text-2xl font-bold text-white">Le Mas d'Eylieux</span>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => item.submenu && setIsSubmenuOpen(true)}
                      onMouseLeave={() => item.submenu && setIsSubmenuOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className="nav-link"
                      >
                        {item.name}
                      </Link>
                      {item.submenu && isSubmenuOpen && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:bg-opacity-20 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="nav-link-mobile"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="nav-link-mobile"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}