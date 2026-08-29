import React from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const questions = [
  {
    question: 'どのような生徒が対象ですか？',
    answer:
      '東大・京大などの難関国公立大学、国公立・私立医学部を目指す高校生・浪人生、高校2年生を主な対象としています。現在の成績だけで区切らず、化学を本気で伸ばしたい方を指導します。',
  },
  {
    question: '授業はどのように行いますか？',
    answer:
      'Zoomを使った双方向のオンライン授業です。週1回、1回90〜100分を基本に、生徒の理解度や反応を確認しながら進め、授業後には質問対応の時間も設けます。',
  },
  {
    question: 'どのような講座がありますか？',
    answer:
      '「難関国公立の化学」「国公立医学部の化学」「私立医学部の化学」「難関大合格のための高2化学」の4講座を設置しています。志望校と学年に応じてお選びいただけます。',
  },
  {
    question: '暗記が苦手でも受講できますか？',
    answer:
      '受講できます。知識の丸暗記ではなく、化学現象の理由や問題の背景を高校化学の範囲で理解し、初見の問題にも対応できる基礎力を養います。',
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="relative bg-ink py-24 text-paper md:py-36" aria-labelledby="faq-heading">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <div>
              <span className="mb-4 block font-sans text-xs uppercase tracking-[0.35em] text-gold">
                Frequently Asked Questions
              </span>
              <h2 id="faq-heading" className="font-serif text-4xl font-bold leading-tight md:text-6xl">
                よくある質問
              </h2>
              <p className="mt-8 max-w-md font-sans text-sm leading-8 text-gray-400">
                授業の対象や進め方について、よくいただくご質問をまとめました。
                そのほかのご相談はお問い合わせフォームからお気軽にご連絡ください。
              </p>
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {questions.map((item, index) => (
              <Reveal key={item.question} width="100%" delay={index * 80}>
                <details className="group border-b border-white/10 py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 font-serif text-lg font-medium text-white marker:content-none md:text-xl">
                    <span className="flex items-baseline gap-4">
                      <span className="font-display text-xs text-gold">0{index + 1}</span>
                      {item.question}
                    </span>
                    <Plus className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="pb-8 pl-9 pr-10 font-sans text-sm leading-8 text-gray-400 md:text-base">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
