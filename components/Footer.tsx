import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl serif font-bold mb-6 tracking-widest">大西正浩Web化学</h2>
        <div className="flex justify-center space-x-8 mb-8 text-sm text-gray-500">
            <a href="#hero" className="hover:text-white transition-colors">Top</a>
            <a href="#profile" className="hover:text-white transition-colors">Profile</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-gray-700">
          &copy; {new Date().getFullYear()} Masahiro Onishi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};