import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
          PRACTICAL WORK
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Featured Projects
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
          Projects built to strengthen my frontend, problem-solving, API integration, and software development skills.
        </p>
      </div>

      {/* Project Showcase Grid */}
      <div className="grid grid-cols-1 gap-10">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
