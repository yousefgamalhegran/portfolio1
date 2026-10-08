import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowRight, FolderKanban, Mail, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  const { cta } = PERSONAL_INFO;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/60 via-[#111827] to-indigo-950/70 border-2 border-blue-500/40 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-blue-950/50 overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Start Collaboration</span>
            </div>

            {/* Exact Headline from Prompt */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {cta.headline}
            </h2>

            {/* Exact Text from Prompt */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              "{cta.text}"
            </p>

            {/* Required Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 transition-all active:scale-[0.98]"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-[#F8FAFC] bg-[#0F172A] hover:bg-[#1E293B] border border-[#1E293B] hover:border-slate-600 transition-all active:scale-[0.98]"
              >
                <FolderKanban className="w-5 h-5 text-blue-400" />
                <span>View My Projects</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-3">
              Full Stack PHP &amp; .NET • Clean Code • Database &amp; API Integration
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
