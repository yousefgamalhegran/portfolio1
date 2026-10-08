import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { MessageSquareQuote, ShieldAlert, CheckCircle, Handshake, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Client Feedback &amp; Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Client Testimonials
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Committed to transparency and 100% verified authentic client evaluations.
          </p>
        </div>

        {/* Professional Transparency Card */}
        <div className="max-w-3xl mx-auto bg-[#111827] rounded-3xl p-8 sm:p-12 border border-[#1E293B] shadow-2xl text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-6 shadow-inner">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Authentic Feedback Commitment
          </h3>

          {/* Exact User Content from Brief */}
          <blockquote className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl mx-auto italic">
            "{PERSONAL_INFO.testimonialsNote}"
          </blockquote>

          {/* Standards & Transparency Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#1E293B] text-left">
            <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Fabricated Reviews</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">
                Only real client testimonials from verified freelance deliverables.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                <Handshake className="w-3.5 h-3.5 text-blue-400" />
                <span>Client Satisfaction First</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">
                Collaborative communication, code reviews, and milestones.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                <ShieldAlert className="w-3.5 h-3.5 text-indigo-400" />
                <span>DEPI Standards</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">
                Following professional portfolio guidelines with integrity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
