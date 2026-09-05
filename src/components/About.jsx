import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-[#1D2939]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: About Me Narrative */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F4F7FA]">
            About
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-[#98A2B3] leading-relaxed">
            {portfolioData.personal.aboutBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Currently Focusing On */}
        <div className="lg:col-span-5 editorial-card p-6 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] dark:text-[#F4F7FA] border-b border-slate-200 dark:border-[#1D2939] pb-3">
            Currently focusing on
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#98A2B3]">
            {portfolioData.personal.currentlyFocusingOn.map((item, index) => (
              <li key={index} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#22C7E8] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

