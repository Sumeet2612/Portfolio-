import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 dark:bg-black">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
        <div>
          <span className="font-semibold text-white">
            {portfolioData.personal.name}
          </span>{' '}
          · {portfolioData.personal.role}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LeetCode
          </a>
          <a
            href={portfolioData.social.email}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <div>
          © 2026 {portfolioData.personal.name}. Built with React.
        </div>
      </div>
      </div>
    </footer>
  );
};

