import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Trophy, Shield, CheckCircle } from 'lucide-react';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
          COMPETITIONS & RECOGNITIONS
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Major Achievements
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
          Demonstrating technical problem solving, teamwork, and execution under competition deadlines.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {portfolioData.achievements.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 dark:border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent relative overflow-hidden"
          >
            {/* Top Badge Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 border border-amber-500/30">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {item.category}
                  </span>
                  <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>
              </div>

              <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow-xs tracking-wide">
                {item.award}
              </span>
            </div>

            {/* Context & Description */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                <Shield className="w-4 h-4 text-brand-500" />
                <span>Project Focus: {item.project}</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {item.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
