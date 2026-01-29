import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

export const Recruit: React.FC = () => {
    const targets = [
        {
            id: '01',
            title: 'Top Tier Ambition',
            jpTitle: 'トップレベル志向',
            description: '東大理Ⅲ、京大医学部を目指す方へ。既存の学習法に限界を感じているなら、ここが到達点です。頂点を目指すための真の思考力を養います。',
        },
        {
            id: '02',
            title: 'Overcome Weakness',
            jpTitle: '苦手意識の克服',
            description: '化学が「暗記科目」に見えているなら、それは誤解です。原理原則から理解することで、霧が晴れるように化学の本質が見えてきます。',
        },
        {
            id: '03',
            title: 'Break Through',
            jpTitle: '伸び悩み打破',
            description: '成績が頭打ちになっている方。学習の「質」と「視座」を変えるだけで、壁は突破できます。そのための武器を全て授けます。',
        },
    ];

    return (
        <section id="recruit" className="relative bg-paper text-ink py-20 md:py-48 border-t border-ink/5">

            <div className="container mx-auto px-6 md:px-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32">
                    <Reveal>
                        <div>
                            <span className="block text-gold text-sm tracking-[0.3em] uppercase mb-6 font-sans">Admission</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-ink">
                                募集要項
                            </h2>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <div className="mt-8 md:mt-0 max-w-sm">
                            <p className="font-sans text-sm text-gray-500 leading-7 tracking-wide text-justify">
                                対象は特に設けません。<br />
                                “やる気がある人”は責任を持って指導します。
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Targets Grid - Architectural & Clean */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-32 border-t border-ink/10 pt-16">
                    {targets.map((item, index) => (
                        <div key={item.id} className="group relative">
                            <Reveal delay={index * 150}>
                                <div className="relative pl-6 border-l border-gold/30 hover:border-gold transition-colors duration-500">
                                    <span className="absolute -top-10 left-0 font-display text-6xl text-gray-200 group-hover:text-gold/20 transition-colors duration-500 select-none">
                                        {item.id}
                                    </span>

                                    <h3 className="text-2xl font-serif font-bold mb-4 pt-2 group-hover:text-gold transition-colors duration-300">
                                        {item.jpTitle}
                                    </h3>

                                    <p className="text-[10px] font-sans tracking-[0.2em] text-gray-400 uppercase mb-6">
                                        {item.title}
                                    </p>

                                    <p className="font-sans text-sm leading-8 text-gray-600 text-justify">
                                        {item.description}
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>

                {/* Policy / Message Section - Editorial Style */}
                <Reveal width="100%" threshold={0.2}>
                    <div className="relative bg-white p-10 md:p-24 shadow-sm border border-ink/5">
                        {/* Minimalist Decorative Lines */}
                        <div className="absolute top-0 left-0 w-20 h-[1px] bg-gold"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-20 bg-gold"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-[1px] bg-gold"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-20 bg-gold"></div>

                        <div className="max-w-3xl mx-auto text-center">
                            <span className="inline-block py-1 px-4 border border-ink/10 rounded-full text-xs font-sans tracking-widest text-gray-500 mb-12 uppercase">
                                Message from Instructor
                            </span>

                            <h3 className="text-2xl md:text-3xl font-serif leading-relaxed mb-12 text-ink">
                                全ての受講生に対して<br />
                                不得意な分野を<span className="relative inline-block px-2 z-10">個別に対応<span className="absolute bottom-2 left-0 w-full h-2 bg-gold/20 -z-10"></span></span>します。
                            </h3>

                            <div className="space-y-8 font-sans text-gray-600 leading-8 tracking-wide mb-16 text-sm md:text-base">
                                <p>
                                    大西化学ではどのような問題が出題されようが、十分に対応できる基礎力の養成は当然として、
                                    問題の背景まで高校化学の領域を逸脱することなくお教えします。
                                </p>
                                <p>
                                    そのレベルまで私と一緒に頑張りましょう。
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <p className="font-display text-4xl md:text-5xl text-ink">
                                    "百聞は一見にしかず"
                                </p>
                                <p className="font-serif text-lg text-gray-700">
                                    やる気のある皆さんの連絡をお待ちしています。
                                </p>
                            </div>

                            <div className="mt-16">
                                <a href="#contact" className="relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-white bg-ink transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gold group">
                                    {/* Text Container for Rolling Effect */}
                                    <div className="relative flex items-center gap-3 overflow-hidden">
                                        <span className="relative flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]">
                                            <span className="tracking-[0.2em] font-sans text-sm font-medium">お問い合わせフォーム</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                        <span className="absolute top-0 left-0 flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[150%] group-hover:translate-y-0">
                                            <span className="tracking-[0.2em] font-sans text-sm font-medium">お問い合わせフォーム</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>

                                    {/* Subtle border for definition */}
                                    <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 transition-colors duration-300 pointer-events-none"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};
