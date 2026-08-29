import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ExtendedNavItem extends NavItem {
  subLabel: string;
}

const navItems: ExtendedNavItem[] = [
  {
    label: 'Top',
    href: '#hero',
    subLabel: 'トップページ',
  },
  {
    label: 'Profile',
    href: '#profile',
    subLabel: '講師紹介',
  },
  {
    label: 'Philosophy',
    href: '#philosophy',
    subLabel: '指導理念',
  },
  {
    label: 'System',
    href: '#system',
    subLabel: '授業形態',
  },
  {
    label: 'Courses',
    href: '#format',
    subLabel: '設置講座',
  },
  {
    label: 'Results',
    href: '#voice',
    subLabel: '合格者の声',
  },
  {
    label: 'FAQ',
    href: '#faq',
    subLabel: 'よくある質問',
  },
  {
    label: 'Contact',
    href: '#contact',
    subLabel: 'お問い合わせ',
  },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      { id: 'hero', theme: 'dark' },
      { id: 'profile', theme: 'light' },
      { id: 'philosophy', theme: 'dark' },
      { id: 'system', theme: 'dark' },
      { id: 'format', theme: 'light' },
      { id: 'recruit', theme: 'light' },
      { id: 'voice', theme: 'dark' },
      { id: 'contact', theme: 'light' }
    ] as const;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id);
            if (section) {
              setActiveTheme(section.theme);
            }
          }
        });
      },
      {
        rootMargin: '-10% 0px -85% 0px', // Adjusted for mobile: Focus on top area of screen
        threshold: 0
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      setHoveredIdx(0); // Reset to first image on open
    } else {
      document.body.style.overflow = '';
      setHoveredIdx(null);
    }
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setHoveredIdx(null);
  };

  const getHeaderStyle = () => {
    if (!isScrolled) return 'py-8 bg-transparent text-white';

    // Scrolled state
    const base = 'py-4 backdrop-blur-md shadow-sm transition-colors duration-500';
    return activeTheme === 'dark'
      ? `${base} bg-ink/90 text-white`
      : `${base} bg-paper/90 text-ink`;
  };

  const headerStyle = getHeaderStyle();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-700 ${headerStyle}`}
      >
        <a href="#hero" aria-label="大西正浩Web化学 トップへ" className="relative z-50 group text-left">
          <div className="text-xl md:text-2xl font-bold tracking-[0.2em] serif text-current">
            大西正浩Web化学
          </div>
        </a>

        <button
          onClick={toggleMenu}
          className="relative z-50 p-2 group flex items-center gap-3"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="global-menu"
        >
          <span className={`hidden md:block text-xs tracking-widest uppercase transition-opacity ${isOpen ? 'text-white' : 'group-hover:opacity-70'}`}>
            {isOpen ? 'Close' : 'Menu'}
          </span>
          <div className="flex flex-col items-end space-y-1.5 w-8">
            <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'bg-white w-8 rotate-45 translate-y-2.5' : 'w-8'}`}></span>
            <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6 group-hover:w-8'}`}></span>
            <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'bg-white w-8 -rotate-45 -translate-y-2.5' : 'w-4 group-hover:w-8'}`}></span>
          </div>
        </button>
      </header>

      {/* Full Screen Overlay - Awwwards Style */}
      <div
        id="global-menu"
        aria-hidden={!isOpen}
        className={`fixed inset-0 bg-ink z-40 transition-all duration-[800ms] cubic-bezier(0.76, 0, 0.24, 1) ${isOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex h-full w-full">

          {/* Left Side - Navigation List */}
          <div className="w-full md:w-3/5 h-full flex flex-col justify-start md:justify-center px-6 md:px-20 relative z-20 overflow-y-auto pt-24 md:pt-0">

            {/* Background Watermark/Ticker */}
            <div className="absolute top-10 left-0 w-full overflow-hidden opacity-5 pointer-events-none sticky">
              <div className="whitespace-nowrap font-display text-8xl md:text-[12rem] text-white animate-float">
                MASAHIRO ONISHI WEB CHEMISTRY
              </div>
            </div>

            <nav className="flex flex-col w-full md:my-auto shrink-0 pb-12 md:pb-0">
              {navItems.map((item, idx) => (
                <div
                  key={item.label}
                  className="group relative border-b border-white/10 shrink-0"
                  onMouseEnter={() => setHoveredIdx(idx)}
                >
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`w-full flex items-center justify-between py-3 md:py-5 transition-all duration-700 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                    style={{ transitionDelay: `${100 + idx * 50}ms` }}
                  >
                    <div className="flex items-baseline gap-6 md:gap-12">
                      <span className="text-xs font-sans text-gold/60 tracking-widest w-6">0{idx + 1}</span>
                      <div className="text-left">
                        <span className="block text-2xl md:text-6xl font-display text-white group-hover:translate-x-4 transition-transform duration-500 ease-out">
                          {item.label}
                        </span>
                        <span className="block text-[10px] md:text-sm font-sans text-gray-500 tracking-widest mt-1 group-hover:text-gold group-hover:translate-x-4 transition-all duration-500 delay-75">
                          {item.subLabel}
                        </span>
                      </div>
                    </div>

                    <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="text-gold w-5 h-5 md:w-8 md:h-8" />
                    </div>
                  </a>

                  {/* Hover Overlay Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              ))}
            </nav>

            <div className="mt-4 md:absolute md:bottom-8 md:left-20 text-white/20 text-[10px] tracking-[0.5em] font-sans pb-8 md:pb-0 shrink-0">
              &copy; {new Date().getFullYear()} ONISHI CHEMISTRY
            </div>
          </div>

          {/* Right Side - Dynamic Image Reveal (Desktop Only) */}
          <div className="hidden md:block w-2/5 h-full relative bg-charcoal overflow-hidden border-l border-white/10">
            {/* Default/Placeholder State */}
            <div className="absolute inset-0 bg-ink flex items-center justify-center z-0">
              <span className="font-display text-9xl text-white/5 tracking-widest rotate-90">MENU</span>
            </div>

            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img
                src="/hero-chemistry.avif"
                alt=""
                width="1920"
                height="1280"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen"
              />

              <div className="absolute bottom-12 left-12 z-20">
                <p className="text-5xl font-display text-white mb-2 tracking-wide transition-all duration-500">
                  {hoveredIdx === null ? 'Menu' : navItems[hoveredIdx].label}
                </p>
                <div className="w-12 h-[1px] bg-gold"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
