import React, { useEffect, useRef } from 'react';

export const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let rafId = 0;
    let started = false;

    // The ring trails the dot with linear interpolation for a fluid feel.
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    const updatePosition = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (!started) {
        started = true;
        pos.x = e.clientX;
        pos.y = e.clientY;
        rafId = requestAnimationFrame(loop);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        ringRef.current?.classList.add('hovered');
      } else {
        ringRef.current?.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor hidden md:block" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" aria-hidden="true" />
    </>
  );
};
