'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Gauge, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-company' },
    { name: 'Services', href: '/services' },
    { name: 'Our Process', href: '/our-process' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      <header className={`main-header ${isScrolled ? 'sticky-active' : ''}`}>
        <div className="container-fluid header-inner">
          {/* Brand Logo */}
          <div className="logo-box">
            <Link href="/" className="logo-link">
              <Image
                src="/images/Nova-Finance-Logo1.png"
                alt="Nova Finance by Tainaliel"
                width={180}
                height={90}
                priority
                className="site-logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="main-nav">
            <ul className="nav-menu">
              {navLinks.map((item, idx) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname?.startsWith(item.href));
                return (
                  <li key={idx} className="nav-item">
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Content / Book Consultation */}
          <div className="header-right">
            <Link
              href="/book-a-consultation"
              className="btn-header-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#003399',
                color: '#ffffff',
                fontSize: '0.95rem',
                fontWeight: '700',
                padding: '11px 24px',
                borderRadius: '9999px',
                border: '1.5px solid #003399',
                boxShadow: '0 4px 14px rgba(0, 51, 153, 0.3)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              <span>Start with clarity</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-top">
          <Image
            src="/images/Nova-Finance-Logo1-e1764263806339.png"
            alt="Nova Finance"
            width={160}
            height={50}
            className="drawer-logo"
          />
          <button
            className="drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="drawer-menu">
          {navLinks.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <li key={idx} className="drawer-item">
                <Link
                  href={item.href}
                  className={`drawer-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="drawer-contact">
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li>
              <MapPin size={16} />
              <span>One World Trade Center, New York, NY, USA</span>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+14437136416">+1 443 713 6416</a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:consult@tainaliel.com">consult@tainaliel.com</a>
            </li>
          </ul>

          <Link
            href="/book-a-consultation"
            className="btn-blue-solid drawer-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      </aside>

      <style jsx>{`
        .main-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #ffffff;
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .main-header.sticky-active {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 95px;
        }

        .logo-box {
          display: flex;
          align-items: center;
        }

        .site-logo {
          width: 180px;
          height: 90px;
          object-fit: contain;
        }

        .main-nav {
          display: flex;
          align-items: center;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 20px;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: #111827;
          transition: var(--transition);
          padding: 8px 0;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #003399;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .btn-header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #003399;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 10px 22px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 51, 153, 0.25);
        }

        .btn-header-cta:hover {
          background-color: #002277;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0, 51, 153, 0.35);
        }

        .mobile-toggle {
          display: none;
          color: #0a1128;
        }

        /* Mobile Drawer */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1050;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .drawer-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          max-width: 85vw;
          height: 100%;
          background-color: #000050;
          color: #ffffff;
          z-index: 1100;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          padding: 28px;
          overflow-y: auto;
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .drawer-close {
          color: #ffffff;
          padding: 6px;
        }

        .drawer-menu {
          list-style: none;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .drawer-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          display: block;
        }

        .drawer-link.active {
          color: #00c2cb;
        }

        .drawer-contact {
          margin-top: 24px;
        }

        .drawer-contact h4 {
          color: #00c2cb;
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.9rem;
          color: #cbd5e1;
          margin-bottom: 24px;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .drawer-cta {
          width: 100%;
          text-align: center;
        }

        @media (max-width: 1100px) {
          .main-nav,
          .consultation-widget-btn {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .header-inner {
            height: 80px;
          }
        }
      `}</style>
    </>
  );
}
