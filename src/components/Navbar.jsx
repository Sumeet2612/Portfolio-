import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const activeSection = useActiveSection(['home', ...navItems.map(item => item.id)], 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 editorial-nav">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="font-extrabold text-sm sm:text-base tracking-tight text-gray-900 dark:text-white hover:text-blue-500 transition-colors"
          >
            Sumeet Raj
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-blue-500 font-semibold'
                      : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* GitHub Link */}
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* Resume / Contact Action */}
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sumeet_SDE_Resume.pdf"
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-gray-900 transition-all hover:scale-105 hover:bg-amber-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-1.5 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-4 border-gray-900 bg-white px-4 py-4 space-y-3 dark:border-white dark:bg-gray-950">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm font-medium py-1.5 px-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-slate-200/60 dark:bg-[#1D2939] text-[#0284C7] dark:text-[#22C7E8]'
                      : 'text-slate-600 dark:text-[#98A2B3]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-slate-200 dark:border-[#1D2939] flex items-center justify-between text-xs text-slate-600 dark:text-[#98A2B3]">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#0F172A] dark:hover:text-[#F4F7FA]"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F172A] dark:hover:text-[#F4F7FA]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

