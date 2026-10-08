import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData.ts';
import { Award, CheckCircle2, ShieldCheck, BookMarked, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Achievements &amp; Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Professional development programs, technical training, and accredited industry credentials.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#111827] rounded-2xl p-5 sm:p-6 border border-[#1E293B] hover:border-blue-500/40 shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-blue-950 border border-blue-500/30 text-blue-300 font-semibold">
                    {item.category}
                  </span>
                  <Award className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-slate-400 mt-1.5 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{item.organization}</span>
                </p>

                {/* Description */}
                <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              {/* Status */}
              <div className="mt-5 pt-3 border-t border-[#1E293B]/80 flex items-center justify-between text-[11px] text-[#94A3B8]">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Completion</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
