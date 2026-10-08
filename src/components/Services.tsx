import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData.ts';
import { 
  Globe2, 
  Terminal, 
  Cpu, 
  Zap, 
  Database, 
  Share2, 
  Wrench, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const getServiceIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Globe2 className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 4:
        return <Zap className="w-5 h-5 text-purple-400" />;
      case 5:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 6:
        return <Share2 className="w-5 h-5 text-cyan-400" />;
      case 7:
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Globe2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Client Services &amp; Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            What I Can Build For You
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            Practical web solutions engineered for business reliability, performance, and scalability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`bg-[#111827] rounded-2xl p-6 sm:p-7 border border-[#1E293B] shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group ${
                service.id === 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Service Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono-code text-slate-500">
                    0{service.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs font-mono-code text-blue-400/90">
                  {service.technologies}
                </p>

                <p className="mt-3 text-sm font-medium text-slate-200">
                  {service.shortDescription}
                </p>

                {/* Client Value Explanation */}
                <div className="mt-4 p-3.5 rounded-xl bg-[#0F172A] border border-[#1E293B]/80 text-xs text-[#94A3B8] leading-relaxed">
                  <strong className="text-slate-200 font-semibold block mb-1">
                    Value to your business:
                  </strong>
                  {service.clientValue}
                </div>

                {/* Key Deliverables */}
                <div className="mt-4 space-y-1.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action */}
              <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  <span>Request this service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
