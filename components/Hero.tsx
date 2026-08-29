import React from 'react';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink text-paper flex items-center">

      {/* Background Parallax Layer */}
      <div
        className="absolute inset-0 z-0 opacity-40 scale-105"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <p className="font-display text-[15vw] leading-none text-center text-outline opacity-10 tracking-widest whitespace-nowrap">
          TRUE FUNDAMENTALS
        </p>
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">

        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Left Content */}
          <div className="col-span-12 md:col-span-7 relative">
            <Reveal delay={200}>
              <div className="overflow-hidden mb-2">
                <span className="block text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-sans">
                  Premium Chemistry Tuition
                </span>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[1.1] mb-8 font-serif">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-paper via-white to-gray-400">大西正浩</span>
                <span className="block ml-6 md:ml-24 text-gold font-light">
                  <span className="font-display italic mr-3">Web</span>
                  <span className="font-serif">化学</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={600}>
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
            <Reveal delay={800} direction="left">
              <div className="vertical-text text-white/20 text-xs tracking-[1em] font-sans h-64 border-r border-white/10 pr-6">
                SCROLL TO EXPLORE
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating Call to Action */}
        <div className="absolute bottom-12 right-6 md:right-12 z-30">
          <Reveal delay={1000}>
            <a href="#recruit" className="group relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-gold/50 bg-ink/20">
              <div className="absolute inset-0 rounded-full border border-gold opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
              <div className="text-center group-hover:text-gold transition-colors duration-300">
                <span className="block text-xs tracking-widest mb-1">生徒</span>
                <span className="block text-xl font-serif">募集</span>
              </div>
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
