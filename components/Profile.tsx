import React, { useEffect, useRef, useState } from 'react';

export const Profile: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  /* New state for mobile image fade effect */
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;
          const isDesktop = window.innerWidth >= 768; // Simple breakpoint check

          // Logic for active step highlihgt (Desktop Only)
          if (isDesktop) {
            let minDistance = Infinity;
            let currentActive = 0;

            stepsRef.current.forEach((step, index) => {
              if (!step) return;
              const rect = step.getBoundingClientRect();
              const elementCenter = rect.top + rect.height / 2;
              const distance = Math.abs(viewportCenter - elementCenter);

              if (distance < minDistance) {
                minDistance = distance;
                currentActive = index;
              }
            });

            setActiveStep(currentActive);
          }

          // Logic for mobile image fade (Mobile Only or Always if needed, but let's optimize)
          // Since the image is sticky on mobile, we process this.
          // Note: If you want this ONLY on mobile, add !isDesktop check. 
          // Assuming the effect is desired on mobile as built:
          if (!isDesktop && contentRef.current) {
            const contentRect = contentRef.current.getBoundingClientRect();
            // Delay the timing: Trigger when content is closer to the center/top (e.g., 50% of viewport)
            if (contentRect.top < viewportHeight * 0.5) {
              setIsContentVisible(true);
            } else {
              setIsContentVisible(false);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentSteps = [
    {
      type: 'intro',
      content: (
        <div className="relative pl-4 md:pl-0">
          <span className="absolute -left-12 md:-left-16 top-1 text-xs font-sans tracking-widest text-gold opacity-0 animate-[fadeIn_1s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>01</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.4] break-words tracking-tight">
            受験化学の<br />
            <span className="relative inline-block text-ink mx-1">
              深淵
              <span className="absolute bottom-2 left-0 w-full h-[2px] bg-gold"></span>
            </span>
            を、<br />
            紐解く。
          </h2>
          <p className="mt-8 text-xs md:text-sm font-display tracking-[0.3em] text-gold uppercase">
            Instructor Profile
          </p>
        </div>
      )
    },
    {
      type: 'career',
      content: (
        <div className="relative pl-2 md:pl-0">
          <span className="absolute -left-12 md:-left-16 top-0 text-xs font-sans tracking-widest text-gold hidden md:block">02</span>

          {/* Highlighted Authority Box */}
          <div className="relative border border-gold/40 bg-white/50 backdrop-blur-sm p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(207,170,125,0.15)] mb-10 group overflow-hidden">
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold"></div>

            {/* Background Texture for Box */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

            <p className="text-[9px] md:text-[10px] tracking-[0.4em] text-gold uppercase mb-6 text-center font-sans">Current Key Position</p>

            <h3 className="text-2xl md:text-4xl font-serif font-bold text-center text-ink leading-relaxed tracking-tight">
              河合塾<span className="mx-2 md:mx-4 text-gold/50">|</span>
              <span className="inline-block relative">
                京大オープン
              </span>
              <br />
              <span className="relative inline-block mt-2">
                作成チーフ
                <span className="absolute bottom-1 left-0 w-full h-[8px] bg-gold/20 -z-10"></span>
              </span>
            </h3>

            <p className="text-center mt-6 text-[10px] font-sans text-gray-400 tracking-[0.2em] uppercase border-t border-gold/20 pt-6 w-2/3 mx-auto">
              Kyoto University Open Exam <br className="md:hidden" />Chief Creator
            </p>
          </div>

          {/* Standard Career Text */}
          <p className="text-base md:text-lg leading-loose font-serif text-gray-800 text-justify mb-8 pl-4 border-l border-ink/10">
            定年を迎えるまでの約40年間、<span className="font-bold text-ink bg-gold/10 px-1">河合塾</span>での教鞭をとる。
            浪人生・現役生のテキスト作成を担当し、数多の合格者を輩出。
            入試問題の最前線に立ち続けている。
          </p>

          <div className="grid grid-cols-1 gap-3 text-sm font-sans text-gray-600 tracking-wide border-t border-ink/10 pt-6">
            <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-widest">Other Major Roles</p>
            <div className="flex items-center gap-3 group">
              <div className="w-1.5 h-1.5 bg-gray-300 rotate-45 group-hover:bg-gold transition-colors"></div>
              <span>阪大オープン作成メンバー</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-1.5 h-1.5 bg-gray-300 rotate-45 group-hover:bg-gold transition-colors"></div>
              <span>全統記述模試作成メンバー</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-1.5 h-1.5 bg-gray-300 rotate-45 group-hover:bg-gold transition-colors"></div>
              <span>プライムステージ模試作成</span>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'point1',
      content: (
        <div className="relative">
          <span className="absolute -left-16 top-0 text-xs font-sans tracking-widest text-gold hidden md:block">03</span>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display text-5xl md:text-6xl text-gold/30 font-light">I.</span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif">『大西化学』の真髄</h3>
          </div>
          <p className="text-gray-600 leading-loose font-sans text-base md:text-lg pl-6 border-l-2 border-gold/20">
            河合塾にて自らの名前がついた講座を担当。単なる知識の羅列ではなく、化学現象の「なぜ」を追求する講義は、多くの受験生を医学部・難関大合格へと導いてきた。
          </p>
        </div>
      )
    },
    {
      type: 'point2',
      content: (
        <div className="relative">
          <span className="absolute -left-16 top-0 text-xs font-sans tracking-widest text-gold hidden md:block">04</span>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display text-5xl md:text-6xl text-gold/30 font-light">II.</span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif">入試を知り尽くす</h3>
          </div>
          <p className="text-gray-600 leading-loose font-sans text-base md:text-lg pl-6 border-l-2 border-gold/20">
            模試やテキスト作成の中枢を担い、入試問題のトレンドと本質を熟知しているからこそできる、無駄のない、しかし本質を突いた指導。
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="profile" className="relative bg-paper text-ink">

      {/* Background Layer with Overflow Hidden - Keeps sticky working in main flow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] left-[-2%] text-[25vw] leading-none font-display text-black/[0.03] select-none">
          PROFILE
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-20">


          {/* 
            === AWWWARDS STYLE MOBILE PROFILE === 
            Design Concept: Sticky Parallax Image + Floating Glass Cards
          */}
          <div className="md:hidden w-full relative">

            {/* Sticky Mobile Image Container */}
            {/* Mobile Image */}
            <div className="sticky top-20 h-[50vh] w-full z-0 overflow-hidden perspective-1000"> {/* Added perspective */}
              {/* Fade overlay controlled by scroll */}
              <div
                className={`absolute inset-0 bg-paper/60 z-20 transition-opacity duration-1000 ease-in-out ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}
              ></div>

              {/* Original mild gradient (optional, kept for aesthetic depth) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper z-10"></div>

              <img
                src="/onishi-profile.png"
                alt="Masahiro Onishi"
                className={`w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                  // Start: Popped out (scaled up, shadow). End: Normal (scaled down, flat).
                  !isContentVisible ? 'scale-110' : 'scale-100'
                  }`}
                style={{
                  // Adding subtle 3D rotation or just shadow for the pop-out feel
                  boxShadow: !isContentVisible ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
                  filter: !isContentVisible ? 'brightness(1.05)' : 'brightness(1)',
                }}
              />
              <div className={`absolute bottom-0 left-0 w-full p-6 z-30 transition-all duration-700 ${isContentVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {/* Only hide text when faded out, or keep it? Let's hide it to clean up for reading content */}
                <div className="bg-gradient-to-t from-paper via-paper/60 to-transparent absolute inset-0 -z-10"></div>
                <p className="font-display text-4xl text-ink drop-shadow-sm">M. Onishi</p>
                <p className="text-[10px] tracking-[0.4em] text-gold uppercase mt-2">Chemistry Instructor</p>
              </div>
            </div>

            {/* Scrolling Content Cards (Overlapping) */}
            <div ref={contentRef} className="relative z-10 px-4 mt-10 pb-20 flex flex-col gap-32">
              {contentSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-2xl"
                  data-aos="fade-up"
                >
                  {/* Card Header Decoration */}
                  <div className="flex items-center gap-4 mb-6 opacity-50">
                    <span className="font-display text-3xl text-gold/60">0{index + 1}.</span>
                    <div className="h-[1px] flex-1 bg-gold/30"></div>
                  </div>

                  {/* Content Injection */}
                  <div className="[&_h2]:text-2xl [&_h2]:leading-snug [&_h3]:text-xl [&_p]:text-sm [&_p]:leading-relaxed [&_.text-base]:text-sm">
                    {step.content}
                  </div>
                </div>
              ))}

              {/* Final Call to Action or Signature */}
              <div className="text-center pt-10 pb-20 opacity-60">
                <p className="font-display text-lg text-ink">TRUST THE PROCESS</p>
              </div>
            </div>

          </div>

          {/* Left Column: Sticky Image */}
          {/* Important: Parent must be full height for sticky to track */}
          <div className="hidden md:block md:w-5/12 relative">
            <div className="sticky top-0 h-screen flex items-center justify-center py-12">

              {/* Static Image Frame - Completely Fixed */}
              <div className="relative w-full max-w-[380px] aspect-[3/4]">

                {/* Static Decorative Border */}
                <div className="absolute -top-5 -left-5 w-full h-full border border-gold/30"></div>

                {/* Static Image */}
                <div className="relative w-full h-full overflow-hidden shadow-2xl bg-gray-200">
                  <img
                    src="/onishi-profile.png"
                    alt="Masahiro Onishi"
                    className="w-full h-full object-cover"
                  />

                  {/* Static Overlay - Lighter for color photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40"></div>

                  {/* Static Text Content */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-display text-3xl tracking-wide">Masahiro Onishi</p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="h-[1px] w-8 bg-gold"></div>
                      <p className="text-[10px] tracking-[0.3em] text-white/90 uppercase">Chemistry Instructor</p>
                    </div>
                  </div>
                </div>

                {/* Subtle Step Indicator (Only this changes) */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {contentSteps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-[2px] transition-all duration-700 ease-out ${activeStep === idx ? 'h-10 bg-gold' : 'h-2 bg-gray-300'
                        }`}
                    ></div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Scrolling Text (Desktop Only) */}
          <div className="hidden md:block w-full md:w-7/12 py-0 md:py-24">
            <div className="flex flex-col gap-16 md:gap-0">
              {contentSteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className={`md:min-h-[80vh] flex items-center transition-all duration-1000 ease-out ${
                    // Mobile: Always visible, Desktop: Scroll controlled
                    'opacity-100 translate-y-0 blur-0'
                    } md:${activeStep === index
                      ? 'opacity-100 translate-y-0 blur-0'
                      : 'opacity-0 translate-y-16 blur-sm pointer-events-none'
                    }`}
                >
                  <div className="w-full max-w-xl">
                    {step.content}
                  </div>
                </div>
              ))}

              {/* Spacer to allow final item to be fully centered/scrolled matching desktop behavior, smaller on mobile */}
              <div className="h-0 md:h-[20vh]"></div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};