import React, { useState, useRef, useEffect } from 'react';
import { Reveal } from './ui/Reveal';
import { 
  FileText, 
  Clock, 
  LogOut, 
  Video, 
  Download, 
  Send, 
  Edit2, 
  Check,
  X
} from 'lucide-react';

interface AccountProps {
  onLogout: () => void;
}

interface Message {
  id: number;
  sender: 'user' | 'instructor';
  text: string;
  timestamp: string;
}

export const Account: React.FC<AccountProps> = ({ onLogout }) => {
  // --- State Management ---
  const [targetSchool, setTargetSchool] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('onishi_target_school') || "東京大学 理科三類";
    }
    return "東京大学 理科三類";
  });
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [tempTarget, setTempTarget] = useState(targetSchool);
  
  useEffect(() => {
    localStorage.setItem('onishi_target_school', targetSchool);
  }, [targetSchool]);
  
  const [chatOpen, setChatOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'instructor', text: '前回の模試の結果、化学の偏差値が大幅に向上していますね。この調子で「理論」の演習を強化しましょう。', timestamp: 'Yesterday 14:30' },
    { id: 2, sender: 'user', text: 'ありがとうございます。特に平衡の問題に手応えを感じています。次回は有機の構造決定を重点的に質問したいです。', timestamp: 'Yesterday 15:45' }
  ]);

  // Mock Data
  const nextClass = {
    title: "ハイレベル化学演習：有機構造決定の極意",
    date: "05.24 (Fri)",
    time: "20:00 -",
    zoomUrl: "https://zoom.us/j/mock_meeting_id",
    isLive: false // Set to true to show "LIVE NOW" status
  };

  const materials = [
    { id: 1, title: "第12講_テキスト解答・解説.pdf", size: "2.4MB", date: "2024.05.20" },
    { id: 2, title: "【補充資料】芳香族化合物の反応系統図.pdf", size: "1.8MB", date: "2024.05.18" },
    { id: 3, title: "第11講_復習用チェックテスト.pdf", size: "0.5MB", date: "2024.05.15" },
    { id: 4, title: "第11講_演習問題解答.pdf", size: "1.2MB", date: "2024.05.15" },
    { id: 5, title: "【重要】夏期講習会の案内.pdf", size: "0.8MB", date: "2024.05.10" }
  ];

  // --- Handlers ---
  const saveTarget = () => {
    if (tempTarget.trim()) {
        setTargetSchool(tempTarget);
    }
    setIsEditingTarget(false);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    const newMsg: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: messageInput,
      timestamp: 'Just now'
    };
    
    setMessages([...messages, newMsg]);
    setMessageInput("");
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, chatOpen]);


  return (
    <section className="min-h-screen bg-[#fcfcfc] text-ink py-32 relative">
      {/* Subtle Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header Area: Identity & Target --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-ink/5 pb-8">
            <Reveal>
                <div>
                    <span className="block text-gold text-xs tracking-[0.3em] uppercase mb-4 font-sans font-medium">Student Portal</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink">マイページ</h2>
                </div>
            </Reveal>
            
            <Reveal delay={200}>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-8 md:mt-0">
                    <div className="text-left md:text-right group relative">
                        <p className="text-2xl font-serif font-medium">田中 優 殿</p>
                        
                        {/* Target School Editor */}
                        <div className="mt-2 flex items-center justify-end gap-2">
                           {isEditingTarget ? (
                               <div className="flex items-center gap-2 animate-[fadeIn_0.3s_ease-out]">
                                   <input 
                                      type="text" 
                                      value={tempTarget}
                                      onChange={(e) => setTempTarget(e.target.value)}
                                      className="bg-transparent border-b border-gold text-right font-sans text-xs tracking-widest focus:outline-none w-48 py-1 text-ink"
                                      autoFocus
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter') saveTarget();
                                        if (e.key === 'Escape') setIsEditingTarget(false);
                                      }}
                                   />
                                   <button onClick={saveTarget} className="p-1 hover:text-gold transition-colors"><Check size={14} /></button>
                                   <button onClick={() => setIsEditingTarget(false)} className="p-1 hover:text-red-400 transition-colors"><X size={14} /></button>
                               </div>
                           ) : (
                               <div 
                                    className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity group/edit" 
                                    onClick={() => { setTempTarget(targetSchool); setIsEditingTarget(true); }}
                                    title="クリックして志望校を編集"
                                >
                                   <p className="text-xs text-gray-500 font-sans tracking-widest border-b border-transparent group-hover/edit:border-gray-300 pb-0.5 transition-all">
                                      志望校：<span className="text-ink font-medium ml-1">{targetSchool}</span>
                                   </p>
                                   <Edit2 size={12} className="text-gray-400 opacity-50 group-hover/edit:opacity-100 transition-opacity" />
                               </div>
                           )}
                        </div>
                    </div>
                    <div className="h-10 w-[1px] bg-ink/10 hidden md:block"></div>
                    <button 
                        onClick={onLogout}
                        className="group flex items-center gap-3 px-6 py-3 border border-ink/10 hover:bg-ink hover:text-white transition-all duration-300 text-xs font-sans tracking-widest uppercase bg-white/50 backdrop-blur-sm"
                    >
                        <LogOut size={14} className="group-hover:-translate-x-1 transition-transform" />
                        LOGOUT
                    </button>
                </div>
            </Reveal>
        </div>

        {/* --- Dashboard Grid --- */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left Column (Main Content) */}
            <div className="col-span-12 lg:col-span-8 space-y-12">
                
                {/* 1. NEXT CLASS (Zoom Integration) - Compact Version */}
                <Reveal width="100%">
                    <div className="relative bg-ink text-white p-6 shadow-xl group border-l-4 border-gold overflow-hidden">
                        {/* Subtle background accent */}
                        <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-[-20deg] translate-x-32 group-hover:translate-x-10 transition-transform duration-700 ease-out"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            
                            {/* Info Section */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${nextClass.isLive ? 'bg-red-500 animate-pulse' : 'bg-gold'}`}></div>
                                    <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans">
                                        {nextClass.isLive ? 'Live Now' : 'Next Session'}
                                    </span>
                                    <span className="text-gray-500 text-[10px] font-sans tracking-wider">|</span>
                                    <span className="text-gray-400 text-[10px] font-sans tracking-wider flex items-center gap-1">
                                        <Clock size={10} /> {nextClass.date} {nextClass.time}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-serif font-medium tracking-wide text-white group-hover:text-gold/90 transition-colors">
                                    {nextClass.title}
                                </h3>
                            </div>

                            {/* Action Section */}
                            <a 
                                href={nextClass.zoomUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="shrink-0 flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-gold hover:text-white border border-white/10 hover:border-gold transition-all duration-300 group/btn"
                            >
                                <span className="text-xs font-sans tracking-widest uppercase">Join Class</span>
                                <Video size={14} className="group-hover/btn:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* 2. LIBRARY (PDF Resources) */}
                <div>
                    <Reveal>
                        <h3 className="text-xl font-display italic text-gray-400 mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-gold"></span>
                            Lecture Materials
                        </h3>
                    </Reveal>
                    <div className="bg-white border border-ink/5 shadow-sm min-h-[300px]">
                        {materials.map((file, i) => (
                            <Reveal key={file.id} delay={i * 100} width="100%">
                                <div className="group flex items-center justify-between p-6 border-b border-gray-100 last:border-0 hover:bg-[#fafaf8] transition-colors cursor-pointer">
                                    <div className="flex items-center gap-6">
                                        <div className="w-8 h-8 bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-400 group-hover:text-gold group-hover:border-gold/30 transition-all">
                                            <FileText size={16} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-ink font-serif text-base group-hover:text-gold transition-colors duration-300">
                                                {file.title}
                                            </p>
                                            <p className="text-[10px] text-gray-400 font-sans tracking-wider mt-0.5">
                                                {file.date} <span className="mx-2">·</span> {file.size}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="text-gray-300 group-hover:text-ink hover:!text-gold transition-colors p-2">
                                        <Download size={16} />
                                    </button>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="col-span-12 lg:col-span-4 space-y-8 lg:mt-0">
                
                {/* 4. CHAT (Instructor Communication) */}
                <Reveal delay={100}>
                    <div className="bg-white border border-ink/5 shadow-lg relative overflow-hidden flex flex-col" style={{ height: '480px' }}>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
                        
                        {/* Header */}
                        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                            <div>
                                <h4 className="font-serif text-base text-ink font-bold">講師への連絡</h4>
                                <p className="text-[10px] text-gray-400 font-sans tracking-widest uppercase">Direct Line</p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                        </div>

                        {/* Messages Area */}
                        <div 
                           className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#fcfcfc]"
                           ref={scrollRef}
                        >
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div 
                                        className={`max-w-[90%] p-3 text-sm font-sans leading-relaxed shadow-sm relative
                                            ${msg.sender === 'user' 
                                                ? 'bg-ink text-white rounded-l-lg rounded-tr-lg' 
                                                : 'bg-white border border-ink/10 text-ink rounded-r-lg rounded-tl-lg'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                    <span className="text-[9px] text-gray-400 mt-1.5 px-1 tracking-wider">{msg.timestamp}</span>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={sendMessage} className="p-4 border-t border-gray-100 bg-white">
                            <div className="relative flex items-center">
                                <input 
                                    type="text" 
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="メッセージを入力..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-xs font-sans focus:outline-none focus:border-gold/50 focus:bg-white transition-all"
                                />
                                <button 
                                    type="submit"
                                    className="absolute right-1.5 p-1.5 bg-gold text-white rounded-full hover:bg-ink transition-colors duration-300 shadow-md"
                                >
                                    <Send size={12} />
                                </button>
                            </div>
                        </form>
                    </div>
                </Reveal>

                {/* Stats Widget */}
                <Reveal delay={300}>
                    <div className="bg-white border border-ink/5 p-8 shadow-sm relative group">
                        <div className="flex items-center justify-between mb-8">
                             <h4 className="font-sans text-xs tracking-[0.2em] text-gray-400 uppercase">Learning Stats</h4>
                             <Clock size={14} className="text-gold" />
                        </div>
                        <div className="space-y-6 relative z-10">
                            <div>
                                <div className="flex items-baseline gap-1 mb-2 text-ink">
                                    <span className="text-5xl font-display font-medium tracking-tight">128.5</span>
                                    <span className="text-sm text-gray-400 font-serif">hours</span>
                                </div>
                                <p className="text-xs text-gray-500 font-sans tracking-widest uppercase pl-1 border-l-2 border-gold/50">Total Learning Time</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Target Countdown */}
                <Reveal delay={400}>
                    <div className="bg-ink text-white p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>

                        <h5 className="font-serif text-lg mb-6 relative z-10">Target Exam</h5>
                        
                        <div className="space-y-2 relative z-10">
                            <p className="text-xl font-bold font-serif border-b border-white/20 pb-4 mb-4">第2回 全統記述模試</p>
                            <div className="flex items-end gap-2 mt-4">
                                <span className="text-4xl font-display text-gold">8.25</span>
                                <span className="text-sm text-white/40 mb-1 font-mono">2024</span>
                            </div>
                            <p className="text-xs text-right text-white/80 mt-2 bg-white/10 py-1 px-3 inline-block float-right rounded-full">
                                あと <span className="text-gold font-bold">94</span> 日
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

        </div>
      </div>
    </section>
  );
};