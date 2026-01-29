import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

type AuthMode = 'login' | 'signup' | 'verify';

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState(false);
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        onLogin();
    }, 1500);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call -> Move to verify
    setTimeout(() => {
        setLoading(false);
        setMode('verify'); 
    }, 1500);
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call -> Finalize login
    setTimeout(() => {
        setLoading(false);
        onLogin();
    }, 1500);
  };

  // Reusable Input Component for consistency
  const InputField = ({ 
    id, 
    type, 
    value, 
    onChange, 
    label, 
    placeholder,
    autoFocus = false
  }: { 
    id: string; 
    type: string; 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    label: string; 
    placeholder: string;
    autoFocus?: boolean;
  }) => (
     <div className="group relative">
        <input 
           type={type} 
           required 
           autoFocus={autoFocus}
           className="peer w-full bg-transparent border-b border-white/10 py-3 text-white font-serif placeholder-transparent focus:outline-none focus:border-gold/80 transition-all duration-700"
           placeholder={placeholder}
           value={value}
           onChange={onChange}
           id={id}
        />
        <label 
           htmlFor={id} 
           className="absolute left-0 -top-3.5 text-[10px] text-gold transition-all duration-500 pointer-events-none 
                      peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-widest
                      peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-gold peer-focus:tracking-[0.2em]
                      peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gold peer-[:not(:placeholder-shown)]:tracking-[0.2em]"
        >
           {label}
        </label>
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-700 peer-focus:w-full"></div>
     </div>
  );

  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen grayscale contrast-125"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/60"></div>
          
          {/* Subtle Golden Spotlights */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
         
         {/* Vertical Title Line - Dynamic based on mode */}
         <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 text-white/20">
             <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
             <span className="vertical-text text-xs tracking-[1em] font-display transition-all duration-500">
                 {mode === 'login' ? 'MEMBERS ONLY' : mode === 'signup' ? 'NEW APPLICATION' : 'SECURITY CHECK'}
             </span>
             <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
         </div>

         <Reveal width="100%" duration={1000}>
            <div className="relative w-full max-w-md mx-auto">
               
               {/* The Monolith Card */}
               <div className="relative bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl min-h-[600px] flex flex-col justify-center transition-all duration-500">
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Header - Changes based on mode */}
                  <div className="text-center mb-12 relative">
                      <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-4 font-sans">Masahiro Onishi Chemistry</p>
                      <h1 className="text-4xl font-display font-medium text-white tracking-widest relative inline-block transition-all duration-500">
                         {mode === 'login' && 'ENTRANCE'}
                         {mode === 'signup' && 'APPLICATION'}
                         {mode === 'verify' && 'VERIFICATION'}
                         <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-gold"></span>
                      </h1>
                  </div>

                  {/* LOGIN FORM */}
                  {mode === 'login' && (
                      <form onSubmit={handleLoginSubmit} className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
                         <InputField id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="IDENTITY / EMAIL" placeholder="Email" autoFocus />
                         <InputField id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="PASSCODE" placeholder="Password" />

                         <div className="pt-8">
                            <button type="submit" disabled={loading} className="w-full group relative h-14 flex items-center justify-center overflow-hidden border border-white/20 hover:border-gold/50 transition-colors duration-500 bg-transparent">
                               <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                               
                               <div className="relative z-10 flex items-center gap-4">
                                   {loading ? (
                                       <div className="flex items-center gap-3">
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce"></span>
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce delay-75"></span>
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce delay-150"></span>
                                       </div>
                                   ) : (
                                       <>
                                           <span className="font-display text-sm tracking-[0.3em] text-white group-hover:text-ink transition-colors duration-500 uppercase">Authenticate</span>
                                           <ArrowRight className="w-4 h-4 text-white group-hover:text-ink transition-colors duration-500" />
                                       </>
                                   )}
                               </div>
                            </button>
                         </div>
                         <div className="text-center space-y-4">
                            <button type="button" onClick={() => setMode('signup')} className="text-[10px] text-gray-400 hover:text-gold transition-colors tracking-widest uppercase font-sans border-b border-transparent hover:border-gold/20 pb-1">
                                No Membership? Apply Here
                            </button>
                         </div>
                      </form>
                  )}

                  {/* SIGNUP FORM */}
                  {mode === 'signup' && (
                      <form onSubmit={handleSignupSubmit} className="space-y-10 animate-[fadeIn_0.5s_ease-out]">
                         <InputField id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} label="FULL NAME" placeholder="Name" autoFocus />
                         <InputField id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="IDENTITY / EMAIL" placeholder="Email" />
                         <InputField id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="SET PASSCODE" placeholder="Password" />

                         <div className="pt-4">
                            <button type="submit" disabled={loading} className="w-full group relative h-14 flex items-center justify-center overflow-hidden border border-white/20 hover:border-gold/50 transition-colors duration-500 bg-transparent">
                               <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                               <div className="relative z-10 flex items-center gap-4">
                                   {loading ? (
                                       <div className="flex items-center gap-3">
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce"></span>
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce delay-75"></span>
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce delay-150"></span>
                                       </div>
                                   ) : (
                                       <>
                                           <span className="font-display text-sm tracking-[0.3em] text-white group-hover:text-ink transition-colors duration-500 uppercase">Submit Application</span>
                                           <ArrowRight className="w-4 h-4 text-white group-hover:text-ink transition-colors duration-500" />
                                       </>
                                   )}
                               </div>
                            </button>
                         </div>
                         <div className="text-center">
                            <button type="button" onClick={() => setMode('login')} className="flex items-center justify-center gap-2 text-[10px] text-gray-500 hover:text-white transition-colors tracking-widest uppercase font-sans mx-auto">
                                <ArrowLeft className="w-3 h-3" /> Back to Entrance
                            </button>
                         </div>
                      </form>
                  )}

                  {/* VERIFY FORM */}
                  {mode === 'verify' && (
                      <form onSubmit={handleVerifySubmit} className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
                         <div className="text-center mb-8">
                             <p className="text-xs text-gray-400 font-sans tracking-wide leading-relaxed">
                                 Please enter the verification code sent to <br/><span className="text-gold">{email || 'your email'}</span>
                             </p>
                         </div>
                         
                         <div className="group relative">
                            <input 
                               type="text" 
                               required 
                               autoFocus
                               className="peer w-full bg-transparent border-b border-white/10 py-3 text-white font-display text-3xl tracking-[1em] text-center placeholder-transparent focus:outline-none focus:border-gold/80 transition-all duration-700"
                               placeholder="Code"
                               value={code}
                               onChange={(e) => setCode(e.target.value)}
                               maxLength={6}
                               id="code"
                            />
                            <label 
                               htmlFor="code" 
                               className="absolute left-1/2 -translate-x-1/2 -top-4 text-[10px] text-gold tracking-widest uppercase pointer-events-none"
                            >
                                Security Code
                            </label>
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-700 peer-focus:w-full"></div>
                         </div>

                         <div className="pt-8">
                            <button type="submit" disabled={loading} className="w-full group relative h-14 flex items-center justify-center overflow-hidden border border-white/20 hover:border-gold/50 transition-colors duration-500 bg-transparent">
                               <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                               <div className="relative z-10 flex items-center gap-4">
                                   {loading ? (
                                       <div className="flex items-center gap-3">
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce"></span>
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce delay-75"></span>
                                            <span className="block w-1 h-1 bg-white rounded-full animate-bounce delay-150"></span>
                                       </div>
                                   ) : (
                                       <>
                                           <span className="font-display text-sm tracking-[0.3em] text-white group-hover:text-ink transition-colors duration-500 uppercase">Confirm Access</span>
                                           <ArrowRight className="w-4 h-4 text-white group-hover:text-ink transition-colors duration-500" />
                                       </>
                                   )}
                               </div>
                            </button>
                         </div>
                         <div className="text-center">
                            <button type="button" onClick={() => setMode('login')} className="text-[10px] text-gray-600 hover:text-white transition-colors tracking-widest uppercase font-sans">
                                Cancel Verification
                            </button>
                         </div>
                      </form>
                  )}

               </div>
               
               {/* Bottom Reflection/Shadow */}
               <div className="absolute -bottom-8 left-4 right-4 h-16 bg-gold/10 blur-2xl opacity-20 pointer-events-none"></div>

            </div>
         </Reveal>
      </div>
    </section>
  );
};