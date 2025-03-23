import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Le Mas d'Eylieux",
  description: "Un domaine d'exception au coeur de l'Ardèche",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </LanguageProvider>
      </body>
    </html>
  );
}