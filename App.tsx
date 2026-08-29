import React, { useEffect, useState } from 'react';
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
    }, 1200);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main id="main-content" className="w-full min-h-screen relative bg-paper text-ink selection:bg-gold selection:text-white">
      <Cursor />
      
      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Opening title */}
      <div
        className={`opening-screen transition-all duration-700 ease-in-out ${
          loading ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!loading}
      >
        <div className="opening-screen__inner">
          <p
            className={`opening-screen__name transition-all delay-200 duration-700 ${
              loading ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
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
        </div>
      </div>
      
      <Navigation />

      {/* Main Content */}
      <div className="content-sections">
        <Hero />
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
