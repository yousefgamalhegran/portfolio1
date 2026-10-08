import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Check, Sparkles, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

export const USPSection: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'both' | 'en' | 'ar'>('both');
  const { usp } = PERSONAL_INFO;

  return (
    <section id="usp" className="py-20 lg:py-28 bg-[#0B132B]/50 relative border-t border-[#1E293B] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-blue-500/20">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Unique Selling Proposition (USP) • DEPI Requirement</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight">
            Why Work With Me?
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            What makes me different: unified full stack capabilities, robust dual backend architectures, and pragmatic execution.
          </p>

          {/* Language display switcher buttons */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-[#111827] border border-[#1E293B]">
            <button
              onClick={() => setActiveLang('both')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeLang === 'both'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bilingual (EN &amp; AR)
            </button>
            <button
              onClick={() => setActiveLang('en')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeLang === 'en'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              English Only
            </button>
            <button
              onClick={() => setActiveLang('ar')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeLang === 'ar'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              العربية فقط
            </button>
          </div>
        </div>

        {/* Core USP Statements Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* English USP Card */}
          {(activeLang === 'both' || activeLang === 'en') && (
            <div
              className={`bg-[#111827] rounded-3xl p-7 sm:p-9 border-2 border-blue-500/40 shadow-2xl relative flex flex-col justify-between ${
                activeLang === 'en' ? 'lg:col-span-2 max-w-3xl mx-auto' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇬🇧</span>
                    <span className="text-xs font-mono-code uppercase font-bold text-blue-400 tracking-wider">
                      English USP Statement
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Core Value Proposition</span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed tracking-tight">
                  "{usp.english}"
                </blockquote>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8]">
                <span>Pragmatic &amp; Scalable Delivery</span>
                <span className="text-blue-400 font-mono-code font-semibold">PHP + .NET</span>
              </div>
            </div>
          )}

          {/* Arabic USP Card */}
          {(activeLang === 'both' || activeLang === 'ar') && (
            <div
              className={`bg-[#111827] rounded-3xl p-7 sm:p-9 border-2 border-indigo-500/40 shadow-2xl relative flex flex-col justify-between text-right ${
                activeLang === 'ar' ? 'lg:col-span-2 max-w-3xl mx-auto' : ''
              }`}
              dir="rtl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇪🇬</span>
                    <span className="text-xs font-arabic font-bold text-indigo-400 tracking-wider">
                      بيان القيمة الفريدة (USP بالعربية)
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-arabic">القيمة المضافة للمشاريع</span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-white font-arabic leading-loose tracking-normal">
                  "{usp.arabic}"
                </blockquote>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8] font-arabic">
                <span>تطبيقات عملية وموثوقة</span>
                <span className="text-indigo-400 font-mono-code font-semibold" dir="ltr">PHP + .NET</span>
              </div>
            </div>
          )}

        </div>

        {/* 6 Supporting Points Mandated by DEPI Brief */}
        <div className="bg-[#0F172A] rounded-2xl p-6 sm:p-8 border border-[#1E293B] shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white">
              Key Supporting Capabilities &amp; Differentiators
            </h3>
            <p className="text-xs text-[#94A3B8] mt-1">
              The foundational pillars supporting my unique value proposition
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {usp.supportingPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-blue-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="font-semibold text-sm text-slate-200">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Discuss Your Web Solution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
