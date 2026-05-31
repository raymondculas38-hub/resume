import { motion } from 'framer-motion';
import {
  SiPython, SiPhp, SiTypescript, SiJavascript,
  SiHtml5, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiDart, SiFlutter,
  SiMysql, SiPostgresql, SiFirebase, SiGithub, SiGit, SiFigma
} from 'react-icons/si';
import { FaAws, FaJava, FaRocket } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import SectionTitle from '../components/SectionTitle';
import { techStackGrid } from '../data/resumeData';

type IconKey = keyof typeof iconMap;

const iconMap: Record<string, React.ReactNode> = {
  FaRocket:           <FaRocket size={32} />,
  SiVisualstudiocode: <VscVscode size={32} />,
  FaJava:             <FaJava size={32} />,
  SiPython:           <SiPython size={32} />,
  SiPhp:              <SiPhp size={32} />,
  SiTypescript:       <SiTypescript size={32} />,
  SiJavascript:       <SiJavascript size={32} />,
  SiHtml5:            <SiHtml5 size={32} />,
  SiTailwindcss:      <SiTailwindcss size={32} />,
  SiNextdotjs:        <SiNextdotjs size={32} />,
  SiNodedotjs:        <SiNodedotjs size={32} />,
  SiDart:             <SiDart size={32} />,
  SiFlutter:          <SiFlutter size={32} />,
  SiMysql:            <SiMysql size={32} />,
  SiPostgresql:       <SiPostgresql size={32} />,
  SiFirebase:         <SiFirebase size={32} />,
  SiGithub:           <SiGithub size={32} />,
  SiGit:              <SiGit size={32} />,
  FaAws:              <FaAws size={32} />,
  SiFigma:            <SiFigma size={32} />
};

const techColors: Record<string, string> = {
  TypeScript:   'hover:text-blue-500 hover:border-blue-500/40',
  JavaScript:   'hover:text-yellow-400 hover:border-yellow-500/40',
  React:        'hover:text-cyan-400 hover:border-cyan-500/40',
  'Next.js':    'hover:text-slate-200 hover:border-slate-400/40',
  'Node.js':    'hover:text-emerald-500 hover:border-emerald-500/40',
  'Express.js': 'hover:text-slate-300 hover:border-slate-500/40',
  NestJS:       'hover:text-rose-500 hover:border-rose-500/40',
  PHP:          'hover:text-indigo-400 hover:border-indigo-500/40',
  MySQL:        'hover:text-blue-400 hover:border-blue-500/40',
  PostgreSQL:   'hover:text-sky-400 hover:border-sky-500/40',
  MongoDB:      'hover:text-emerald-400 hover:border-emerald-500/40',
  Firebase:     'hover:text-amber-400 hover:border-amber-500/40',
  Flutter:      'hover:text-cyan-400 hover:border-cyan-500/40',
  'React Native': 'hover:text-cyan-400 hover:border-cyan-500/40',
  Docker:       'hover:text-blue-400 hover:border-blue-500/40',
  Git:          'hover:text-orange-500 hover:border-orange-500/40',
  GitHub:       'hover:text-slate-200 hover:border-slate-400/40',
  AWS:          'hover:text-amber-400 hover:border-amber-500/40',
  Azure:        'hover:text-blue-500 hover:border-blue-500/40',
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tools & Technologies"
          title="Tech Stack Showcase"
          subtitle="Every technology and tool I've mastered in my development journey."
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {techStackGrid.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -5, scale: 1.08 }}
              id={`tech-${tech.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
              className={`glass dark:bg-white/5 bg-white border border-slate-200 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2.5 transition-all duration-300 cursor-default ${techColors[tech.name] || 'hover:text-violet-400 hover:border-violet-500/40'}`}
            >
              <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">
                {iconMap[tech.iconName as IconKey]}
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center leading-tight transition-colors duration-300">
                {tech.name}
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-600 text-center">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
