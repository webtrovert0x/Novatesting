'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ConsultationCard from '@/components/ConsultationCard';

export default function BookAConsultationPage() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">1-ON-1 STRATEGY &amp; DISCOVERY</span>
            <h1 className="banner-title">Request a Consultation</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Book a Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Split Consultation Card Section */}
      <section className="consultation-section">
        <div className="container">
          <ConsultationCard />
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 65px 0;
          text-align: center;
        }

        .banner-eyebrow {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00c2cb;
          margin-bottom: 12px;
        }

        .banner-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #cbd5e1;
        }

        .crumb-sep {
          color: #00c2cb;
        }

        .consultation-section {
          padding: 70px 0 100px;
          background-color: #f7f9fc;
        }

        @media (max-width: 768px) {
          .banner-title {
            font-size: 2.2rem;
          }
          .consultation-section {
            padding: 40px 0 70px;
          }
        }
      `}</style>
    </main>
  );
}
