import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Check } from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Projects = () => {
  const featuredProject = portfolioData.projects.find((p) => p.featured) || portfolioData.projects[0];
  const otherProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200 dark:border-[#1D2939]">
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F4F7FA]">
            Projects
          </h2>
        </div>

        {/* Featured Project Showcase */}
        {featuredProject && (
          <div className="editorial-card p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1D2939] pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7] dark:text-[#22C7E8]">
                  Featured Project
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F4F7FA] mt-0.5">
                  {featuredProject.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                {featuredProject.demo && (
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-[#0284C7] dark:bg-[#22C7E8] text-white dark:text-[#080B12] hover:opacity-90 transition-opacity"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-slate-300 dark:border-[#1D2939] text-[#0F172A] dark:text-[#F4F7FA] hover:bg-slate-100 dark:hover:bg-[#101722] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {featuredProject.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-[#98A2B3] leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#667085]">
                    Built with:
                  </h4>
                  <p className="text-xs font-mono text-slate-700 dark:text-[#98A2B3]">
                    {featuredProject.tags.join(' · ')}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#667085]">
                    Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-[#98A2B3]">
                    {featuredProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Minimal Project Visual Preview Box */}
              <div className="lg:col-span-5 editorial-card p-4 bg-slate-50 dark:bg-[#0D121C] border border-slate-200 dark:border-[#1D2939] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 dark:text-[#667085] pb-2 border-b border-slate-200 dark:border-[#1D2939]">
                  <span>discountEngine.js</span>
                  <span className="text-[10px] text-[#22C55E]">● Active Rules</span>
                </div>
                <div className="space-y-2 text-slate-600 dark:text-[#98A2B3] text-[11px]">
                  <div className="p-2 rounded bg-white dark:bg-[#101722] border border-slate-200 dark:border-[#1D2939] flex justify-between items-center">
                    <span>COUPON: BOGO2025</span>
                    <span className="text-[#22C55E]">Applied</span>
                  </div>
                  <div className="p-2 rounded bg-white dark:bg-[#101722] border border-slate-200 dark:border-[#1D2939] flex justify-between items-center">
                    <span>MIN_CART_THRESHOLD</span>
                    <span>Passed</span>
                  </div>
                  <div className="p-2 rounded bg-white dark:bg-[#101722] border border-slate-200 dark:border-[#1D2939] flex justify-between items-center">
                    <span>STACKABLE_RULE</span>
                    <span className="text-amber-500">Enforced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {otherProjects.map((project) => (
            <div key={project.id} className="editorial-card p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F4F7FA]">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-[#0284C7] dark:text-[#22C7E8]">
                  {project.subtitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-[#98A2B3] leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2">
                  <p className="text-[11px] font-mono text-slate-500 dark:text-[#667085]">
                    {project.tags.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-[#1D2939] text-xs">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#0284C7] dark:text-[#22C7E8] hover:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-slate-600 dark:text-[#98A2B3] hover:text-[#0F172A] dark:hover:text-[#F4F7FA]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

