import React from 'react';
import { motion } from 'framer-motion';
import { Code2 as Github, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`glass-card rounded-2xl overflow-hidden relative group border ${
        isFeatured
          ? 'border-brand-500/40 dark:border-brand-500/30 shadow-glow-cyan/20 ring-1 ring-brand-500/20'
          : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold shadow-xs tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            {project.badge}
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header Title & Subtitle */}
        <div className="space-y-1 pr-24">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {project.category || 'PROJECT SHOWCASE'}
          </span>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Overview Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Problem Solved vs Technical Solution Split Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800/80 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5 uppercase text-[11px] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Problem Solved:
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5 uppercase text-[11px] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Technical Solution:
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Feature Bullets */}
        <div className="space-y-2">
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Key Technical Highlights:
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs transition-colors shadow-xs group/btn"
            >
              Live Demo
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-xs border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
