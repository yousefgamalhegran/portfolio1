import React, { useState } from 'react';
import { PERSONAL_INFO, CONTACT_PLATFORMS } from '../data/portfolioData.ts';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Globe, 
  Github, 
  Linkedin, 
  Briefcase, 
  Layers, 
  Code, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setStatusMessage('Please fill in your email and message.');
      return;
    }
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Freelance Web Project Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setStatusMessage('Thank you! Opening your email client to complete transmission.');
    setTimeout(() => setStatusMessage(null), 5000);
  };

  const getPlatformIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-4 h-4 text-slate-300" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4 text-blue-400" />;
      case 'Upwork':
        return <Globe className="w-4 h-4 text-emerald-400" />;
      case 'Mostaql':
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case 'Khamsat':
        return <CheckCircle className="w-4 h-4 text-amber-400" />;
      case 'Nafezly':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'Kafiil':
        return <Code className="w-4 h-4 text-purple-400" />;
      default:
        return <Globe className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0F172A]/40 relative border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Let's discuss your web project, requirements, and technical implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Freelance Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-7 border border-[#1E293B] shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-code uppercase tracking-wider text-blue-400 font-semibold">
                  Official Email
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-[#94A3B8]">Direct Address</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] border border-[#1E293B] text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-blue-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Freelance Platforms with Placeholders as requested */}
            <div className="bg-[#111827] rounded-2xl p-6 border border-[#1E293B] shadow-xl">
              <h3 className="text-sm font-bold text-white mb-1">
                Freelance &amp; Professional Profiles
              </h3>
              <p className="text-xs text-[#94A3B8] mb-4">
                Verified platform profiles and development registries:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CONTACT_PLATFORMS.map((platform) => (
                  <div
                    key={platform.name}
                    className="p-3 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-[#111827]">
                        {getPlatformIcon(platform.name)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          {platform.name}
                        </div>
                        <div className="text-[11px] font-mono-code text-blue-400">
                          {platform.placeholder}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#111827] rounded-2xl p-6 sm:p-8 border border-[#1E293B] shadow-xl">
            <h3 className="text-xl font-bold text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
              Share details about your upcoming website, PHP/Laravel system, or .NET backend requirement.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ahmed Ali"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject / Service Needed
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Sales Management Portal / Laravel API"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project Description &amp; Details <span className="text-blue-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your project scope, features needed, backend requirements, and timeline..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E293B] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-500/40 text-xs text-blue-200">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
