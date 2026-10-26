'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  /** Delay in ms, used to stagger siblings */
  delay?: number;
  className?: string;
  as?: 'div' | 'span';
  /** Stretch to fill a grid cell so the child card keeps equal heights */
  fill?: boolean;
};

/**
 * Fades and lifts content in once when it scrolls into view.
 * Only transform and opacity animate. Content stays visible if JS or
 * IntersectionObserver is unavailable, and with reduced motion.
 */
export default function Reveal({ children, delay = 0, className, as: Tag = 'div', fill = false }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return;
    }
    // Only hide what is still below the fold, so nothing flashes on load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setState('shown');
      return;
    }
    setState('hidden');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setState('shown');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base: React.CSSProperties = fill ? { height: '100%', display: 'flex', flexDirection: 'column' } : {};
  const motion: React.CSSProperties =
    state === 'hidden'
      ? { opacity: 0, transform: 'translate3d(0, 22px, 0)' }
      : {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          transition: `opacity 300ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 300ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        };

  return (
    <Tag ref={ref as React.RefObject<never>} className={className} style={{ ...base, ...motion }}>
      {children}
    </Tag>
  );
}
