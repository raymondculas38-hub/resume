import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiExternalLink, FiUser, FiLock } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { experienceData } from '../data/resumeData';


export default function Experience() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="PROJECT"
          title="My Projects"
          subtitle="All of these projects are my personal projects only. They do not include any freelance projects, as those projects are confidential."
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
              <div className="absolute -left-12 top-6 w-9 h-9 rounded-full bg-black dark:bg-green-600 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-black">
                <FiBriefcase size={14} className="text-white" />
              </div>

              <GlassCard className={`relative overflow-hidden ${exp.image ? 'p-0' : 'p-6 sm:p-8'}`}>
                {/* Background image with overlay */}
                {exp.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${exp.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                  </>
                )}
                <div className={`relative z-10 ${exp.image ? 'p-6 sm:p-8' : ''}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-1">{exp.position}</h3>
                    <p className="text-white dark:text-green-400 font-bold text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-black text-white dark:bg-green-600 border border-white/20">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-100 dark:text-slate-300 font-medium">
                      <FiCalendar size={12} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((d, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-100 dark:text-slate-200 leading-relaxed font-medium">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-white dark:bg-green-400 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-white/20 dark:bg-white/10 text-white border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo Links with Credentials */}
                {exp.demoLinks && exp.demoLinks.length > 0 && (
                  <div className="mt-5 p-4 rounded-xl bg-black/40 dark:bg-black/60 border border-white/20 dark:border-green-500/40">
                    <p className="text-sm font-bold text-white dark:text-green-400 mb-3 flex items-center gap-2">
                      {exp.demoLinks.some(l => l.role === 'Live Site') ? (
                        <><FiExternalLink size={13} /> Live Demo</>
                      ) : (
                        <><FiLock size={13} /> Live Demo Access</>
                      )}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.demoLinks.map(link => (
                        <a
                          key={link.role}
                          href={link.loginUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-lg bg-white/10 dark:bg-zinc-800 border border-white/20 dark:border-zinc-700 hover:border-green-400 hover:scale-[1.02] transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {link.role === 'Live Site' ? (
                              <FiExternalLink size={12} className="text-white dark:text-green-400" />
                            ) : (
                              <FiUser size={12} className="text-white dark:text-green-400" />
                            )}
                            <span className="text-sm font-bold text-white group-hover:text-green-300 transition-colors">
                              {link.role === 'Live Site' ? 'Visit Live Site' : `${link.role} Portal`}
                            </span>
                            <FiExternalLink size={11} className="ml-auto text-white/80 group-hover:text-green-300 transition-colors" />
                          </div>
                          {link.role !== 'Live Site' && (
                            <div className="text-xs text-slate-100 dark:text-slate-300 font-mono space-y-1">
                              <p>📧 {link.email}</p>
                              <p>🔑 {link.password}</p>
                            </div>
                          )}
                          {link.role === 'Live Site' && (
                            <p className="text-xs text-slate-200 dark:text-slate-400 italic">
                              ⚠️ Designed for desktop and laptop viewing
                            </p>
                          )}
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
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
