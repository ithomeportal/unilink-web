import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unilink Transportation | International 3PL & Logistics Solutions',
  description: 'One of the leading transportation and logistics providers around the world. Over the Road, Air Freight, and Ocean Shipping services across USA, Canada, and Mexico.',
  keywords: 'transportation, logistics, 3PL, freight, trucking, air freight, ocean shipping, USA, Mexico, Canada',
  openGraph: {
    title: 'Unilink Transportation | International 3PL & Logistics Solutions',
    description: 'Delivering cargo beyond borders. Over the Road, Air Freight, and Ocean Shipping services.',
    type: 'website',
    locale: 'en_US',
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
