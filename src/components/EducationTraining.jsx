import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * EducationTraining Component
 * 
 * Displays Chandan's academic credentials (MCA, BCA) and professional training.
 */
export default function EducationTraining() {
  const { education, certificationsAndTraining } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Formal Training</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistent academic excellence paired with specialized hands-on software development training.
          </p>
        </div>

        {/* Education & Training Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Degrees */}
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>University Degrees</span>
            </div>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.degree}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 shrink-0">
                    {item.score}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-300 mb-1">
                  {item.institution}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-mono">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{item.period}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Specialized Training */}
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-wider text-indigo-400 font-mono mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Specialized Training</span>
            </div>

            {certificationsAndTraining.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 shrink-0">
                    MERN Stack
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-300 mb-1">
                  {item.provider}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-mono">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{item.period}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Summary Pill */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/30 to-slate-900/50 border border-indigo-800/30 text-xs text-slate-300 leading-relaxed">
              <span className="text-indigo-400 font-semibold block mb-1">Continuous Learning:</span>
              "Currently deepening architectural mastery in Adobe App Builder, micro-frontends, and serverless runtime actions."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
