import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-[#1D2939] py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#667085]">
        <div>
          <span className="font-semibold text-[#0F172A] dark:text-[#F4F7FA]">
            {portfolioData.personal.name}
          </span>{' '}
          · {portfolioData.personal.role}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F172A] dark:hover:text-[#F4F7FA] transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F172A] dark:hover:text-[#F4F7FA] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F172A] dark:hover:text-[#F4F7FA] transition-colors"
          >
            LeetCode
          </a>
          <a
            href={portfolioData.social.email}
            className="hover:text-[#0F172A] dark:hover:text-[#F4F7FA] transition-colors"
          >
            Email
          </a>
        </div>

        <div>
          © 2026 {portfolioData.personal.name}. Built with React.
        </div>
      </div>
    </footer>
  );
};

