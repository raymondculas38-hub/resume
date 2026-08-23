import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { personalInfo } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="ABOUT"
          title="About Me"
          subtitle="Passionate about building digital solutions that make a difference."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Bio + objective */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-black dark:bg-green-600 inline-block" />
                Professional Summary
              </h3>
              <p className="text-slate-100 dark:text-slate-300 leading-relaxed mb-6">{personalInfo.summary}</p>

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-black dark:bg-green-600 inline-block" />
                Career Objective
              </h3>
              <p className="text-slate-100 dark:text-slate-300 leading-relaxed">{personalInfo.objective}</p>
            </GlassCard>
          </motion.div>

          {/* Right: Quick details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-5">Quick Details</h3>
              <dl className="space-y-3">
                {[
                  { label: 'Email', value: personalInfo.email },
                  { label: 'Phone', value: personalInfo.phone },
                  { label: 'Location', value: personalInfo.location },
                  { label: 'Experience', value: personalInfo.experience },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <dt className="text-sm font-semibold text-slate-200 dark:text-slate-400 w-24 flex-shrink-0">{label}</dt>
                    <dd className="text-sm text-white dark:text-slate-100 font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
