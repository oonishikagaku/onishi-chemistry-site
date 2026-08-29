import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Philosophy } from './components/Philosophy';
import { ClassSystem } from './components/ClassSystem';
import { CourseFormat } from './components/CourseFormat';
import { Recruit } from './components/Recruit';
import { Voice } from './components/Voice';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/ui/Cursor';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 1600);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  // Inertia smooth scrolling (Lenis). Skipped entirely for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -80 },
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main id="main-content" className="w-full min-h-screen relative bg-paper text-ink selection:bg-gold selection:text-white">
      <Cursor />

      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Opening title — lifts away like a curtain once loaded */}
      <div
        className={`opening-screen transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          loading ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!loading}
      >
        <div className="opening-screen__inner">
          <p
            className={`opening-screen__name transition-all delay-200 duration-700 ${
              loading ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            大西正浩
          </p>
          <p
            className={`opening-screen__subtitle transition-opacity duration-500 ${
              loading ? 'opacity-100' : 'opacity-0'
            }`}
          >
            WEB CHEMISTRY
          </p>
          <span className="opening-screen__line" aria-hidden="true"></span>
        </div>
      </div>

      <Navigation />

      {/* Main Content */}
      <div className="content-sections">
        <Hero ready={!loading} />
        <Profile />
        <Philosophy />
        <ClassSystem />
        <CourseFormat />
        <Recruit />
        <Voice />
        <FAQ />
        <Contact />
        <Footer />
      </div>

    </main>
  );
};

export default App;
