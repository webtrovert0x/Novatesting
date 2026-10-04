'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Financial Needs Analysis (FNA)',
    stateOrCountry: 'Maryland',
    preferredTime: 'Morning (9am - 12pm EST)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* Contact Cards Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards-grid">
            {/* Card 1: Call */}
            <div className="c-card">
              <div className="c-icon-wrap">
                <Phone size={30} />
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
                <Mail size={30} />
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
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="c-sm-title">Business Hours</h4>
                  <p className="c-sm-text">
                    <strong>Mon - Friday:</strong> 9:00 am – 5:00 pm EST<br />
                    <strong>Saturday:</strong> 10:00 am – 1:00 pm EST
                  </p>
                </div>
              </div>

              <div className="card-sep" />

              <div className="info-block">
                <div className="c-icon-wrap-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="c-sm-title">Headquarters</h4>
                  <p className="c-sm-text">Glen Burnie, Maryland, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean On-Domain Strategy Consultation Form */}
      <section className="booking-section">
        <div className="container max-w-booking">
          <div className="booking-card">
            <div className="booking-header text-center">
              <span className="booking-badge">
                <ShieldCheck size={16} />
                <span>100% COMPLIMENTARY &amp; CONFIDENTIAL</span>
              </span>
              <h2 className="booking-title">
                Schedule Your 1-on-1 Consultation
              </h2>
              <p className="booking-desc">
                Select your area of interest to match directly with a licensed Nova Finance advisor.
              </p>
            </div>

            {submitted ? (
              <div className="success-booking-box">
                <CheckCircle2 size={48} color="#16a34a" />
                <h3>Thank You! Your Request Has Been Received</h3>
                <p>
                  A licensed advisor will review your request and contact you within <strong>1 business day</strong> via your preferred contact channel.
                </p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name <span className="red-star">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address <span className="red-star">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="johndoe@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Phone Number <span className="red-star">*</span></label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (443) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>State / Region <span className="red-star">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maryland, MD"
                      value={formData.stateOrCountry}
                      onChange={(e) => setFormData({ ...formData, stateOrCountry: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Primary Area of Interest</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="form-input"
                    >
                      <option value="Financial Needs Analysis (FNA)">Financial Needs Analysis (FNA Roadmap)</option>
                      <option value="Term Life Insurance">Term Life Insurance Protection</option>
                      <option value="Mutual Funds & Long-Term Savings">Tax-Advantaged Mutual Funds &amp; Savings</option>
                      <option value="Auto Insurance">Auto &amp; Vehicle Insurance</option>
                      <option value="Health Insurance">Health &amp; Medical Insurance</option>
                      <option value="Property & Casualty">Property &amp; Casualty Insurance</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Consultation Time</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="form-input"
                    >
                      <option value="Morning (9am - 12pm EST)">Morning (9:00 AM – 12:00 PM EST)</option>
                      <option value="Afternoon (12pm - 4pm EST)">Afternoon (12:00 PM – 4:00 PM EST)</option>
                      <option value="Evening (4pm - 7pm EST)">Evening (4:00 PM – 7:00 PM EST)</option>
                      <option value="Saturday Morning">Saturday Morning</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Notes or Questions (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about specific questions, family size, or financial priorities you would like to cover..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="privacy-notice">
                  <p>
                    By submitting, you agree to our <Link href="/privacy-policy">Privacy Policy</Link> and authorize NOVA Finance by Tainaliel to contact you regarding your consultation request. We will never sell your information.
                  </p>
                </div>

                <button type="submit" className="submit-booking-btn">
                  <Send size={18} />
                  <span>Request Free Strategy Session</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="map-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.4383054049154!2d-76.6239688234393!3d39.14201147167292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fcbef49f3699%3A0x9d519457442151a7!2s255%20Oakview%20Village%20Dr%2C%20Glen%20Burnie%2C%20MD%2021061%2C%20USA!5e0!3m2!1sen!2sng!4v1764756719272!5m2!1sen!2sng"
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nova Finance Headquarters Glen Burnie Maryland"
          />
        </div>
        <div className="map-content-card">
          <div className="map-icon-box">
            <MapPin size={26} color="#003399" />
          </div>
          <div className="map-location-info">
            <h5 className="location-title">Maryland, USA</h5>
            <p className="location-address">255 Oakview Village Dr, Glen Burnie, MD 21061</p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0;
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
          padding: 75px 0 50px;
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
          padding: 38px 28px;
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
          padding: 30px 28px;
        }
        .c-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #eef2ff;
          color: #003399;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .c-icon-wrap-sm {
          color: #003399;
          flex-shrink: 0;
        }
        .c-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 6px;
        }
        .c-sub {
          font-size: 0.9rem;
          color: #718096;
          margin-bottom: 22px;
        }
        .c-btn {
          display: inline-block;
          background-color: #f1f5f9;
          color: #003399;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 10px 24px;
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
          gap: 16px;
        }
        .card-sep {
          height: 1px;
          background-color: #e2e8f0;
          margin: 16px 0;
        }
        .c-sm-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 4px;
        }
        .c-sm-text {
          font-size: 0.9rem;
          color: #4a5568;
          line-height: 1.5;
        }
        .booking-section {
          padding: 30px 0 95px;
          background-color: #f7f9fc;
        }
        .max-w-booking {
          max-width: 860px;
          margin: 0 auto;
        }
        .booking-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 50px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .booking-header {
          margin-bottom: 36px;
        }
        .booking-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #f0fdf4;
          color: #166534;
          border: 1px solid #86efac;
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        .booking-title {
          font-size: 2.35rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 10px;
        }
        .booking-desc {
          font-size: 1.05rem;
          color: #4a5568;
        }
        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0a1128;
        }
        .red-star {
          color: #ef4444;
        }
        .form-input {
          width: 100%;
          padding: 12px 18px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          color: #0a1128;
          background-color: #ffffff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          border-color: #003399;
          box-shadow: 0 0 0 3px rgba(0, 51, 153, 0.1);
        }
        .privacy-notice {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }
        .privacy-notice a {
          color: #003399;
          text-decoration: underline;
        }
        .submit-booking-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 16px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .submit-booking-btn:hover {
          background-color: #002277;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 51, 153, 0.3);
        }
        .success-booking-box {
          text-align: center;
          padding: 50px 30px;
          background-color: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .success-booking-box h3 {
          font-size: 1.6rem;
          color: #166534;
        }
        .success-booking-box p {
          color: #15803d;
          font-size: 1.05rem;
          max-width: 540px;
          line-height: 1.6;
        }
        .google-map-section {
          position: relative;
          width: 100%;
          line-height: 0;
          overflow: hidden;
        }

        .map-inner {
          width: 100%;
          height: 460px;
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
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
          .booking-card {
            padding: 30px 20px;
          }
          .booking-title {
            font-size: 2rem;
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
