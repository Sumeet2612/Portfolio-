import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { 
  Code2, FileCode2, Terminal, Layout, Atom, Palette, Zap, 
  Cpu, Smartphone, GitBranch, Laptop, Globe, Cloud, Binary, 
  Layers, MousePointer, Workflow, CheckCircle2 
} from 'lucide-react';

const iconMap = {
  Code2: <Code2 className="w-4 h-4 text-brand-500" />,
  FileCode2: <FileCode2 className="w-4 h-4 text-brand-500" />,
  Terminal: <Terminal className="w-4 h-4 text-emerald-500" />,
  Layout: <Layout className="w-4 h-4 text-brand-500" />,
  Atom: <Atom className="w-4 h-4 text-cyan-400" />,
  Palette: <Palette className="w-4 h-4 text-sky-400" />,
  Zap: <Zap className="w-4 h-4 text-amber-400" />,
  Cpu: <Cpu className="w-4 h-4 text-emerald-400" />,
  Smartphone: <Smartphone className="w-4 h-4 text-indigo-400" />,
  GitBranch: <GitBranch className="w-4 h-4 text-orange-400" />,
  Laptop: <Laptop className="w-4 h-4 text-purple-400" />,
  Globe: <Globe className="w-4 h-4 text-blue-400" />,
  Cloud: <Cloud className="w-4 h-4 text-brand-400" />,
  Binary: <Binary className="w-4 h-4 text-amber-500" />,
  Layers: <Layers className="w-4 h-4 text-indigo-400" />,
  MousePointer: <MousePointer className="w-4 h-4 text-emerald-400" />,
  Workflow: <Workflow className="w-4 h-4 text-brand-500" />
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
          TECHNICAL CAPABILITIES
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Skills & Core Competencies
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
          Technologies and developer tools I use to design, build, and improve applications.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.skills.map((categoryGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-2.5 border-b border-slate-200/80 dark:border-slate-800 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                {categoryGroup.category}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categoryGroup.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center gap-3 group hover:border-brand-500/40 transition-all"
                >
                  {iconMap[skill.icon] || <CheckCircle2 className="w-4 h-4 text-brand-500" />}
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
