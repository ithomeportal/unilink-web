import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unilink Transportation | Full Container Trucking & 3PL Solutions',
  description: 'Leading transportation and logistics provider specializing in full container trucking across USA, Canada, and Mexico. 24/7 support, trusted carrier network.',
  keywords: 'transportation, logistics, 3PL, freight, trucking, full container, FTL, USA, Mexico, Canada, carrier',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Unilink Transportation | Full Container Trucking Specialists',
    description: 'Delivering cargo beyond borders. Full container trucking across North America with 24/7 support.',
    type: 'website',
    locale: 'en_US',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
