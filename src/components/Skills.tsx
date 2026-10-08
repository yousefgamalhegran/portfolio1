import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { Layout, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'frontend':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Layout className="w-5 h-5 text-blue-400" />;
    }
  };

  const getCategoryBorder = (key: string) => {
    switch (key) {
      case 'frontend':
        return 'hover:border-blue-500/50';
      case 'backend':
        return 'hover:border-indigo-500/50';
      case 'database':
        return 'hover:border-emerald-500/50';
      case 'tools':
        return 'hover:border-amber-500/50';
      default:
        return 'hover:border-blue-500/50';
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#0F172A]/30 relative border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Specialized Skills &amp; Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Organized by functional layer without artificial percentage bars.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.categoryKey}
              className={`bg-[#111827] rounded-2xl p-6 sm:p-8 border border-[#1E293B] shadow-xl transition-all duration-300 ${getCategoryBorder(
                category.categoryKey
              )} flex flex-col justify-between`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#1E293B]">
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center">
                    {getCategoryIcon(category.categoryKey)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8]">{category.description}</p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] hover:bg-[#152037] transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-bold text-white text-sm">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-blue-950/70 border border-blue-500/30 text-blue-300">
                          {skill.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-4 border-t border-[#1E293B]/70 flex items-center justify-between text-xs text-[#94A3B8]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Ready</span>
                </div>
                <span className="font-mono-code text-slate-400 text-[11px]">
                  {category.skills.length} Core Competencies
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
