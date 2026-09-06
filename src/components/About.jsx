import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: About Me Narrative */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-[#98A2B3] leading-relaxed">
            {portfolioData.personal.aboutBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Currently Focusing On */}
        <div className="lg:col-span-5 bg-white p-6 space-y-4 rounded-lg dark:bg-gray-800">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white border-b border-slate-200 dark:border-gray-700 pb-3">
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
      </div>
    </section>
  );
};

