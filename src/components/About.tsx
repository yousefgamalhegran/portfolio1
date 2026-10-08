import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Terminal, Database, ShieldCheck, CheckSquare, Server, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0F172A]/40 relative border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>About The Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Engineering Reliable Web Systems
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Focused on building clean, structured, and practical full stack web applications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Statement Card */}
          <div className="lg:col-span-7 bg-[#111827] rounded-2xl p-6 sm:p-8 border border-[#1E293B] shadow-xl relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E293B]">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#F8FAFC]">
                  Professional Background &amp; Focus
                </h3>
                <p className="text-xs font-mono-code text-[#94A3B8]">
                  Full Stack PHP &amp; .NET Specialist
                </p>
              </div>
            </div>

            {/* Exact Content from User Brief */}
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">Full Stack PHP &amp; .NET Developer</strong> focused on building modern and reliable web applications. I work across both frontend and backend development using technologies such as PHP, Laravel, C#, .NET, ASP.NET Core, HTML, CSS, JavaScript, Bootstrap, MySQL, SQL, REST APIs, and Git.
              </p>
              <p>
                I focus on understanding project requirements, developing clean and maintainable code, integrating databases and APIs, and delivering practical web solutions that meet client needs.
              </p>
            </div>

            {/* Core Values / Work Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#1E293B]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Client-Centered Execution</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Translating project goals into reliable, working software.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Clean &amp; Maintainable Code</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Writing structured, readable code that is easy to update.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Technical Profile Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Backend Dual Engine Badge */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Full Stack Dual Backend</h4>
                  <p className="text-xs text-[#94A3B8]">PHP &amp; .NET Ecosystems</p>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Capable of delivering solutions in both PHP/Laravel for rapid, expressive web apps and C#/.NET for strictly typed, high-throughput backend services.
              </p>
            </div>

            {/* Database & Integration Card */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Database &amp; API Integration</h4>
                  <p className="text-xs text-[#94A3B8]">MySQL, SQL, REST APIs</p>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Designing normalized schemas, relational tables, and standardized REST endpoints to keep your application data consistent and accessible.
              </p>
            </div>

            {/* University & Technical Track Callout */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Menoufia University &amp; DEPI</h4>
                  <p className="text-xs text-[#94A3B8]">Educational Tech &amp; Software Training</p>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Building on structured technical studies in Educational Technology with industry-backed professional tracks in web and backend development.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
