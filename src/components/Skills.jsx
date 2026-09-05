import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-[#1D2939]">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F4F7FA]">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.skills.map((group, idx) => (
            <div key={idx} className="editorial-card p-5 sm:p-6 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#22C7E8]">
                {group.category}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#0F172A] dark:text-[#F4F7FA] leading-relaxed">
                {group.skills.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

