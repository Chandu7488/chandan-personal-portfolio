import { ArrowRight, Download, Mail, Sparkles, Zap, ShieldCheck, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

/**
 * Hero Component
 * 
 * The main landing section of the portfolio.
 * Uses Tailwind flexbox, CSS radial gradients, glassmorphism cards, and interactive hover states.
 */
export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 shadow-lg shadow-black/40 mb-6 hover:border-cyan-500/40 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            {personal.badge}
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />
          <span className="hidden sm:inline-block text-xs text-cyan-400 font-mono">
            Noida, India
          </span>
        </div>

        {/* Name and Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            {personal.name}
          </span>
          <br />
          <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-300 font-sans mt-2 block">
            Software Developer & Full-Stack Engineer
          </span>
        </h1>

        {/* Narrative / Intro */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400 mb-8 leading-relaxed">
          Currently engineering at <span className="text-white font-medium">Magebytes Pvt. Ltd.</span> Sole owner of live production store <span className="text-cyan-300 font-mono text-sm underline decoration-cyan-500/40">store.magebytes.com</span>. Specialized in building ultra-fast web interfaces with <span className="text-slate-200 font-medium">React.js</span> & <span className="text-slate-200 font-medium">Tailwind CSS</span>, scaling <span className="text-slate-200 font-medium">Magento 2 (Hyvä)</span> performance up to <span className="text-emerald-400 font-semibold">99/100 Lighthouse</span>, and expanding into cloud-native <span className="text-indigo-300 font-medium">Adobe App Builder</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#performance"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Lighthouse 99 Case Study</span>
          </a>

          <a
            href={`mailto:${personal.email}?subject=Portfolio%20Inquiry%20-%20Software%20Developer`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/80 backdrop-blur-sm transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                {stat.helper}
              </div>
            </div>
          ))}
        </div>

        {/* Floating tech badge strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-slate-400">
          <span className="text-slate-400">Core Expertise:</span>
          {['React.js', 'Tailwind CSS', 'Magento 2 (Hyvä)', 'Adobe App Builder', 'Node.js / MERN', 'PHP & MySQL', 'Lighthouse 99'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
