import { User, Code2, ShoppingCart, Cloud, GraduationCap, MapPin, Building, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * About Component
 * 
 * Tells Chandan's career journey, combining modern React/MERN fundamentals,
 * production e-commerce engineering, and modern cloud technologies.
 */
export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Code2,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      title: "Modern Frontend & MERN Foundation",
      description: "Trained intensively in React.js, Node.js, Express, and MongoDB. Passionate about component reusability, clean hooks, state management, and mobile-first Tailwind design.",
    },
    {
      icon: ShoppingCart,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      title: "High-Performance E-Commerce (Hyvä)",
      description: "Sole owner of live production store store.magebytes.com. Master of Hyvä themes, cutting bloat, building custom PHP backend modules, and driving Lighthouse scores to 99.",
    },
    {
      icon: Cloud,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      title: "Cloud & Adobe App Builder",
      description: "Actively researching and integrating Adobe App Builder — leveraging serverless Node.js actions, event-driven architectures, and headless React frontends.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Web Apps with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Precision & Speed</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging modern JavaScript frameworks with real-world production systems. Here's a look at my background and how I build software.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-xl relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-cyan-500/20">
                CS
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{personal.name}</h3>
                <p className="text-xs text-cyan-400 font-mono">{personal.role} @ {personal.company}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {personal.bio}
            </p>

            {/* Quick Metadata list */}
            <div className="space-y-3 pt-6 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Current Role:
                </span>
                <span className="font-medium text-white">{personal.role}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-indigo-400" /> Company:
                </span>
                <span className="font-medium text-white">{personal.company}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> Education:
                </span>
                <span className="font-medium text-white">MCA (8.075 CGPA)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Location:
                </span>
                <span className="font-medium text-white">{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right 3 Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${pillar.bg} ${pillar.color} border ${pillar.border} shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Quote / Philosophy Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-900/40 border border-cyan-800/30 text-xs sm:text-sm text-slate-300">
              <span className="text-cyan-400 font-mono font-semibold">My Goal: </span>
              "To write human-readable, maintainable code that delivers blistering-fast load times and an exceptional user experience on every device."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
