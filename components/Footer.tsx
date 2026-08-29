import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl serif font-bold mb-6 tracking-widest">大西正浩Web化学</h2>
        <nav aria-label="フッターメニュー" className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm text-gray-400">
          <a href="#hero" className="hover:text-white transition-colors">トップ</a>
          <a href="#profile" className="hover:text-white transition-colors">講師紹介</a>
          <a href="#system" className="hover:text-white transition-colors">授業形態</a>
          <a href="#format" className="hover:text-white transition-colors">設置講座</a>
          <a href="#voice" className="hover:text-white transition-colors">合格者の声</a>
          <a href="#faq" className="hover:text-white transition-colors">よくある質問</a>
          <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
        </nav>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Masahiro Onishi. All Rights Reserved.
        </p>
        <p className="text-[11px] text-gray-400 mt-2">
          Site by Taro Masago
        </p>
      </div>
    </footer>
  );
};
