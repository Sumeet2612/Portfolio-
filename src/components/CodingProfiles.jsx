import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Code2 as Github, Code, ExternalLink, FolderGit2, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CodingProfiles = () => {
  const { theme } = useTheme();
  const { github, leetcode } = portfolioData.codingProfiles;

  const topRepos = [
    {
      name: "Price-Craft",
      description: "Rules-based e-commerce discount engine with BOGO, percentage, and flat coupon validation.",
      language: "JavaScript / React",
      url: "https://github.com/Sumeet2612/Price-Craft",
      demo: "https://price-craft-navy.vercel.app/"
    },
    {
      name: "Room-Sync",
      description: "Airbnb-inspired hotel booking app with segmented search, stay listings, & reservation views.",
      language: "JavaScript / React",
      url: "https://github.com/Sumeet2612/Room-Sync",
      demo: "https://room-sync-delta.vercel.app/"
    },
    {
      name: "instagram-stories-feature",
      description: "Ephemeral 24-hour social stories component with segment progress tracking and offline storage.",
      language: "JavaScript / React",
      url: "https://github.com/Sumeet2612/instagram-stories-feature",
      demo: "https://stories-feature-steel.vercel.app/"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
          CODING ACTIVITY & REPOSITORIES
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Developer Presence
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
          Open-source repositories, continuous coding activity, and algorithmic practice.
        </p>
      </div>

      {/* GitHub Contribution Heatmap Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto space-y-4"
      >
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <Activity className="w-5 h-5 text-brand-500" />
            <h4 className="font-bold text-base text-slate-900 dark:text-white">
              GitHub Contribution Activity
            </h4>
          </div>
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
          >
            @{github.username}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* GitHub Heatmap Image Chart */}
        <div className="overflow-x-auto py-3 flex justify-center bg-slate-50/50 dark:bg-slate-950/40 rounded-xl p-4 border border-slate-200/60 dark:border-slate-800">
          <img
            src={`https://ghchart.rshah.org/06b6d4/${github.username}`}
            alt={`${github.username}'s GitHub Contribution Chart`}
            className="min-w-[650px] w-full max-w-full h-auto dark:invert-[0.15] dark:hue-rotate-180 transition-all"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Top Repositories Grid */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
          <FolderGit2 className="w-5 h-5 text-brand-500" />
          <h4>Top GitHub Repositories</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topRepos.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-brand-500/40 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold">
                    {repo.language}
                  </span>
                  <FolderGit2 className="w-4 h-4 text-slate-400" />
                </div>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white hover:text-brand-500 transition-colors">
                  {repo.name}
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
                <a
                  href={repo.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Link Cards (GitHub & LeetCode) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* GitHub Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-400 dark:hover:border-slate-700 transition-all"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-slate-900 text-white dark:bg-slate-800 border border-slate-700">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                @{github.username}
              </span>
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              GitHub Profile
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {github.tagline} View open-source code repositories, commits, and project branches.
            </p>
          </div>

          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-xs"
          >
            Visit GitHub Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* LeetCode Problem Solving Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-500/40 dark:hover:border-amber-500/30 transition-all"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/30">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                @{leetcode.username}
              </span>
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              LeetCode Profile
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {leetcode.tagline} Algorithmic problem solving focusing on Arrays, Strings, Trees, and Dynamic Programming.
            </p>
          </div>

          <a
            href={leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs transition-colors shadow-xs"
          >
            Visit LeetCode Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
