'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareOnTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`"${title}" via Nova Finance:`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  const shareOnLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  return (
    <div className="share-bar">
      <span className="share-label">
        <Share2 size={16} /> Share Article:
      </span>
      <div className="share-buttons-group">
        <button onClick={shareOnLinkedIn} className="share-btn linkedin-btn" title="Share on LinkedIn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72M7.86 18.5v-8.37H5.07v8.37h2.79Z" />
          </svg>
          LinkedIn
        </button>
        <button onClick={shareOnTwitter} className="share-btn twitter-btn" title="Share on X (Twitter)">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X
        </button>
        <button onClick={handleCopy} className={`share-btn copy-btn ${copied ? 'copied' : ''}`} title="Copy link">
          {copied ? <Check size={15} /> : <LinkIcon size={15} />}
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>

      <style jsx>{`
        .share-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .share-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #334155;
        }
        .share-buttons-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .share-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #334155;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .share-btn:hover {
          background-color: #e2e8f0;
          color: #0f172a;
        }
        .linkedin-btn:hover {
          background-color: #0077b5;
          color: #ffffff;
          border-color: #0077b5;
        }
        .twitter-btn:hover {
          background-color: #000000;
          color: #ffffff;
          border-color: #000000;
        }
        .copy-btn.copied {
          background-color: #00c2cb;
          color: #000050;
          border-color: #00c2cb;
        }
      `}</style>
    </div>
  );
}
