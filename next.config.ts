import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy LMS / Student / Instructor Registration Pages -> Contact Us
      {
        source: '/student-registration',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/student-registration-2',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/instructor-registration',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/instructor-registration-2',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/student-registration/:path*',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/instructor-registration/:path*',
        destination: '/contact-us',
        permanent: true,
      },

      // Legacy Dashboard Pages -> Homepage
      {
        source: '/dashboard',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard-3',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard/:path*',
        destination: '/',
        permanent: true,
      },

      // Legacy WooCommerce / Shop / Cart / Checkout / Account Pages -> Services
      {
        source: '/shop',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/shop-2',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/shop/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/shop-2/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/cart-2',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/cart/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/cart-2/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/checkout-2',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/checkout/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/checkout-2/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/my-account',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/my-account-2',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/my-account/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/my-account-2/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/product/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/services',
        permanent: true,
      },

      // Legacy Courses / LMS List Views -> Blog & Educational Resources
      {
        source: '/courses',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/courses/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/list-view-01',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/list-view-01/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/education',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/education/:path*',
        destination: '/blog',
        permanent: true,
      },

      // Legacy Forex / Template Dummy Pages -> Services
      {
        source: '/accounts-overview',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/best-profit-split',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/award-winner',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/research-and-market-news',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/services/monitoring-support',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/monitoring-support/:path*',
        destination: '/services',
        permanent: true,
      },

      // Legacy Generic Team Profiles -> About Company
      {
        source: '/team',
        destination: '/about-company',
        permanent: true,
      },
      {
        source: '/team/:path*',
        destination: '/about-company',
        permanent: true,
      },

      // Legacy Template FAQ pages -> Our Process
      {
        source: '/faq',
        destination: '/our-process',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/our-process',
        permanent: true,
      },
      // Legacy Taxonomy & Archive Pages -> Canonical Category Targets
      {
        source: '/category/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/team-category/:path*',
        destination: '/about-company',
        permanent: true,
      },
      {
        source: '/faq-category/:path*',
        destination: '/our-process',
        permanent: true,
      },
      {
        source: '/product-category/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/product-tag/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/course-category/:path*',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
