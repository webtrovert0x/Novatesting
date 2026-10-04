'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Check, X, Settings } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('nova_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenPrefs = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener('open-cookie-preferences', handleOpenPrefs);
    return () => window.removeEventListener('open-cookie-preferences', handleOpenPrefs);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('nova_cookie_consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('nova_cookie_consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('nova_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-banner-wrap" role="dialog" aria-label="Cookie Preferences">
        <div className="container">
          <div className="cookie-card">
            <div className="cookie-left">
              <div className="cookie-icon-box">
                <Shield size={24} color="#003399" />
              </div>
              <div className="cookie-text-block">
                <strong className="cookie-heading">Your Privacy &amp; Cookie Preferences</strong>
                <p className="cookie-desc">
                  We use cookies and similar technologies to ensure our financial calculators operate accurately, understand site traffic, and personalize your experience. Learn more in our{' '}
                  <Link href="/privacy-policy" style={{ color: '#003399', textDecoration: 'underline' }}>Privacy Policy</Link>.
                </p>
              </div>
            </div>

            <div className="cookie-actions">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="btn-cookie-outline"
              >
                <Settings size={15} />
                <span>Customize</span>
              </button>
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="btn-cookie-outline"
              >
                Necessary Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn-cookie-primary"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="cookie-modal-backdrop" onClick={() => setShowPreferences(false)}>
          <div className="cookie-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Cookie &amp; Tracking Preferences</h3>
              <button
                className="modal-close"
                onClick={() => setShowPreferences(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="pref-row">
                <div className="pref-info">
                  <strong>Strictly Necessary Cookies</strong>
                  <p>Required for basic security, page routing, and calculating loan/growth estimates.</p>
                </div>
                <input type="checkbox" checked={true} disabled className="pref-toggle" />
              </div>

              <div className="pref-row">
                <div className="pref-info">
                  <strong>Analytics &amp; Performance</strong>
                  <p>Helps us measure traffic and calculator engagement anonymously to improve usability.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="pref-toggle"
                />
              </div>

              <div className="pref-row">
                <div className="pref-info">
                  <strong>Marketing &amp; Personalization</strong>
                  <p>Enables relevant financial education messages and protects against redundant surveys.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="pref-toggle"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="btn-cookie-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .cookie-banner-wrap {
          position: fixed;
          bottom: 20px;
          left: 0;
          right: 0;
          z-index: 99999;
          padding: 0 16px;
        }

        .cookie-card {
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 16px;
          padding: 22px 28px;
          box-shadow: 0 12px 36px rgba(0, 51, 153, 0.14);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .cookie-left {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .cookie-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background-color: #e6f0fa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cookie-heading {
          font-size: 1rem;
          font-weight: 800;
          color: #0a1128;
          display: block;
          margin-bottom: 4px;
        }

        .cookie-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: #4a5568;
          margin: 0;
          max-width: 680px;
        }

        .cookie-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        .btn-cookie-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          padding: 9px 16px;
          border-radius: 8px;
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-cookie-outline:hover {
          background-color: #e2e8f0;
          color: #0a1128;
        }

        .btn-cookie-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #003399;
          color: #ffffff;
          border: none;
          padding: 9px 20px;
          border-radius: 8px;
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-cookie-primary:hover {
          background-color: #002277;
        }

        /* Modal */
        .cookie-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
          padding: 20px;
        }

        .cookie-modal-card {
          background-color: #ffffff;
          border-radius: 18px;
          padding: 32px;
          max-width: 520px;
          width: 100%;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 20px;
        }

        .modal-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0a1128;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }

        .pref-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 14px 16px;
        }

        .pref-info strong {
          display: block;
          font-size: 0.92rem;
          color: #0a1128;
          margin-bottom: 3px;
        }

        .pref-info p {
          font-size: 0.82rem;
          line-height: 1.45;
          color: #64748b;
          margin: 0;
        }

        .pref-toggle {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .cookie-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .cookie-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
    </>
  );
}
