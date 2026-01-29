import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Philosophy } from './components/Philosophy';
import { ClassSystem } from './components/ClassSystem';
import { CourseFormat } from './components/CourseFormat';
import { Recruit } from './components/Recruit';
import { Voice } from './components/Voice';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/ui/Cursor';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Elegant Preloader
  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="w-full min-h-screen relative bg-paper text-ink selection:bg-gold selection:text-white">
      <Cursor />
      
      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>
      
      {/* Preloader Overlay */}
      <div 
        className={`fixed inset-0 bg-ink z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out ${
           loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
         <div className="text-center relative z-10 overflow-hidden">
           <div className={`vertical-text text-white text-3xl md:text-5xl font-serif tracking-[0.5em] transition-transform duration-1000 delay-300 ${loading ? 'translate-y-0' : '-translate-y-full'}`}>
              大西正浩
           </div>
           <div className={`mt-4 text-gold font-display text-sm tracking-[0.5em] transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0'}`}>
              WEB CHEMISTRY
           </div>
        </div>
      </div>

      <Navigation />

      {/* Main Content */}
      <div className="animate-[fadeIn_0.5s_ease-out]">
        <Hero />
        <Profile />
        <Philosophy />
        <ClassSystem />
        <CourseFormat />
        <Recruit />
        <Voice />
        <Contact />
        <Footer />
      </div>

    </main>
  );
};

export default App;