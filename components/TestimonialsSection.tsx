'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Eloise Juniper',
      location: 'California, USA',
      avatar: '/images/testimonial-2-1.png',
      topic: 'FINANCIAL CLARITY',
      emoji: '😊',
      text: 'My conversation with Nova Finance helped me understand my financial priorities and the next steps to take for my family. The advice was clear and practical.',
    },
    {
      name: 'Nathan Felix',
      location: 'Maryland, USA',
      avatar: '/images/testimonial-1-1.png',
      topic: 'FAMILY PROTECTION',
      emoji: '😊',
      text: 'I wanted to understand my family’s life insurance options. Nova Finance explained the choices in plain language, without pressure, and gave me confidence in my decisions.',
    },
  ];

  // Render multiple sets for seamless infinite auto-scroll carousel
  const [slideOffset, setSlideOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setSlideOffset((prev) => (prev === 0 ? 1 : 0));
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setSlideOffset((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setSlideOffset((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section
      className="testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="testimonials-header text-center">
          <h2 className="testimonials-title">Testimonials</h2>
        </div>

        {/* Both Testimonies Displayed Side-by-Side (2 Columns) */}
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`testimonial-card ${
                slideOffset === idx ? 'highlighted-card' : ''
              }`}
            >
              {/* Header row: Name/location, Quote icon, Avatar */}
              <div className="testimonial-top-row">
                <div className="client-meta">
                  <h4 className="client-name">{item.name}</h4>
                  <span className="client-location">{item.location}</span>
                </div>

                <div className="quote-mark">
                  <svg width="34" height="26" viewBox="0 0 34 26" fill="#003399">
                    <path d="M0 26V14.625L8.5 0H14.875L9.5625 12.75H14.875V26H0ZM19.125 26V14.625L27.625 0H34L28.6875 12.75H34V26H19.125Z" />
                  </svg>
                </div>

                <div className="client-avatar-frame">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={58}
                    height={58}
                    className="client-avatar-img"
                  />
                </div>
              </div>

              <div className="card-divider" />

              {/* Topic & Emoji */}
              <div className="topic-header">
                <span className="topic-title">{item.topic}</span>
                <span className="topic-emoji">{item.emoji}</span>
              </div>

              {/* Text */}
              <p className="testimonial-quote-text">{item.text}</p>

              {/* 5 Blue Rating Stars & Case Link */}
              <div className="stars-and-case-row">
                <div className="stars-row">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      size={18}
                      fill="#003399"
                      color="#003399"
                      className="star-icon"
                    />
                  ))}
                </div>

                <Link href="/about-company" className="verified-case-link">
                  <span>Verified Client Story</span>
                  <span className="case-arrow">➔</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Indicators */}
        <div className="carousel-controls">
          <button
            className="carousel-btn prev"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="carousel-dots-list">
            <button
              className={`carousel-dot ${slideOffset === 0 ? 'active' : ''}`}
              onClick={() => setSlideOffset(0)}
              aria-label="Testimonial 1"
            />
            <button
              className={`carousel-dot ${slideOffset === 1 ? 'active' : ''}`}
              onClick={() => setSlideOffset(1)}
              aria-label="Testimonial 2"
            />
          </div>

          <button
            className="carousel-btn next"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 85px 0 75px;
          background-color: #ffffff;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .testimonials-title {
          font-size: 2.85rem;
          font-weight: 800;
          color: #0a1128;
          letter-spacing: -0.5px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 40px;
        }

        .testimonial-card {
          background-color: #f5f7fa;
          border-radius: 20px;
          padding: 40px 36px 34px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          border: 2px solid transparent;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .testimonial-card:hover,
        .testimonial-card.highlighted-card {
          border-color: rgba(0, 51, 153, 0.25);
          box-shadow: 0 12px 32px rgba(0, 51, 153, 0.08);
          transform: translateY(-4px);
        }

        .testimonial-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .client-meta {
          flex: 1;
        }

        .client-name {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 4px;
        }

        .client-location {
          font-size: 0.95rem;
          font-weight: 500;
          color: #003399;
        }

        .quote-mark {
          margin: 0 24px;
          opacity: 0.9;
        }

        .client-avatar-frame {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #e2e8f0;
          flex-shrink: 0;
          border: 2px solid #003399;
        }

        .client-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-divider {
          width: 100%;
          height: 1px;
          background-color: #e2e8f0;
          margin-bottom: 22px;
        }

        .topic-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .topic-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0a1128;
          letter-spacing: 0.5px;
        }

        .topic-emoji {
          font-size: 1.2rem;
        }

        .testimonial-quote-text {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .stars-and-case-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
        }

        .stars-row {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .verified-case-link {
          font-size: 0.82rem;
          font-weight: 700;
          color: #003399;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .verified-case-link:hover {
          text-decoration: underline;
          transform: translateX(2px);
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .carousel-btn {
          color: #0a1128;
          background-color: #f1f5f9;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }

        .carousel-btn:hover {
          background-color: #003399;
          color: #ffffff;
        }

        .carousel-dots-list {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .carousel-dot.active {
          width: 24px;
          border-radius: 10px;
          background-color: #003399;
        }

        @media (max-width: 991px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .testimonials-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
