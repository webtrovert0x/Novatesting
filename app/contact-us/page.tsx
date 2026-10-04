'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import ConsultationCard from '@/components/ConsultationCard';

export default function ContactUsPage() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">DIRECT ADVISORY &amp; SUPPORT</span>
            <h1 className="banner-title">Contact Us &amp; Book a Consultation</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards-grid">
            {/* Card 1: Call */}
            <div className="c-card">
              <div className="c-icon-wrap">
                <Phone size={28} />
              </div>
              <h3 className="c-title">Call Directly</h3>
              <p className="c-sub">Mon - Fri • 9:00 AM - 5:00 PM EST</p>
              <a href="tel:+14437136416" className="c-btn">
                +1 (443) 713-6416
              </a>
            </div>

            {/* Card 2: Email */}
            <div className="c-card">
              <div className="c-icon-wrap">
                <Mail size={28} />
              </div>
              <h3 className="c-title">Email Us</h3>
              <p className="c-sub">Response within 1 business day</p>
              <a href="mailto:consult@tainaliel.com" className="c-btn">
                consult@tainaliel.com
              </a>
            </div>

            {/* Card 3: Business Hours & Location */}
            <div className="c-card double-card">
              <div className="info-block">
                <div className="c-icon-wrap-sm">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="c-sm-title">Business Hours</h4>
                  <p className="c-sm-text">
                    <strong>Mon - Friday:</strong> 9:00 am – 5:00 pm EST
                  </p>
                </div>
              </div>

              <div className="card-sep" />

              <div className="info-block">
                <div className="c-icon-wrap-sm">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="c-sm-title">Headquarters</h4>
                  <p className="c-sm-text">One World Trade Center, Suite 8500, New York, NY 10007, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Split Consultation Card Section */}
      <section className="booking-section">
        <div className="container">
          <ConsultationCard />
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="map-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.01570772342784!3d40.71318797139366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            width="100%"
            height="440"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nova Finance Headquarters One World Trade Center New York"
          />
        </div>
        <div className="map-content-card">
          <div className="map-icon-box">
            <MapPin size={26} color="#003399" />
          </div>
          <div className="map-location-info">
            <h5 className="location-title">New York, NY, USA</h5>
            <p className="location-address">One World Trade Center, Suite 8500, New York, NY 10007</p>
          </div>
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
        .contact-info-section {
          padding: 65px 0 40px;
          background-color: #f7f9fc;
        }
        .contact-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.35fr;
          gap: 28px;
        }
        .c-card {
          background-color: #ffffff;
          border-radius: 18px;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
        }
        .double-card {
          align-items: stretch;
          text-align: left;
          justify-content: space-between;
          padding: 28px 28px;
        }
        .c-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #eef2ff;
          color: #003399;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .c-icon-wrap-sm {
          color: #003399;
          flex-shrink: 0;
        }
        .c-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 6px;
        }
        .c-sub {
          font-size: 0.88rem;
          color: #718096;
          margin-bottom: 20px;
        }
        .c-btn {
          display: inline-block;
          background-color: #f1f5f9;
          color: #003399;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 10px 22px;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }
        .c-btn:hover {
          background-color: #003399;
          color: #ffffff;
        }
        .info-block {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .card-sep {
          height: 1px;
          background-color: #e2e8f0;
          margin: 14px 0;
        }
        .c-sm-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 3px;
        }
        .c-sm-text {
          font-size: 0.88rem;
          color: #4a5568;
          line-height: 1.45;
        }
        .booking-section {
          padding: 20px 0 85px;
          background-color: #f7f9fc;
        }
        .google-map-section {
          position: relative;
          width: 100%;
          line-height: 0;
          overflow: hidden;
        }
        .map-inner {
          width: 100%;
          height: 440px;
        }
        .map-inner iframe {
          width: 100%;
          height: 100%;
          filter: grayscale(15%) contrast(105%);
        }
        .map-content-card {
          position: absolute;
          top: 40px;
          left: 10%;
          background-color: #ffffff;
          border-radius: 14px;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.16);
          border: 1px solid rgba(0, 0, 0, 0.06);
          z-index: 5;
          line-height: 1.5;
        }
        .map-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: #eef2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .location-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 3px;
        }
        .location-address {
          font-size: 0.92rem;
          color: #64748b;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
          .map-content-card {
            left: 5%;
            right: 5%;
            top: 20px;
          }
        }
      `}</style>
    </main>
  );
}
