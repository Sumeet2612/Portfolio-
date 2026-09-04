import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2 as Github, BriefcaseBusiness as Linkedin, Code, ArrowUp, Code2 } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand Details */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-500">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h5 className="font-bold text-sm text-slate-900 dark:text-white">
              {portfolioData.personal.name}
            </h5>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {portfolioData.personal.role}
            </p>
          </div>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-brand-500 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-brand-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          {portfolioData.social.leetcode && (
            <a
              href={portfolioData.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="hover:text-amber-500 transition-colors flex items-center gap-1 text-xs font-mono"
            >
              <Code className="w-4 h-4 text-amber-500" />
            </a>
          )}
        </div>

        {/* Right Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Sumeet Kumar Raj. Built with React & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-500 hover:text-white transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
