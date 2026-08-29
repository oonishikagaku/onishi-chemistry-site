import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  /* Render as span to stay valid inside headings (h1/h2). */
  as?: 'div' | 'span';
  /* Line-mask reveal: clips the child and slides it up from below. */
  mask?: boolean;
  /* Hold the animation until true (e.g. until the opening screen lifts). */
  active?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  delay = 0,
  duration = 1000,
  className = "",
  direction = 'up',
  threshold = 0.15,
  as = 'div',
  mask = false,
  active = true,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const isVisible = inView && active;

  const getTransform = () => {
    if (mask) return 'translateY(112%)';
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      case 'none': return 'none';
      default: return 'translateY(40px)';
    }
  };

  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<never>}
      style={{ width }}
      className={`relative ${mask ? 'block overflow-hidden pb-[0.15em] -mb-[0.15em]' : ''} ${className}`}
    >
      <Tag
        className={`${as === 'span' || mask ? 'block' : ''} transition-all transform ${
          isVisible || mask ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isVisible ? 'none' : getTransform(),
          willChange: 'transform',
        }}
      >
        {children}
      </Tag>
    </Tag>
  );
};
