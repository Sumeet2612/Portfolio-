import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Code, GitBranch } from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const CodingProfiles = () => {
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
      description: "Modern hotel booking app with segmented search, stay listings, & reservation views.",
      language: "JavaScript / React",
      url: "https://github.com/Sumeet2612/Room-Sync",
      demo: "https://room-sync-delta.vercel.app/"
    },
    {
      name: "instagram-stories-feature",
      description: "Ephemeral 24-hour social stories component with segment progress tracking & offline storage.",
      language: "JavaScript / React",
      url: "https://github.com/Sumeet2612/instagram-stories-feature",
      demo: "https://stories-feature-steel.vercel.app/"
    }
  ];

  return (
    <section className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-10 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-10">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Developer Activity
        </h2>
      </div>

      {/* GitHub Heatmap Contribution Panel */}
      <div className="editorial-card p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1D2939] pb-3 text-xs">
          <span className="font-semibold text-gray-900 dark:text-white">
            GitHub Contributions
          </span>
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[#0284C7] dark:text-[#22C7E8] hover:underline flex items-center gap-1"
          >
            @{github.username}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="overflow-x-auto py-2 flex justify-center bg-slate-50 dark:bg-[#0D121C] rounded-lg p-3 border border-slate-200 dark:border-[#1D2939]">
          <img
            src={`https://ghchart.rshah.org/22C7E8/${github.username}`}
            alt={`${github.username}'s GitHub Contribution Chart`}
            className="min-w-[650px] w-full max-w-full h-auto dark:opacity-90 transition-opacity"
            loading="lazy"
          />
        </div>
      </div>

      {/* Top Repositories Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-[#667085]">
          Top Repositories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topRepos.map((repo, idx) => (
            <div key={idx} className="editorial-card p-5 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-[#0284C7] dark:text-[#22C7E8] font-semibold">
                    {repo.language}
                  </span>
                  <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                  {repo.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-[#98A2B3] leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-[#1D2939] text-xs">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-slate-600 dark:text-[#98A2B3] hover:text-[#0F172A] dark:hover:text-[#F4F7FA]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Code
                </a>
                <a
                  href={repo.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#0284C7] dark:text-[#22C7E8] hover:underline"
                >
                  Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub & LeetCode Profiles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub Card */}
        <div className="editorial-card p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <GithubIcon className="w-5 h-5 text-[#0F172A] dark:text-[#F4F7FA]" />
              <span className="text-xs font-mono text-slate-500 dark:text-[#667085]">@{github.username}</span>
            </div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white">GitHub Profile</h4>
            <p className="text-xs text-slate-600 dark:text-[#98A2B3] leading-relaxed">{github.tagline}</p>
          </div>
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md bg-[#0F172A] dark:bg-[#F4F7FA] text-white dark:text-[#080B12] font-semibold text-xs transition-opacity hover:opacity-90"
          >
            <span>Visit GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* LeetCode Card */}
        <div className="editorial-card p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Code className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400">@{leetcode.username}</span>
            </div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white">LeetCode Profile</h4>
            <p className="text-xs text-slate-600 dark:text-[#98A2B3] leading-relaxed">{leetcode.tagline}</p>
          </div>
          <a
            href={leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md border border-slate-300 dark:border-[#1D2939] text-[#0F172A] dark:text-[#F4F7FA] font-semibold text-xs hover:bg-slate-100 dark:hover:bg-[#101722] transition-colors"
          >
            <span>Visit LeetCode</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

