'use client';

import React, { useEffect, useRef } from 'react';

type Props = {
  /** RGB triplet, e.g. "0, 194, 203" */
  color?: string;
  /** Number of contour levels */
  levels?: number;
  /** Grid cell size in CSS pixels. Smaller is smoother and heavier. */
  cell?: number;
  /** Drift speed multiplier */
  speed?: number;
  /** Overall line opacity, 0 to 1 */
  opacity?: number;
  /** Rings that swell around the pointer */
  interactive?: boolean;
  className?: string;
};

// Deterministic hash noise, so the terrain is the same on every load.
const hash = (x: number, y: number, z: number) => {
  let h = x * 374761393 + y * 668265263 + z * 2147483647;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return (h >>> 0) / 4294967295;
};

const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const noise3 = (x: number, y: number, z: number) => {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const xf = smooth(x - xi);
  const yf = smooth(y - yi);
  const zf = smooth(z - zi);
  const c = (dx: number, dy: number, dz: number) => hash(xi + dx, yi + dy, zi + dz);
  return lerp(
    lerp(lerp(c(0, 0, 0), c(1, 0, 0), xf), lerp(c(0, 1, 0), c(1, 1, 0), xf), yf),
    lerp(lerp(c(0, 0, 1), c(1, 0, 1), xf), lerp(c(0, 1, 1), c(1, 1, 1), xf), yf),
    zf
  );
};

const fbm = (x: number, y: number, z: number) =>
  noise3(x, y, z) * 0.62 + noise3(x * 2.1 + 17, y * 2.1 + 5, z * 1.6) * 0.28 + noise3(x * 4.3, y * 4.3 + 91, z * 2.2) * 0.1;

export default function TopographyField({
  color = '0, 194, 203',
  levels = 14,
  cell = 16,
  speed = 1,
  opacity = 0.5,
  interactive = true,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let lastFrame = 0;
    let field = new Float32Array(0);

    // Pointer, eased so rings glide rather than jump
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, strength: 0, target: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / cell) + 1;
      rows = Math.ceil(height / cell) + 1;
      field = new Float32Array(cols * rows);
    };

    const interp = (a: number, b: number, level: number) => {
      const d = b - a;
      return Math.abs(d) < 1e-6 ? 0.5 : (level - a) / d;
    };

    const draw = (time: number) => {
      const t = time * 0.00006 * speed;
      const sx = 0.0034; // spatial frequency in pixels, independent of cell size

      // Sample the height field
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const px = i * cell;
          const py = j * cell;
          let v = fbm(px * sx + t * 2.2, py * sx * 1.15 - t * 1.1, t * 3.5);

          if (interactive && pointer.strength > 0.001) {
            const dx = px - pointer.x;
            const dy = py - pointer.y;
            const d2 = dx * dx + dy * dy;
            v += 0.28 * pointer.strength * Math.exp(-d2 / (2 * 150 * 150));
          }
          field[j * cols + i] = v;
        }
      }

      ctx.clearRect(0, 0, width, height);
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      const min = 0.22;
      const max = 0.78;

      for (let l = 0; l < levels; l++) {
        const level = min + ((max - min) * l) / (levels - 1);
        const isIndex = l % 4 === 0;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${color}, ${(isIndex ? 0.9 : 0.5) * opacity})`;
        ctx.lineWidth = isIndex ? 1.5 : 0.9;

        for (let j = 0; j < rows - 1; j++) {
          for (let i = 0; i < cols - 1; i++) {
            const a = field[j * cols + i]; // top-left
            const b = field[j * cols + i + 1]; // top-right
            const c = field[(j + 1) * cols + i + 1]; // bottom-right
            const d = field[(j + 1) * cols + i]; // bottom-left

            let idx = 0;
            if (a > level) idx |= 8;
            if (b > level) idx |= 4;
            if (c > level) idx |= 2;
            if (d > level) idx |= 1;
            if (idx === 0 || idx === 15) continue;

            const x0 = i * cell;
            const y0 = j * cell;
            // Edge crossing points
            const top = { x: x0 + interp(a, b, level) * cell, y: y0 };
            const right = { x: x0 + cell, y: y0 + interp(b, c, level) * cell };
            const bottom = { x: x0 + interp(d, c, level) * cell, y: y0 + cell };
            const left = { x: x0, y: y0 + interp(a, d, level) * cell };

            const seg = (p: { x: number; y: number }, q: { x: number; y: number }) => {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
            };

            switch (idx) {
              case 1:
              case 14:
                seg(left, bottom);
                break;
              case 2:
              case 13:
                seg(bottom, right);
                break;
              case 3:
              case 12:
                seg(left, right);
                break;
              case 4:
              case 11:
                seg(top, right);
                break;
              case 5:
                seg(left, top);
                seg(bottom, right);
                break;
              case 6:
              case 9:
                seg(top, bottom);
                break;
              case 7:
              case 8:
                seg(left, top);
                break;
              case 10:
                seg(top, right);
                seg(left, bottom);
                break;
            }
          }
        }
        ctx.stroke();
      }
    };

    const frame = (time: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      // About 30 fps is plenty for slow-moving contours and keeps the page light
      if (time - lastFrame < 33) return;
      lastFrame = time;

      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.y += (pointer.ty - pointer.y) * 0.12;
      pointer.strength += (pointer.target - pointer.strength) * 0.08;

      draw(time);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (inside) {
        if (pointer.target === 0) {
          pointer.x = e.clientX - rect.left;
          pointer.y = e.clientY - rect.top;
        }
        pointer.tx = e.clientX - rect.left;
        pointer.ty = e.clientY - rect.top;
        pointer.target = 1;
      } else {
        pointer.target = 0;
      }
    };

    resize();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(4000);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    if (reduceMotion) {
      // One still frame, no loop
      draw(4000);
    } else {
      raf = requestAnimationFrame(frame);
      if (interactive) window.addEventListener('pointermove', onMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
    };
  }, [color, levels, cell, speed, opacity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}
