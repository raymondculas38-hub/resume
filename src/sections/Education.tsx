import { motion } from 'framer-motion';
import { FiAward, FiCalendar } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { educationData, certificationsData } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Academic & Credentials"
          title="Education & Certifications"
          subtitle="My academic background and professional certifications that form my knowledge base."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                <FiAward size={16} className="text-white" />
              </span>
              Education
            </h3>
            <div className="space-y-5">
              {educationData.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">{edu.school}</h4>
                        <p className="text-violet-500 dark:text-violet-400 text-sm font-semibold">{edu.degree}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                        <FiCalendar size={11} />
                        {edu.year}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((ach, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <FiAward size={16} className="text-white" />
              </span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <GlassCard className="p-5 flex items-center gap-5" hover>
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800 p-1">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{cert.title}</h4>
                      <p className="text-violet-500 dark:text-violet-400 text-xs font-semibold mt-0.5">{cert.organization}</p>
                      <span className="inline-flex items-center gap-1 mt-2 text-xs text-slate-400">
                        <FiCalendar size={10} /> {cert.date}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
