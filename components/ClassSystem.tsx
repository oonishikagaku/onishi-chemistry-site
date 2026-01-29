import React from 'react';
import { Reveal } from './ui/Reveal';
import { Monitor, Clock, MessageCircle, Calendar } from 'lucide-react';

export const ClassSystem: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: "Interactive Zoom Live",
      jpTitle: "双方向ZOOM講義",
      description: "従来の映像授業では力が付かないため、受講生徒に合わせたZOOM授業を行います。man-to-manで、生徒の反応を見極めながら進める「生きた授業」です。"
    },
    {
      icon: Clock,
      title: "90-100 Minutes",
      jpTitle: "90〜100分の本質講義",
      description: "化学の深淵を理解するために、時間は惜しみません。1回90〜100分という充実した時間枠で、基礎の徹底から難問の攻略まで妥協なく行います。"
    },
    {
      icon: MessageCircle,
      title: "Post-Class Support",
      jpTitle: "授業後の質問対応",
      description: "授業終了後、毎回質問対応時間を設けています。疑問点をその場で解消し、消化不良を防ぐことこそが成績向上の近道です。"
    },
    {
      icon: Calendar,
      title: "Weekly Schedule",
      jpTitle: "週1回の開講",
      description: "週1回を基本とした定期的な講義ペース。学習のリズムを整え、継続的なインプットとアウトプットのサイクルを確立します。"
    }
  ];

  return (
    <section id="system" className="relative py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

      {/* Golden Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Header Section */}
          <div className="lg:w-1/3 pt-8">
            <Reveal>
              <div className="sticky top-32">
                <span className="block text-gold text-xs tracking-[0.3em] uppercase mb-6 font-sans border-l-2 border-gold pl-4">
                  Class Format
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
                  <span className="block">妥協なき</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    授業形態
                  </span>
                </h2>
                <p className="text-white text-lg font-serif mb-8 border-l-2 border-white/20 pl-4 py-1">
                  man-to-manの授業で<br />疑問を残さない
                </p>
                <p className="text-gray-400 text-sm leading-8 font-sans text-justify mb-10">
                  映像を見るだけの受動的な学習から、<br />
                  思考し、対話し、理解する能動的な学習へ。<br />
                  難関大合格に必要な「真の学力」を養成するための<br />
                  最適な環境を用意しました。
                </p>

                <div className="hidden lg:block">
                  <div className="w-16 h-[1px] bg-gold/30 mb-8"></div>
                  <p className="font-display text-2xl text-white/10 italic">Premium Online <br />Tutoring</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Grid Section */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((item, idx) => (
                <Reveal key={idx} delay={idx * 150} width="100%">
                  <div className="group relative h-full bg-white/[0.03] border border-white/5 p-6 md:p-8 hover:bg-white/[0.06] hover:border-gold/30 transition-all duration-500 overflow-hidden">

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 bg-white/5 rounded-sm text-gold group-hover:bg-gold group-hover:text-ink transition-colors duration-300">
                          <item.icon size={20} strokeWidth={1.5} />
                        </div>
                        <span className="font-display text-3xl text-white/5 font-bold group-hover:text-gold/10 transition-colors">0{idx + 1}</span>
                      </div>

                      <h3 className="text-lg font-serif font-bold mb-1.5 text-white group-hover:text-gold transition-colors">
                        {item.jpTitle}
                      </h3>

                      <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-4 font-sans">
                        {item.title}
                      </p>

                      <p className="text-xs text-gray-400 leading-6 font-sans text-justify group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};