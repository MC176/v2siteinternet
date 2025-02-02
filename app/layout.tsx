import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gîtes en Ardèche | Location de Vacances',
  description: 'Découvrez nos 6 gîtes de charme en Ardèche. Séjournez dans un cadre exceptionnel avec tout le confort moderne.',
  keywords: 'gîte, Ardèche, location vacances, hébergement, tourisme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}