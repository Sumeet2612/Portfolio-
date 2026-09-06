import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="bg-amber-500 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-950">
            Achievements
          </h2>
        </div>

        {portfolioData.achievements.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 sm:p-8 space-y-4 rounded-lg border-l-8 border-l-gray-900 dark:bg-gray-900 dark:border-l-gray-950"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-[#F5A623]">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-0.5">
                  {item.title}
                </h3>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-md bg-amber-500/10 text-amber-600 dark:text-[#F5A623] border border-amber-500/20">
                {item.award}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2 border-t border-slate-200 dark:border-[#1D2939] flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500 dark:text-[#667085]">
              {item.highlights.map((h, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

