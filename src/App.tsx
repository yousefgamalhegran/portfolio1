import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Education } from './components/Education.tsx';
import { Skills } from './components/Skills.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { Achievements } from './components/Achievements.tsx';
import { USPSection } from './components/USPSection.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { CTA } from './components/CTA.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'services', 'projects', 'achievements', 'usp', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Achievements />
        <USPSection />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
