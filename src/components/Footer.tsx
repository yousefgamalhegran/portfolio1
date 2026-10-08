import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] border-t border-[#1E293B] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E293B]/70">
          {/* Identity */}
          <div className="flex flex-col">
            <p className="font-bold text-lg text-white">
              Eng. yousef hegran
            </p>
            <p className="text-xs font-mono-code text-blue-400">
              Full Stack using PHP &amp; .Net
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#usp" className="hover:text-white transition-colors">USP</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] border border-[#1E293B] text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Assignment Reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono-code text-[11px]">
              DEPI Assignment: Portfolio Building &amp; USPs
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
