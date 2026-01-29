import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CourseFormat: React.FC = () => {
    const [activeCourse, setActiveCourse] = useState(0);

    const courses = [
        {
            id: "I",
            title: "難関国公立の化学",
            sub: "強固な盤石を築く",
            tag: "Standard",
            description: "旧帝大・早慶レベルで求められる標準～応用問題を確実に正答する力を養成します。問題は標準的であるだけに、ミスが大きく合否を左右します。合否を分ける一問を取りこぼさない、堅実かつ実践的な解法を伝授します。",
            targets: ["東京大学", "京都大学", "大阪大学", "東北大学", "名古屋大学", "九州大学", "北海道大学", "早慶", "難関国公立"]
        },
        {
            id: "II",
            title: "国公立医学部の化学",
            sub: "一点を削り出す",
            tag: "Medical",
            description: "医学部入試特有の高得点勝負を制するための講座です。高得点を取るためには、化学の本質的な理解が欠かせません。計算スピード、正確性、そして記述答案の作成能力を極限まで高めます。",
            targets: ["国公立医学部", "単科医科大"]
        },
        {
            id: "III",
            title: "私立医学部の化学",
            sub: "最短距離の戦略",
            tag: "Medical",
            description: "私立医学部は大学ごとに独自の「クセ」が強いため、まずは盤石な基礎力を養成します。その上で、志望校の傾向に合わせた実践的な演習を行い、合格に必要な対応力を磨きます。",
            targets: ["私立医学部", "慶應義塾大学", "東京慈恵会医科大学", "日本医科大学"]
        },
        {
            id: "IV",
            title: "難関大合格のための高２化学",
            sub: "一年後を見据えた飛躍",
            tag: "Pre-Exam",
            description: "十分な時間があるので、知識を理解に変えましょう。3年になると人に教えられる力がつくでしょう。",
            targets: ["高校2年生", "先取り学習"]
        },
    ];

    return (
        <section id="format" className="relative h-screen min-h-[700px] w-full bg-[#f2f2eb] text-ink overflow-hidden flex flex-col justify-center py-12 md:py-0">

            {/* Background Ambience */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center relative z-10">

                <div className="flex flex-col md:flex-row gap-0 md:gap-16 h-full md:h-[80vh] items-stretch">

                    {/* LEFT COLUMN: Navigation List */}
                    <div className="w-full md:w-5/12 flex flex-col justify-center border-r-0 md:border-r border-ink/10 pr-0 md:pr-12 relative">

                        <Reveal>
                            <div className="mb-8 md:mb-12">
                                <span className="text-gold font-display text-sm tracking-[0.3em] uppercase block mb-2">Curriculum</span>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold">設置講座</h2>
                            </div>
                        </Reveal>

                        <div className="space-y-2">
                            {courses.map((course, idx) => (
                                <Reveal key={course.id} delay={idx * 100} width="100%" direction="left" threshold={0.05}>
                                    <div
                                        onMouseEnter={() => setActiveCourse(idx)}
                                        onClick={() => setActiveCourse(idx)}
                                        className={`group cursor-pointer relative py-4 px-4 transition-all duration-500 ease-out border-l-2 ${activeCourse === idx
                                            ? 'border-gold bg-white shadow-lg translate-x-4'
                                            : 'border-transparent hover:bg-white/50 hover:pl-6'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center relative z-10">
                                            <div className="flex items-baseline gap-4">
                                                <span className={`font-display text-lg italic transition-colors duration-300 ${activeCourse === idx ? 'text-gold' : 'text-gray-400'}`}>
                                                    {course.id}.
                                                </span>
                                                <span className={`font-serif text-lg md:text-xl font-medium transition-colors duration-300 ${activeCourse === idx ? 'text-ink' : 'text-gray-500'}`}>
                                                    {course.title}
                                                </span>
                                            </div>
                                            <ArrowUpRight
                                                size={16}
                                                className={`text-gold transition-all duration-500 ${activeCourse === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                                                    }`}
                                            />
                                        </div>

                                        {/* Mobile Accordion Content */}
                                        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeCourse === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                            <div className="bg-gold/5 p-4 border-l-2 border-gold/30">
                                                <p className="text-xs font-display text-gold mb-2">{course.tag}</p>
                                                <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
                                                    {course.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {course.targets.map((t, i) => (
                                                        <span key={i} className="text-[10px] bg-white px-2 py-1 text-gray-500 border border-ink/5">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Detail Content (Master-Detail View) */}
                    <div className="hidden md:flex w-full md:w-7/12 flex-col justify-center relative pl-0 md:pl-12 overflow-hidden">

                        {/* Large Watermark Number */}
                        <div
                            key={`bg-${activeCourse}`}
                            className="absolute top-[10%] right-[-5%] text-[25rem] leading-none font-display text-white mix-blend-multiply pointer-events-none select-none animate-[fadeIn_1s_ease-out]"
                            style={{ textShadow: '0 0 80px rgba(0,0,0,0.05)' }}
                        >
                            {courses[activeCourse].id}
                        </div>

                        <div key={activeCourse} className="relative z-10">

                            <div className="animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0" style={{ animationDelay: '0ms' }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 border border-gold text-gold text-xs tracking-[0.2em] uppercase bg-gold/5">
                                        {courses[activeCourse].tag}
                                    </span>
                                    <div className="h-[1px] w-20 bg-gold/30"></div>
                                </div>
                            </div>

                            <h3 className="text-5xl lg:text-6xl font-serif font-bold text-ink mb-4 leading-tight animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0" style={{ animationDelay: '100ms' }}>
                                {courses[activeCourse].title}
                            </h3>

                            <p className="font-display text-2xl text-gold italic mb-10 pl-1 animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0" style={{ animationDelay: '200ms' }}>
                                - {courses[activeCourse].sub}
                            </p>

                            <div className="relative pl-8 border-l border-ink/10 mb-12 animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0" style={{ animationDelay: '300ms' }}>
                                <p className="font-sans text-base leading-8 text-gray-600 text-justify">
                                    {courses[activeCourse].description}
                                </p>
                            </div>

                            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-sm border border-white shadow-sm animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0" style={{ animationDelay: '400ms' }}>
                                <p className="text-[10px] font-sans tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center gap-2">
                                    Recommended for <div className="h-[1px] flex-1 bg-gray-200"></div>
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {courses[activeCourse].targets.map((target, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-ink font-serif text-sm bg-paper px-4 py-2 border border-ink/5">
                                            <CheckCircle2 size={14} className="text-gold" />
                                            <span>{target}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    );
};