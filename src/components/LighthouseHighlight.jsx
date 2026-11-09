import { Zap, Gauge, CheckCircle2, TrendingUp, Sparkles, Shield, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * LighthouseHighlight Component
 * 
 * Visualizes the real performance jump on production websites.
 * Highlights Chandan's Core Web Vitals optimization skills.
 */
export default function LighthouseHighlight() {
  const { lighthouseComparison } = portfolioData;

  const scorePillars = [
    { title: "Performance", score: "99", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
    { title: "Accessibility", score: "100", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
    { title: "Best Practices", score: "100", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
    { title: "SEO", score: "100", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
  ];

  return (
    <section id="performance" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Gauge className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Performance Engineering</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Fast web applications mean higher user retention and better search rankings. Here is how I transformed production platforms from sluggish scores into near-perfect Lighthouse benchmarks.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Top row: 4 Lighthouse circular badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pb-8 border-b border-slate-800">
            {scorePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors group"
              >
                <div className={`w-16 h-16 rounded-full ${pillar.bg} border-2 ${pillar.border} flex items-center justify-center font-mono text-2xl font-black ${pillar.color} shadow-lg shadow-emerald-500/10 mb-2 group-hover:scale-110 transition-transform`}>
                  {pillar.score}
                </div>
                <span className="text-xs font-medium text-slate-300">
                  {pillar.title}
                </span>
                <span className="text-[10px] text-emerald-400/80 font-mono mt-0.5">
                  Green Zone (90-100)
                </span>
              </div>
            ))}
          </div>

          {/* Middle: Before & After Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {lighthouseComparison.metrics.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-400 font-mono border border-emerald-800/60">
                    +{(item.after - item.before)} pts
                  </span>
                </div>

                <div className="font-semibold text-white text-sm mb-4">
                  {item.site}
                </div>

                {/* Progress bar comparison */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Before Optimization:</span>
                      <span className="text-amber-400 font-mono font-medium">{item.before} / 100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-amber-500/70"
                        style={{ width: `${item.before}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-medium">After Optimization:</span>
                      <span className="text-emerald-400 font-mono font-bold">{item.after} / 100</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-md shadow-emerald-500/40"
                        style={{ width: `${item.after}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom: Techniques Applied */}
          <div className="bg-slate-950/40 rounded-2xl p-6 border border-slate-800/80">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Key Optimization Strategies Applied:</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              {lighthouseComparison.improvements.map((imp, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
