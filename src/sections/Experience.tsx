import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiExternalLink, FiUser, FiLock } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { experienceData } from '../data/resumeData';
import { ExperienceType } from '../types';

const typeColors: Record<ExperienceType, string> = {
  Professional: 'from-violet-600 to-purple-500',
  Freelance:    'from-cyan-500 to-blue-500',
  Internship:   'from-emerald-500 to-teal-400',
  Personal:     'from-pink-500 to-rose-500',
  Academic:     'from-amber-500 to-orange-500',
  Education:    'from-sky-500 to-cyan-400',
};

const typeBadge: Record<ExperienceType, string> = {
  Professional: 'bg-violet-600/10 text-violet-500 border-violet-500/20',
  Freelance:    'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  Internship:   'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  Personal:     'bg-pink-500/10 text-pink-500 border-pink-500/20',
  Academic:     'bg-amber-500/10 text-amber-500 border-amber-500/20',
  Education:    'bg-sky-500/10 text-sky-500 border-sky-500/20',
};

export default function Experience() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Portfolio"
          title="My Projects"
          subtitle="A timeline of my projects and academic work."
        />

        <div className="timeline-line pl-12 space-y-8">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className={`absolute -left-12 top-6 w-9 h-9 rounded-full bg-gradient-to-br ${typeColors[exp.type]} flex items-center justify-center shadow-lg ring-4 ring-slate-50 dark:ring-slate-950`}>
                <FiBriefcase size={14} className="text-white" />
              </div>

              <GlassCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.position}</h3>
                    <p className="text-violet-500 dark:text-violet-400 font-semibold text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeBadge[exp.type]}`}>
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <FiCalendar size={12} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((d, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold glass dark:bg-white/5 bg-slate-100 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo Links with Credentials */}
                {exp.demoLinks && exp.demoLinks.length > 0 && (
                  <div className="mt-5 p-4 rounded-xl bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/20">
                    <p className="text-sm font-bold text-violet-400 mb-3 flex items-center gap-2">
                      <FiLock size={13} /> Live Demo Access
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.demoLinks.map(link => (
                        <a
                          key={link.role}
                          href={link.loginUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-violet-500/50 hover:shadow-md hover:shadow-violet-500/10 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <FiUser size={12} className="text-violet-400" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-violet-400 transition-colors">
                              {link.role} Portal
                            </span>
                            <FiExternalLink size={11} className="ml-auto text-slate-400 group-hover:text-violet-400 transition-colors" />
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono space-y-0.5">
                            <p>📧 {link.email}</p>
                            <p>🔑 {link.password}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Showcase Images */}
                {exp.images && exp.images.length > 0 && (
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.images.map((imgUrl, idx) => (
                      <div key={idx} className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/60 p-2 flex items-center justify-center">
                        <img
                          src={imgUrl}
                          alt={`${exp.position} screenshot ${idx + 1}`}
                          className="w-full h-auto max-h-[420px] object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Showcase Video */}
                {exp.video && (
                  <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/60 p-2 flex items-center justify-center">
                    <video
                      src={exp.video}
                      controls
                      playsInline
                      className="w-full h-auto max-h-[480px] rounded-lg shadow-md"
                    />
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
