import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

/**
 * Footer Component
 * 
 * Provides quick links, copyright, and smooth back-to-top scrolling.
 */
export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-mono text-base font-semibold text-white">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span>
                <span className="text-cyan-400">chandan</span>
                <span className="text-slate-400">.dev</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              Software Developer specializing in React, Tailwind CSS, Magento 2 (Hyvä), and Adobe App Builder.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center">
          <div>
            &copy; {new Date().getFullYear()} Chandan Kumar Sharma. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono">
            <span>Built with React + Tailwind CSS • Deployed on Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
