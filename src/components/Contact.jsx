import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Link, GitFork, Code, Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

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

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-blue-500 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Let's build something.
          </h2>
          <p className="text-sm text-blue-50 mt-1">
            I'm currently open to software engineering, frontend and full-stack opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gray-900 text-white p-5 space-y-4 rounded-lg dark:bg-gray-950">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-400">
                Direct Links
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href={portfolioData.social.email}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800 text-gray-200 dark:text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#0284C7] dark:text-[#22C7E8] shrink-0" />
                  <span className="truncate">{portfolioData.personal.email}</span>
                </a>

                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800 text-gray-200 dark:text-gray-300 hover:text-white transition-colors"
                >
                  <Link className="w-4 h-4 text-[#0284C7] dark:text-[#22C7E8] shrink-0" />
                  <span>LinkedIn / sumeet-kumar-raj</span>
                </a>

                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800 text-gray-200 dark:text-gray-300 hover:text-white transition-colors"
                >
                  <GitFork className="w-4 h-4 text-[#0284C7] dark:text-[#22C7E8] shrink-0" />
                  <span>GitHub / Sumeet2612</span>
                </a>

                <a
                  href={portfolioData.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800 text-gray-200 dark:text-gray-300 hover:text-white transition-colors"
                >
                  <Code className="w-4 h-4 text-[#0284C7] dark:text-[#22C7E8] shrink-0" />
                  <span>LeetCode / {portfolioData.codingProfiles.leetcode.username}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white p-6 space-y-4 rounded-lg dark:bg-gray-900" noValidate>
              {status.submitted && (
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-[#22C55E] text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your message has been sent. I will get back to you soon!</span>
                </div>
              )}

              {status.error && (
                <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-medium text-slate-700 dark:text-[#98A2B3]">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-[#0D121C] border text-xs text-[#0F172A] dark:text-[#F4F7FA] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#22C7E8] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-200 dark:border-[#1D2939]'
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-medium text-slate-700 dark:text-[#98A2B3]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-[#0D121C] border text-xs text-[#0F172A] dark:text-[#F4F7FA] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#22C7E8] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-200 dark:border-[#1D2939]'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-medium text-slate-700 dark:text-[#98A2B3]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-[#0D121C] border border-slate-200 dark:border-[#1D2939] text-xs text-[#0F172A] dark:text-[#F4F7FA] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#22C7E8] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-medium text-slate-700 dark:text-[#98A2B3]">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className={`w-full px-3 py-2 rounded-md bg-slate-50 dark:bg-[#0D121C] border text-xs text-[#0F172A] dark:text-[#F4F7FA] focus:outline-none focus:border-[#0284C7] dark:focus:border-[#22C7E8] transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-200 dark:border-[#1D2939]'
                  }`}
                />
                {errors.message && <p className="text-[10px] text-red-500 mt-0.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3 rounded-md bg-emerald-500 text-white font-semibold text-xs transition-all hover:bg-emerald-600 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

