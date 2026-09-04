import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowDown, Code2 as Github, BriefcaseBusiness as Linkedin, Mail, Code } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {portfolioData.personal.statusBadge}
        </motion.div>

        {/* Greeting & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
            HELLO, I'M
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {portfolioData.personal.name}
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold gradient-text">
            {portfolioData.personal.role}
          </h2>
        </motion.div>

        {/* Description Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {portfolioData.personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm shadow-md hover:shadow-glow-cyan transition-all duration-200 flex items-center gap-2 group cursor-pointer"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700/80 transition-all duration-200 cursor-pointer"
          >
            Let's Connect
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 flex items-center justify-center gap-4 text-slate-600 dark:text-slate-400"
        >
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/40 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/40 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {portfolioData.social.leetcode && (
            <a
              href={portfolioData.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/40 transition-all flex items-center gap-1.5 text-xs font-semibold font-mono"
            >
              <Code className="w-5 h-5 text-amber-500" />
              <span>LeetCode</span>
            </a>
          )}
          <a
            href={portfolioData.social.email}
            aria-label="Send Email"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/40 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
