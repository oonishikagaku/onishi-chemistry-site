import React, { useState, useRef } from 'react';
import { Reveal } from './ui/Reveal';
import { Send, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  // EmailJS logic
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Hardcoded for immediate functionality
    const serviceId = 'service_7lr3iaa';
    const templateId = 'template_n4vs0rn';
    const publicKey = 'MZSVa-F8U8JwwZDic';

    if (form.current) {
      const formData = new FormData(form.current);
      const userPhone = String(formData.get('user_phone') ?? '').trim();
      const message = String(formData.get('message') ?? '').trim();

      emailjs.send(
        serviceId,
        templateId,
        {
          user_name: String(formData.get('user_name') ?? '').trim(),
          user_email: String(formData.get('user_email') ?? '').trim(),
          user_phone: userPhone,
          subject: String(formData.get('subject') ?? '').trim(),
          // Include the phone number in the existing message variable as well,
          // so it reaches the email even before the EmailJS template is updated.
          message: `【電話番号】${userPhone}\n\n【お問い合わせ内容】\n${message}`,
        },
        publicKey,
      )
        .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          if (form.current) form.current.reset();
        }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        });
    }
  };

  // Elegant input styles: Removal of standard borders, using only bottom border with animated overlay
  const groupClasses = "relative group";
  const inputClasses = "w-full bg-transparent border-b border-ink/10 py-3 md:py-4 text-base md:text-lg text-ink font-serif focus:outline-none transition-all duration-700 placeholder-transparent peer z-10 relative";
  // Floating label with precise positioning logic
  const labelClasses = "absolute left-0 top-3 md:top-4 text-gray-400 text-[10px] md:text-sm font-sans tracking-[0.2em] uppercase transition-all duration-500 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs md:peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-gold pointer-events-none";

  // Custom Focus Line Animation
  const focusLine = (
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left z-20"></div>
  );

  return (
    <section id="contact" className="py-12 md:py-20 bg-[#f2f2eb] relative overflow-hidden">
      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply"></div>

      {/* Giant Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 md:left-auto md:right-[-10%] md:translate-x-0 text-[20vw] font-display text-ink opacity-[0.02] pointer-events-none select-none leading-none">
        CONTACT
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

        <div className="text-center mb-8 md:mb-12 w-full max-w-4xl">
          <Reveal width="100%">
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <span className="h-[24px] w-[1px] bg-gold block mb-2"></span>
              <span className="text-gold font-display text-[10px] md:text-xs tracking-[0.4em] uppercase">Inquiry</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-ink leading-tight">
                お問い合わせは<br className="md:hidden" />こちらへ
              </h2>
              <p className="mt-3 md:mt-4 text-gray-500 font-sans text-[10px] md:text-sm tracking-widest leading-loose">
                受験相談・入塾に関するお問い合わせ
              </p>
            </div>
          </Reveal>
        </div>

        <div className="w-full max-w-2xl bg-white/0 md:bg-white/40 md:backdrop-blur-sm md:p-10 rounded-sm">
          <Reveal width="100%" delay={200}>
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-700">
                <div className="w-16 h-16 mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-serif text-ink mb-4">お問い合わせありがとうございます</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed max-w-md">
                  内容を確認次第、<span className="font-medium text-ink">hmasa@nava21.ne.jp</span> より<br className="hidden md:block" />
                  ご返信させていただきます。<br />
                  今しばらくお待ちいただけますと幸いです。
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-10 text-xs font-sans tracking-widest text-gold hover:text-ink transition-colors underline underline-offset-4"
                >
                  もう一度送信する
                </button>
              </div>
            ) : (
              <form ref={form} className="space-y-6 md:space-y-10" onSubmit={sendEmail}>

                {/* Name Input */}
                <div className={groupClasses}>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className={inputClasses}
                    placeholder="Name"
                    required
                  />
                  <label htmlFor="name" className={labelClasses}>Your Name</label>
                  {focusLine}
                </div>

                {/* Email Input */}
                <div className={groupClasses}>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className={inputClasses}
                    placeholder="Email"
                    required
                  />
                  <label htmlFor="email" className={labelClasses}>Email Address</label>
                  {focusLine}
                </div>

                {/* Phone Input */}
                <div className={groupClasses}>
                  <input
                    type="tel"
                    name="user_phone"
                    id="phone"
                    className={inputClasses}
                    placeholder="Phone"
                    autoComplete="tel"
                    inputMode="tel"
                    minLength={10}
                    maxLength={20}
                    required
                  />
                  <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                  {focusLine}
                </div>

                {/* Subject Select */}
                <div className={groupClasses}>
                  <select
                    name="subject"
                    id="subject"
                    className={`${inputClasses} appearance-none rounded-none cursor-pointer`}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled hidden className="text-gray-400"></option>
                    <option value="entry">受講を希望する</option>
                    <option value="consultation">学習について相談したい</option>
                    <option value="other">その他のお問い合わせ</option>
                  </select>
                  <label htmlFor="subject" className={`${labelClasses} peer-[:not([value=""])]:-top-4 peer-[:not([value=""])]:text-[9px] peer-[:not([value=""])]:text-gold`}>
                    Inquiry Type
                  </label>
                  {focusLine}
                  {/* Custom Chevron */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 group-focus-within:text-gold group-focus-within:opacity-100 transition-all duration-500">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className={groupClasses}>
                  <textarea
                    name="message"
                    id="message"
                    rows={1}
                    className={`${inputClasses} resize-none min-h-[32px] md:min-h-[48px] leading-relaxed`}
                    placeholder="Message"
                    required
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = target.scrollHeight + "px";
                    }}
                  ></textarea>
                  <label htmlFor="message" className={labelClasses}>Message</label>
                  {focusLine}
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="text-center text-red-500 font-sans text-xs tracking-wide">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </div>
                )}

                {/* Premium Submit Button */}
                <div className="flex justify-center pt-6 md:pt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center min-w-[200px] h-[44px] md:h-[52px] overflow-hidden rounded-full transition-all duration-700 hover:w-[240px] disabled:opacity-70 disabled:hover:w-[200px]"
                  >
                    {/* Default Border & Bg */}
                    <div className="absolute inset-0 border border-ink/20 group-hover:border-ink/0 transition-colors duration-500"></div>

                    {/* Liquid Fill Effect */}
                    <div className={`absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${isSubmitting ? 'translate-y-0' : ''}`}></div>

                    {/* Text Content */}
                    <div className="relative z-10 flex items-center gap-4 px-8">
                      {isSubmitting ? (
                        <span className="font-display tracking-[0.3em] text-[10px] md:text-xs uppercase text-white transition-colors duration-500 flex items-center gap-2">
                          Sending... <Loader2 className="w-3 h-3 animate-spin" />
                        </span>
                      ) : (
                        <>
                          <span className="font-display tracking-[0.3em] text-[10px] md:text-xs uppercase text-ink group-hover:text-white transition-colors duration-500">
                            Send Message
                          </span>
                          <Send size={12} className="text-ink group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                        </>
                      )}
                    </div>
                  </button>
                </div>

                <p className="text-center text-[9px] md:text-[10px] text-gray-400 font-sans tracking-wider pt-3 md:pt-6 opacity-60">
                  We will reply within 24 hours.
                </p>

              </form>
            )}

          </Reveal>
        </div>
      </div>
    </section>
  );
};
