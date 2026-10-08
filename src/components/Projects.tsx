import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';
import { CaseStudyModal } from './CaseStudyModal.tsx';
import { 
  FolderKanban, 
  ExternalLink, 
  Layers, 
  Code2, 
  Database, 
  Bot, 
  FileText, 
  ArrowRight 
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Web Development', 'SaaS', 'Automation / Web Integration', 'Web Platform'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeFilter) || (activeFilter === 'SaaS' && p.category.includes('SaaS')));

  const getProjectIcon = (category: string) => {
    if (category.includes('SaaS')) return <Layers className="w-5 h-5 text-indigo-400" />;
    if (category.includes('Automation')) return <Bot className="w-5 h-5 text-amber-400" />;
    if (category.includes('Platform')) return <Code2 className="w-5 h-5 text-purple-400" />;
    return <Database className="w-5 h-5 text-blue-400" />;
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#0F172A]/40 relative border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Featured Web Projects &amp; Systems
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Highlighting real-world web applications, SaaS platform concepts, and workflow automations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-[#111827] text-[#94A3B8] hover:text-white hover:bg-[#1E293B] border border-[#1E293B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827] rounded-2xl border border-[#1E293B] hover:border-blue-500/40 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Card Header & Body */}
              <div className="p-6 sm:p-8">
                
                {/* Meta row: Category & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center">
                      {getProjectIcon(project.category)}
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-950 text-blue-400 border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-code text-slate-400 bg-[#0F172A] px-2.5 py-1 rounded-md border border-[#1E293B]">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                  "{project.description}"
                </p>

                {/* Tech Badges */}
                <div className="mt-5 pt-4 border-t border-[#1E293B]/80">
                  <div className="text-[11px] font-mono-code uppercase tracking-wider text-slate-500 mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono-code rounded-md bg-[#0F172A] border border-[#1E293B] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer: Action Button */}
              <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-blue-600/90 hover:bg-blue-600 shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
