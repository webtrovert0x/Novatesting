import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://novafinance.tainaliel.com'),
  title: 'Nova Finance by Tainaliel - Smart Investments & Wealth Advisory',
  description:
    'Build, protect, and grow your wealth with NOVA Finance. We offer tax-advantaged mutual funds guidance, term life insurance, and personalized wealth strategies.',
  keywords: [
    'Nova Finance',
    'Tainaliel',
    'Tax Free Mutual Funds',
    'Life Insurance',
    'Financial Needs Analysis',
    'Maryland Financial Advisor',
    'Wealth Management',
  ],
  authors: [{ name: 'Nova Finance by Tainaliel' }],
  openGraph: {
    title: 'Nova Finance by Tainaliel - Smart Investments',
    description:
      'Build, protect, and grow your wealth with NOVA Finance. We offer investment finance, term life insurance, and personalized wealth strategies.',
    url: 'https://novafinance.tainaliel.com',
    siteName: 'Nova Finance by Tainaliel',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nova Finance by Tainaliel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Finance by Tainaliel - Smart Investments',
    description:
      'Build, protect, and grow your wealth with NOVA Finance. We offer investment finance, term life insurance, and personalized wealth strategies.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/images/Nova-Finance-Logo1.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/Nova-Finance-Logo1.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/Nova-Finance-Logo1.png" />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
