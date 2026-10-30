import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s — Art Sous Le Manguier',
    default: 'Art Sous Le Manguier',
  },
  description:
    'Site éditorial de l’association Art Sous Le Manguier (Douala, Cameroun) : émission vidéo documentaire, archives audiovisuelles et mémoire des artistes contemporains.',
  authors: [{ name: 'Louise Abomba — Art Sous Le Manguier' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Art Sous Le Manguier',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col text-ink antialiased">
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
