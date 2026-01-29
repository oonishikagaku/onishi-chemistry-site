import React from 'react';
import { Reveal } from './ui/Reveal';

export const Voice: React.FC = () => {
    const testimonials = [
        {
            id: '01',
            university: "The University of Tokyo",
            jpUni: "東京大学",
            status: "合格",
            highlight: "校内一位・学年一位",
            quote: "大西先生のとてもわかりやすい説明で化学への理解が深まり、高3の夏の模試で化学で<span class='text-gold'>校内一位</span>、秋の模試で<span class='text-gold'>総合学年一年</span>をとれました。",
            isFeature: true
        },
        {
            id: '06',
            university: "The University of Tokyo",
            jpUni: "東京大学",
            status: "合格",
            highlight: "化学が一番の支え",
            quote: "大西先生の授業がなかったら、東大合格は絶対にありませんでした。化学を根本から分かる形に組み直してくださって、何度も折れかけた時に「やれば伸びる」を実感できました。本番でも化学が一番の支えになり、合格につながりました。本当にありがとうございました。",
            isFeature: false
        },
        {
            id: '07',
            university: "The University of Tokyo",
            jpUni: "東京大学",
            status: "合格",
            highlight: "努力が点数に変わる",
            quote: "化学で迷っていた自分を、ここまで引き上げてくださったのが大西先生でした。授業のたびに理解の穴が埋まり、努力が点数に変わる感覚を初めて掴めました。東大合格は先生の指導があったからこそです。心から感謝しています。",
            isFeature: false
        },
        {
            id: '08',
            university: "The University of Tokyo",
            jpUni: "東京大学",
            status: "合格",
            highlight: "合格の決め手",
            quote: "大西先生の授業を受けて、化学が得点源になりました。どんな問題でも「何を根拠にどう進めるか」を教えていただいたことで、本番でも落ち着いて解けました。合格の決め手をくださった先生です。本当にありがとうございました。",
            isFeature: false
        },
        {
            id: '09',
            university: "The University of Tokyo",
            jpUni: "東京大学",
            status: "合格",
            highlight: "不安から武器へ",
            quote: "大西先生のおかげで、化学が「不安」から「武器」に変わりました。授業の一つひとつが本番に直結しており、最後は化学で合格点を押し上げることができました。先生の授業に出会えて本当によかったです。ありがとうございました。",
            isFeature: false
        },
        {
            id: '10',
            university: "The University of Tokyo",
            jpUni: "東京大学",
            status: "合格",
            highlight: "入試本番で高得点",
            quote: "化学が苦手で模試でも足を引っ張っていた私を、ここまで引き上げてくださったのが大西先生でした。授業で一つひとつ丁寧に原理を教えていただき、演習を重ねるうちに自信がついてきました。東大入試本番では化学で高得点が取れ、合格の決め手となりました。心から感謝しています。",
            isFeature: false
        },
        {
            id: '11',
            university: "The University of Tokyo",
            jpUni: "東京大学",
            status: "合格",
            highlight: "A判定で合格",
            quote: "浪人が決まって絶望していた私を救ってくれたのが、大西先生の授業でした。「基礎から全部やり直そう」という先生の言葉を信じてついていったら、半年で化学が得意科目に変わりました。東大模試でA判定が出た時は涙が出ました。本番も自信を持って臨め、合格できました。先生、本当にありがとうございました。",
            isFeature: false
        },
        {
            id: '02',
            university: "Kyoto University",
            jpUni: "京都大学",
            status: "合格",
            highlight: "化学の本質",
            quote: "大西先生の授業は、難関大学の入試に突破することに特化しており、暗記に頼ることなく<span class='text-gold'>化学の根本</span>から理解することができました。",
            isFeature: false
        },
        {
            id: '03',
            university: "Kyoto University",
            jpUni: "京都大学",
            status: "合格",
            highlight: "ライバルに大差",
            quote: "京大の化学入試を知り尽くした大西先生の的を得た説明は非常にわかりやすく、共通テストと二次試験の両方で化学で<span class='text-gold'>ライバルたちと大きく差をつける</span>ことができました。",
            isFeature: false
        },
        {
            id: '04',
            university: "Kyoto University",
            jpUni: "京都大学",
            status: "合格",
            highlight: "解ける問題が激増",
            quote: "大西先生の授業を信じて基本の勉強を徹底することで<span class='text-gold'>解ける問題が大幅に増えました</span>。",
            isFeature: false
        },
        {
            id: '05',
            university: "Kyoto University",
            jpUni: "京都大学",
            status: "合格",
            highlight: "基礎からの理解",
            quote: "大西先生の化学の授業のおかげで、化学の基礎となる考え方を深く理解でき、合格につなげることができました。",
            isFeature: false
        }
    ];

    return (
        <section id="voice" className="relative bg-ink text-paper py-20 md:py-48 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-[-10%] right-[-20%] md:top-[-20%] md:right-[-10%] w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-gold/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-20%] md:left-[-10%] w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-32 border-b border-white/10 pb-8">
                    <Reveal>
                        <div>
                            <span className="block text-gold text-[10px] md:text-xs tracking-[0.4em] mb-3 md:mb-4 font-sans">PROVEN RESULTS</span>
                            <h2 className="text-3xl md:text-6xl font-serif font-bold">合格者の声</h2>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="mt-4 md:mt-0 font-display text-white/40 text-xs md:text-sm tracking-widest text-left md:text-right">
                            VOICES OF SUCCESS <br />
                            REAL STORIES
                        </p>
                    </Reveal>
                </div>

                <div className="flex flex-col gap-6 md:gap-12">

                    {/* Feature Card (Tokyo U) */}
                    <Reveal width="100%">
                        <div className="group relative w-full bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-700 hover:border-gold/50 hover:bg-white/[0.05]">

                            {/* Golden Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                            <div className="relative p-6 md:p-16 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                                {/* Left: Identity */}
                                <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-12">
                                    <span className="inline-block px-3 py-1 border border-gold text-gold text-[10px] md:text-xs tracking-widest mb-4 md:mb-6">TOP TIER</span>
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">Tokyo</h3>
                                    <p className="text-xs md:text-sm font-sans tracking-widest text-gray-400">東京大学 <span className="text-white ml-2">合格</span></p>

                                    <div className="mt-6 md:mt-8 flex items-center gap-4">
                                        <div className="w-8 md:w-12 h-[1px] bg-gold"></div>
                                        <span className="text-gold text-[10px] md:text-xs tracking-widest uppercase">Rank #1 Achievement</span>
                                    </div>
                                </div>

                                {/* Right: Quote */}
                                <div className="w-full md:w-2/3 md:pl-8 relative">
                                    <span className="text-4xl md:text-6xl text-white/10 font-serif leading-none absolute -top-2 -left-2 md:top-8 md:right-8">“</span>
                                    <p
                                        className="relative z-10 font-serif text-base md:text-2xl leading-loose text-gray-200"
                                        dangerouslySetInnerHTML={{ __html: testimonials[0].quote }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Grid for Kyoto U */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {testimonials.slice(1).map((item, index) => (
                            <Reveal key={item.id} width="100%" delay={index * 100}>
                                <div className="group relative h-full bg-charcoal/40 border border-white/5 p-6 md:p-12 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2">
                                    {/* Background Watermark */}
                                    <span className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-[2.5rem] md:text-[4rem] font-display text-white/[0.02] font-bold leading-none pointer-events-none group-hover:text-gold/[0.05] transition-colors duration-500">
                                        {item.university.includes("Tokyo") ? "TOKYO" : "KYOTO"}
                                    </span>

                                    <div className="flex justify-between items-start mb-6 md:mb-8">
                                        <div>
                                            <h4 className="text-xl md:text-2xl font-display text-white mb-1 group-hover:text-gold transition-colors duration-300">
                                                {item.university}
                                            </h4>
                                            <div className="flex items-center gap-2 md:gap-3">
                                                <span className="text-[10px] md:text-xs font-sans text-gray-500 tracking-widest">{item.jpUni}</span>
                                                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                                <span className="text-[10px] md:text-xs font-sans text-gold tracking-widest">{item.status}</span>
                                            </div>
                                        </div>
                                        <span className="font-display text-white/20 text-lg md:text-xl group-hover:text-gold/50 transition-colors">0{index + 2}</span>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-2 md:-left-4 top-0 w-[2px] h-full bg-gold/20 group-hover:bg-gold transition-colors duration-500"></div>
                                        <p
                                            className="font-serif text-sm md:text-base leading-7 md:leading-8 text-gray-400 group-hover:text-gray-200 transition-colors duration-300 pl-4 md:pl-6 text-justify"
                                            dangerouslySetInnerHTML={{ __html: item.quote }}
                                        />
                                    </div>

                                    {/* Highlight Badge */}
                                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 flex justify-end">
                                        <span className="text-[9px] md:text-[10px] font-sans tracking-widest text-white/30 uppercase group-hover:text-gold/70 transition-colors">
                                            Highlight: {item.highlight}
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};