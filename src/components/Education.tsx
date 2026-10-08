import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { GraduationCap, BookOpen, Award, CheckCircle, Calendar, School } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Education &amp; Technical Foundation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Formal university education backed by specialized technical engineering tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main University Degree Card */}
          <div className="lg:col-span-7 bg-[#111827] rounded-2xl p-6 sm:p-8 border border-[#1E293B] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1E293B]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/25">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-500/30">
                      Current Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {education.university}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-code text-blue-300 bg-[#0F172A] px-3 py-1.5 rounded-lg border border-[#1E293B]">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{education.academicLevel}</span>
                </div>
              </div>

              {/* Degree Specifics */}
              <div className="space-y-4 text-left">
                <div className="bg-[#0F172A] p-4 rounded-xl border border-[#1E293B]/80">
                  <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium">Faculty</div>
                  <div className="text-base font-bold text-white mt-0.5">{education.faculty}</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0F172A] p-4 rounded-xl border border-[#1E293B]/80">
                    <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium">Department</div>
                    <div className="text-base font-bold text-slate-100 mt-0.5">{education.department}</div>
                  </div>
                  <div className="bg-[#0F172A] p-4 rounded-xl border border-[#1E293B]/80">
                    <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium">Specialization</div>
                    <div className="text-base font-bold text-blue-400 mt-0.5">{education.specialization}</div>
                  </div>
                </div>

                <div className="pt-2 text-sm text-[#94A3B8] leading-relaxed">
                  Focusing on computational thinking, pedagogical software design, database concepts, and educational technology implementations.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <School className="w-4 h-4 text-blue-400" />
                <span>Menoufia University, Egypt</span>
              </div>
              <span className="font-semibold text-emerald-400">In Good Standing</span>
            </div>
          </div>

          {/* Technical Training Overview Card */}
          <div className="lg:col-span-5 bg-[#111827] rounded-2xl p-6 sm:p-8 border border-[#1E293B] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E293B]">
                <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Specialized Technical Tracks</h3>
                  <p className="text-xs text-[#94A3B8]">Continuous Professional Learning</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Digital Egypt Pioneers Initiative (DEPI)</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">MCIT full stack web training &amp; career readiness</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Information Technology Institute (ITI)</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Professional software engineering foundations</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white">.NET &amp; ASP.NET Core Specialization</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Advanced backend architecture, C#, and relational SQL</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white">AI Automation &amp; Workflow Integration</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">n8n, webhook connections, and multi-service APIs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B]">
              <a
                href="#achievements"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <span>View all certifications and training details below</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
