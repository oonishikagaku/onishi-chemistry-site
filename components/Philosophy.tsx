import React from 'react';
import { Reveal } from './ui/Reveal';

export const Philosophy: React.FC = () => {
   return (
      <section id="philosophy" className="py-24 md:py-40 bg-ink text-paper relative flex flex-col items-center justify-center overflow-hidden">

         {/* Dynamic Background */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/20"></div>
            <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/20"></div>
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/20"></div>
         </div>

         <div className="container mx-auto px-6 max-w-6xl relative z-10">

            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
               <Reveal>
                  <span className="inline-block text-gold font-display text-xs md:text-sm tracking-[0.5em] mb-6 md:mb-8 border border-gold/30 px-6 py-2 rounded-full">PHILOSOPHY</span>
               </Reveal>
               <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  <Reveal as="span" mask width="100%" delay={100} duration={1100}>
                     <span className="block">テクニックは、</span>
                  </Reveal>
                  <Reveal as="span" mask width="100%" delay={250} duration={1100}>
                     <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-white text-shimmer">通じない。</span>
                  </Reveal>
               </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
               <Reveal delay={200}>
                  <div className="font-serif text-xl md:text-3xl leading-relaxed text-gray-300 text-center md:text-left">
                     <p className="mb-6 md:mb-8">
                        東大・京大・難関大学の入試において、
                        小手先の技術は無力です。
                     </p>
                     <p className="text-white text-2xl md:text-3xl">
                        必要なのは、<br />
                        揺るぎない<span className="text-gold border-b border-gold pb-1">「本質の理解」</span>のみ。
                     </p>
                  </div>
               </Reveal>

               <Reveal delay={400}>
                  <div className="space-y-6 md:space-y-8 font-sans font-light text-gray-400 text-sm md:text-base leading-7 md:leading-8 tracking-wide text-justify">
                     <p>
                        「基礎を簡単と思っている人」<br />
                        「大量の演習をすれば化学が伸びると思っている人」
                     </p>
                     <p className="pl-4 border-l border-gold/50 text-white">
                        大西Web化学ではその考えを改め、徹底して一緒に基礎を固めます。
                        どのような問題が出題されようが、十分に対応できる基礎力の養成は当然として、
                        問題の背景まで高校化学の領域を逸脱することなくお教えします。
                     </p>
                     <p>
                        そのレベルまで、私と一緒に登り詰めましょう。
                     </p>
                  </div>
               </Reveal>
            </div>

            {/* Decorative Quote */}
            <Reveal delay={600} width="100%">
               <div className="mt-20 md:mt-32 text-center">
                  <p className="font-display text-4xl md:text-6xl text-outline opacity-60 italic">
                     "True Fundamentals"
                  </p>
               </div>
            </Reveal>
         </div>
      </section>
   );
};