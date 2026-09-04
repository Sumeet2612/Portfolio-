import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, BriefcaseBusiness as Linkedin, Code2 as Github, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ submitting: true, submitted: false, error: null });

    /* 
      ======================================================
      CONFIGURATION POINT FOR EMAIL SERVICES (Formspree/EmailJS)
      ======================================================
      When integrating a backend email service, update portfolioData.personal.contactFormEndpoint:
      
      try {
        const response = await fetch(portfolioData.personal.contactFormEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({ name: '', email: '', subject: '', message: '' });
        }
      } catch (err) {
        setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please email directly.' });
      }
    */

    // Client-side simulation for smooth feedback
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 mb-2">
          GET IN TOUCH
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Let's Work Together
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
          I'm currently open to Software Engineering internships, Frontend Developer opportunities, Full-Stack roles, and technical collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
        {/* Left Column: Direct Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
              Direct Contact Details
            </h4>

            {/* Email Directly */}
            <a
              href={portfolioData.social.email}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 hover:border-brand-500/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase text-slate-400">EMAIL DIRECTLY</span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                  {portfolioData.personal.email}
                </p>
              </div>
            </a>

            {/* LinkedIn Profile */}
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 hover:border-brand-500/40 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase text-slate-400">LINKEDIN PROFILE</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    Sumeet Kumar Raj
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
            </a>

            {/* GitHub Profile */}
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 hover:border-brand-500/40 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-900/10 dark:bg-slate-100/10 text-slate-900 dark:text-slate-100 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase text-slate-400">GITHUB PROFILE</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    @Sumeet2612
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 rounded-2xl space-y-5"
            noValidate
          >
            <h4 className="font-bold text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
              Send a Message
            </h4>

            {/* Success Banner */}
            {status.submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! Your message has been prepared. I will get back to you shortly.</span>
              </div>
            )}

            {/* Error Banner */}
            {status.error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                    errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                    errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                />
                {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Subject Input */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Internship Opportunity / Software Project"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                }`}
              />
              {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-70 text-white font-semibold text-xs transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              {status.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
