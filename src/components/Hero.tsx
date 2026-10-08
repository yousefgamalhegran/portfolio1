import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowRight, FolderKanban, CheckCircle2, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>('/yousef-gamal-hegran.svg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('yousef_profile_photo');
    if (saved) {
      setPhotoSrc(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          localStorage.setItem('yousef_profile_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Identity & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Professional Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Full Stack Web Development</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">PHP &amp; .NET</span>
            </div>

            {/* Developer Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.15]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 leading-snug">
              "{PERSONAL_INFO.headline}"
            </h2>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 text-xs font-mono-code font-medium bg-[#0F172A] border border-[#1E293B] text-blue-300 rounded-md">
                PHP / Laravel
              </span>
              <span className="px-3 py-1 text-xs font-mono-code font-medium bg-[#0F172A] border border-[#1E293B] text-indigo-300 rounded-md">
                C# / .NET / ASP.NET Core
              </span>
              <span className="px-3 py-1 text-xs font-mono-code font-medium bg-[#0F172A] border border-[#1E293B] text-emerald-300 rounded-md">
                MySQL &amp; SQL
              </span>
              <span className="px-3 py-1 text-xs font-mono-code font-medium bg-[#0F172A] border border-[#1E293B] text-amber-300 rounded-md">
                REST APIs &amp; Git
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all active:scale-[0.98]"
              >
                <FolderKanban className="w-5 h-5" />
                <span>View My Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#F8FAFC] bg-[#0F172A] hover:bg-[#1E293B] border border-[#1E293B] hover:border-slate-600 transition-all active:scale-[0.98]"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#1E293B]/80 w-full text-xs sm:text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full Stack PHP &amp; .NET</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Reliable Relational SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern Clean Code</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Personal Photo in Professional Modern Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500" />

              {/* Modern Rounded Profile Frame Container */}
              <div className="relative bg-[#0F172A] p-3 sm:p-4 rounded-3xl border border-[#1E293B] shadow-2xl shadow-black/60">
                
                {/* Photo Viewport */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#020617] border border-[#1E293B]/80 flex items-center justify-center cursor-pointer group/photo"
                  title="Click to select or change photo"
                >
                  <img
                    src={photoSrc}
                    alt="Yousef Gamal Hegran - Full Stack PHP & .NET Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-Right Badge: Availability */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-medium text-emerald-400 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available For Hire</span>
                  </div>

                  {/* Bottom Overlay Info Tag */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 text-left shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-white tracking-tight">
                          {PERSONAL_INFO.name}
                        </p>
                        <p className="text-xs text-blue-400 font-mono-code">
                          Full Stack Developer
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Layers className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Hidden file input for photo switching by clicking photo */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
