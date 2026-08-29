import React from 'react';
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
  return (
    <main id="main-content" className="w-full min-h-screen relative bg-paper text-ink selection:bg-gold selection:text-white">
      <Cursor />
      
      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>
      
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
