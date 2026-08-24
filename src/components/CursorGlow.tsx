import { useEffect, useRef, useCallback } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 }); // current rendered position
  const target = useRef({ x: -200, y: -200 }); // target (actual cursor) position
  const rafId = useRef<number>(0);
  const visible = useRef(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth lerp animation loop
  const animate = useCallback(() => {
    const el = glowRef.current;
    if (!el) return;

    // Lerp factor — lower = smoother/laggier, higher = snappier
    const lerp = 0.15;
    pos.current.x += (target.current.x - pos.current.x) * lerp;
    pos.current.y += (target.current.y - pos.current.y) * lerp;

    el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Skip on touch-only devices
    const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchOnly) return;

    const el = glowRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      if (!visible.current) {
        visible.current = true;
        el.style.opacity = '1';
      }

      // Reset idle fade
      if (idleTimer.current) clearTimeout(idleTimer.current);
      el.classList.remove('cursor-glow--idle');
      idleTimer.current = setTimeout(() => {
        el.classList.add('cursor-glow--idle');
      }, 1200);
    };

    const handleLeave = () => {
      visible.current = false;
      el.style.opacity = '0';
      el.classList.remove('cursor-glow--idle');
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };

    const handleEnter = (e: MouseEvent) => {
      // Snap immediately on re-enter so the glow doesn't fly across the screen
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      visible.current = true;
      el.style.opacity = '1';
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    // Start the animation loop
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      cancelAnimationFrame(rafId.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [animate]);

  // Don't render on touch-only (SSR-safe: render but hide via CSS)
  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99998,
        opacity: 0,
        willChange: 'transform, opacity',
      }}
    />
  );
}
