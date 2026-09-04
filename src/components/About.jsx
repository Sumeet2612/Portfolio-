import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Layout, Code, Globe, Cpu, Target, Rocket } from 'lucide-react';

const approachIconMap = {
  Layout: <Layout className="w-5 h-5 text-brand-500" />,
  Code: <Code className="w-5 h-5 text-amber-500" />,
  Globe: <Globe className="w-5 h-5 text-blue-500" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-500" />
};

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
          ABOUT ME
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          {portfolioData.personal.aboutHeading}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Background Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed"
        >
          {portfolioData.personal.aboutBio.map((paragraph, index) => (
            <p key={index} className="glass-card p-5 rounded-2xl border-slate-200/80 dark:border-slate-800/80">
              {paragraph}
            </p>
          ))}

          {/* Current Objective Card */}
          <div className="p-5 rounded-2xl bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/20 text-slate-800 dark:text-slate-200 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-brand-500 text-white shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                Current Objective
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {portfolioData.personal.currentObjective}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Development Approach Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 px-1">
            HOW I APPROACH DEVELOPMENT
          </h4>
          {portfolioData.approach.map((item, index) => (
            <div
              key={index}
              className="glass-card p-5 rounded-2xl flex items-start gap-4 hover:border-brand-500/30 transition-all"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                {approachIconMap[item.icon] || <Code className="w-5 h-5 text-brand-500" />}
              </div>
              <div>
                <h5 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
