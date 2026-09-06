import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="bg-emerald-500 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white dark:text-gray-950">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.skills.map((group, idx) => (
            <div key={idx} className="bg-white p-5 sm:p-6 space-y-3 rounded-lg transition-transform duration-200 hover:scale-[1.02] dark:bg-gray-900">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#22C7E8]">
                {group.category}
              </h3>
              <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                {group.skills.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

