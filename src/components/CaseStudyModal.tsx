import React from 'react';
import { ProjectItem } from '../types.ts';
import { X, Layers, Database, Cpu, CheckCircle2, ShieldCheck, Server } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0F172A] border border-[#1E293B] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1E293B] bg-[#111827]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono-code text-slate-400">
                • {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1E293B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Overview */}
          <div className="bg-[#111827] p-4 sm:p-5 rounded-xl border border-[#1E293B]">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-blue-400 font-bold mb-2">
              Project Summary
            </h4>
            <p className="text-base text-slate-200 leading-relaxed">
              "{project.description}"
            </p>
          </div>

          {/* Tech Stack Used */}
          <div>
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#94A3B8] font-bold mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono-code rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Design */}
          {project.architectureNotes && project.architectureNotes.length > 0 && (
            <div className="bg-[#111827] p-5 rounded-xl border border-[#1E293B]">
              <div className="flex items-center gap-2 mb-3 text-white font-bold text-base">
                <Server className="w-4 h-4 text-indigo-400" />
                <span>Architecture &amp; System Design</span>
              </div>
              <ul className="space-y-2">
                {project.architectureNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="bg-[#111827] p-5 rounded-xl border border-[#1E293B]">
              <div className="flex items-center gap-2 mb-3 text-white font-bold text-base">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Key Implemented Capabilities</span>
              </div>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Database Design */}
          {project.databaseDesign && project.databaseDesign.length > 0 && (
            <div className="bg-[#111827] p-5 rounded-xl border border-[#1E293B]">
              <div className="flex items-center gap-2 mb-3 text-white font-bold text-base">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Database Structure &amp; Data Models</span>
              </div>
              <ul className="space-y-2">
                {project.databaseDesign.map((db, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{db}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* API Integration */}
          {project.apiIntegration && project.apiIntegration.length > 0 && (
            <div className="bg-[#111827] p-5 rounded-xl border border-[#1E293B]">
              <div className="flex items-center gap-2 mb-3 text-white font-bold text-base">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>APIs &amp; External Integrations</span>
              </div>
              <ul className="space-y-2">
                {project.apiIntegration.map((api, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{api}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#1E293B] bg-[#111827] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Verified Project Documentation</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
