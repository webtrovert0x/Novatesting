import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-content/',
          '/xmlrpc.php',
          '/dashboard*',
          '/student-registration*',
          '/instructor-registration*',
          '/shop*',
          '/cart*',
          '/checkout*',
          '/my-account*',
          '/courses*',
          '/list-view*',
          '/accounts-overview*',
          '/education*',
          '/best-profit-split*',
          '/award-winner*',
          '/research-and-market-news*',
          '/services/monitoring-support*',
          '/team*',
          '/faq*',
          '/faqs*',
          '/product*',
          '/products*',
        ],
      },
    ],
    sitemap: 'https://novafinance.tainaliel.com/sitemap.xml',
  };
}
