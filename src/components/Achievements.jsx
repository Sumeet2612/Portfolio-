import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-[#1D2939]">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F4F7FA]">
            Achievements
          </h2>
        </div>

        {portfolioData.achievements.map((item) => (
          <div
            key={item.id}
            className="editorial-card p-6 sm:p-8 space-y-4 border-l-4 border-l-[#F5A623]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-[#F5A623]">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F4F7FA] mt-0.5">
                  {item.title}
                </h3>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-md bg-amber-500/10 text-amber-600 dark:text-[#F5A623] border border-amber-500/20">
                {item.award}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-[#98A2B3] leading-relaxed">
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

