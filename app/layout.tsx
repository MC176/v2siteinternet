import { cormorant, poppins } from './fonts';
import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Gîte Chateaunnette - Hébergement de Luxe en Ardèche',
  description: 'Découvrez notre gîte de luxe en Ardèche. Une expérience unique dans un cadre exceptionnel.',
  keywords: 'gîte, Ardèche, location vacances, hébergement, tourisme, luxe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
