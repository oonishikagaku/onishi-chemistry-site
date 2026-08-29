import React, { useEffect, useRef } from 'react';
import { Reveal } from './ui/Reveal';

interface HeroProps {
  /* False while the opening screen is covering the page; reveals start when it lifts. */
  ready?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ ready = true }) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLParagraphElement>(null);
  const magnetRef = useRef<HTMLDivElement>(null);

  // Scroll-linked parallax: background sinks slowly, watermark drifts on its own axis.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const h = window.innerHeight || 1;
        const p = Math.min(window.scrollY / h, 1.2);
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${p * 14}%, 0) scale(1.08)`;
        }
        if (watermarkRef.current) {
          watermarkRef.current.style.transform = `translate3d(${p * -8}%, ${p * 30}%, 0)`;
        }
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Magnetic pull on the circular CTA (fine pointers only).
  const onMagnetMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = magnetRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
  };

  const onMagnetLeave = () => {
    if (magnetRef.current) {
      magnetRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink text-paper flex items-center">

      {/* Background Parallax Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 opacity-40 will-change-transform"
        style={{ transform: 'scale(1.08)' }}
      >
        <img
          src="/hero-chemistry.avif"
          alt=""
          width="1920"
          height="1280"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          aria-hidden="true"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-ink/60 mix-blend-multiply"></div>
      </div>

      {/* Large Background Typography (Watermark) */}
      <div
        className="absolute inset-0 z-10 flex items-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <p
          ref={watermarkRef}
          className="w-full font-display text-[15vw] leading-none text-center text-outline opacity-10 tracking-widest whitespace-nowrap will-change-transform"
        >
          TRUE FUNDAMENTALS
        </p>
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">

        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Left Content */}
          <div className="col-span-12 md:col-span-7 relative">
            <Reveal delay={100} active={ready}>
              <div className="overflow-hidden mb-2">
                <span className="block text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-sans">
                  Premium Chemistry Tuition
                </span>
              </div>
            </Reveal>

            <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[1.1] mb-8 font-serif">
              <Reveal as="span" mask active={ready} delay={200} duration={1100} width="100%">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-paper via-white to-gray-400 text-shimmer">大西正浩</span>
              </Reveal>
              <Reveal as="span" mask active={ready} delay={350} duration={1100} width="100%">
                <span className="block ml-6 md:ml-24 text-gold font-light">
                  <span className="font-display italic mr-3">Web</span>
                  <span className="font-serif">化学</span>
                </span>
              </Reveal>
            </h1>

            <Reveal delay={600} active={ready}>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center ml-2 md:ml-24">
                <div className="h-[1px] w-12 bg-gold/50 hidden md:block"></div>
                <p className="text-gray-400 text-sm leading-8 tracking-widest max-w-md font-sans font-light">
                  難関大学・医学部合格のためのオンライン化学個別指導。<br />
                  「わかったつもり」を排除し、本質を突く講義で、<br />あなたの化学を完成させる。
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Decorative Elements */}
          <div className="col-span-12 md:col-span-5 hidden md:flex flex-col items-end justify-center h-full relative">
            <Reveal delay={800} direction="left" active={ready}>
              <div className="vertical-text text-white/20 text-xs tracking-[1em] font-sans h-64 border-r border-white/10 pr-6">
                SCROLL TO EXPLORE
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating Call to Action — magnetic, with rotating ring text */}
        <div className="absolute bottom-12 right-6 md:right-12 z-30">
          <Reveal delay={950} active={ready}>
            <div
              ref={magnetRef}
              onMouseMove={onMagnetMove}
              onMouseLeave={onMagnetLeave}
              className="relative transition-transform duration-300 ease-out will-change-transform"
            >
              <a href="#recruit" className="group relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-gold/50 bg-ink/20">
                {/* Rotating circular text */}
                <svg
                  className="absolute -inset-2 md:-inset-3 w-auto h-auto animate-spin-slow pointer-events-none"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <defs>
                    <path id="cta-ring" d="M 50,50 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
                  </defs>
                  <text
                    className="font-display fill-gold/40"
                    style={{ fontSize: '6px', letterSpacing: '0.18em' }}
                    textLength="289"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    <textPath href="#cta-ring">
                      RECRUITING STUDENTS · WEB CHEMISTRY · ONISHI MASAHIRO · WEB CHEMISTRY ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 rounded-full border border-gold opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
                <div className="text-center transition-all duration-300 group-hover:text-gold group-hover:scale-105">
                  <span className="block text-xs tracking-widest mb-1">生徒</span>
                  <span className="block text-xl font-serif">募集</span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
