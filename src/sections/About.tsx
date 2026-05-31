import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiUsers, FiStar } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { personalInfo, projectsData, skillsData } from '../data/resumeData';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { label: 'Total Projects', value: 0, icon: FiCode, color: 'from-violet-600 to-purple-600', suffix: '+' },
  { label: 'Years Experience', value: 0, icon: FiBriefcase, color: 'from-cyan-500 to-blue-500', suffix: '+' },
  { label: 'Freelance Clients', value: 12, icon: FiUsers, color: 'from-pink-500 to-rose-500', suffix: '+' },
  { label: 'Technologies', value: 0, icon: FiStar, color: 'from-amber-500 to-orange-500', suffix: '+' },
];

function StatCard({ label, value, Icon, color, suffix }: { label: string; value: number; Icon: React.FC<{size?: number}>; color: string; suffix?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <GlassCard className="p-6 text-center">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
        <Icon size={22} />
      </div>
      {/* @ts-expect-error ref typing */}
      <p ref={ref} className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
        {count}{suffix}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
    </GlassCard>
  );
}

const techHighlights = ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'React Native'];

export default function About() {
  const dynamicStats = [
    { ...stats[0], value: projectsData.length },
    { ...stats[1], value: personalInfo.experienceYears },
    { ...stats[2], value: 12 },
    { ...stats[3], value: skillsData.length },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Who I Am"
          title="About Me"
          subtitle="Passionate about building digital solutions that make a difference."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {dynamicStats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} Icon={s.icon} color={s.color} suffix={s.suffix} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Bio + objective */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-cyan-500 inline-block" />
                Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{personalInfo.summary}</p>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-gradient-to-br from-pink-500 to-violet-600 inline-block" />
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{personalInfo.objective}</p>
            </GlassCard>
          </motion.div>

          {/* Right: Tech highlights + contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {techHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-violet-600/10 text-violet-600 dark:text-violet-300 border border-violet-500/20 hover:bg-violet-600/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Quick Details</h3>
              <dl className="space-y-3">
                {[
                  { label: 'Email', value: personalInfo.email },
                  { label: 'Phone', value: personalInfo.phone },
                  { label: 'Location', value: personalInfo.location },
                  { label: 'Experience', value: `${personalInfo.experienceYears}+ Years` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <dt className="text-sm font-semibold text-slate-500 dark:text-slate-400 w-24 flex-shrink-0">{label}</dt>
                    <dd className="text-sm text-slate-700 dark:text-slate-200 font-medium">{value}</dd>
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
