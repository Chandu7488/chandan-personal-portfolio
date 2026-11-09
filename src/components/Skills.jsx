import { Wrench, Check, Sparkles, Code2, Database, ShoppingBag, Gauge } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Skills Component
 * 
 * Shows Chandan's categorized technical toolkit.
 * Highlights both MERN stack capabilities and specialized Hyvä / Adobe App Builder tools.
 */
export default function Skills() {
  const { skillCategories } = portfolioData;

  const categoryIcons = {
    "Frontend Development": Code2,
    "Backend & Cloud": Database,
    "Databases & E-Commerce": ShoppingBag,
    "Performance & Tools": Gauge,
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Technology Stack</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A balanced toolkit combining high-performance modern web development with enterprise e-commerce platforms.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Code2;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 backdrop-blur-xl shadow-xl transition-all"
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Badges List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl flex items-center justify-between border transition-all ${
                        skill.highlight
                          ? 'bg-slate-950/90 border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                          : 'bg-slate-950/50 border-slate-800/80'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight ? (
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        ) : (
                          <Check className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                        <span className={`text-xs sm:text-sm font-medium ${skill.highlight ? 'text-white' : 'text-slate-300'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        skill.highlight
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                          : 'bg-slate-900 text-slate-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
