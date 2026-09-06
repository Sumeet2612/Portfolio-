import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, FileText } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-blue-500 text-white">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[32px] border-white/15" />
      <div className="absolute bottom-[-5rem] left-[-3rem] h-48 w-48 rotate-12 bg-emerald-500/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Personal Intro */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
              {portfolioData.personal.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-amber-300">
              {portfolioData.personal.role}
            </p>
          </div>

          <p className="text-base text-blue-50 leading-relaxed max-w-xl">
            {portfolioData.personal.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gray-900 text-white font-semibold text-xs hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border-4 border-white text-white hover:bg-white hover:text-blue-500 font-semibold text-xs transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              download="Sumeet_SDE_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border-4 border-emerald-300 text-emerald-100 hover:bg-emerald-300 hover:text-gray-900 font-semibold text-xs transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Professional Status Line */}
          <div className="pt-3 flex items-center gap-2 text-xs text-blue-100">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span>{portfolioData.personal.statusLine}</span>
          </div>
        </div>

        {/* Right Column: Clean Code Visual */}
        <div className="lg:col-span-5">
          <div className="editorial-card p-4 sm:p-5 font-mono text-xs overflow-hidden text-gray-900">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1D2939] pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>
              <span className="text-[11px] text-slate-400 dark:text-[#667085]">developer.js</span>
            </div>

            <div className="space-y-1.5 leading-relaxed text-slate-700 dark:text-[#98A2B3]">
              <div>
                <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-slate-500 dark:text-[#667085]">name:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Sumeet Raj"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-500 dark:text-[#667085]">focus:</span> [
                <span className="text-emerald-600 dark:text-emerald-400">"React"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"JavaScript"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"DSA"</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-500 dark:text-[#667085]">building:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Web Applications"</span>
              </div>
              <div>&#125;;</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

