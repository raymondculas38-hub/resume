import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { skillsData } from '../data/resumeData';
import { SkillCategoryType } from '../types';

const categories: SkillCategoryType[] = [
  'Frontend Development',
  'Backend Development',
  'Mobile Development',
  'Database Management',
  'Cloud Technologies',
  'UI/UX Design',
  'DevOps',
  'Version Control',
];

const categoryColors: Record<SkillCategoryType, string> = {
  'Frontend Development':  'from-violet-600 to-purple-500',
  'Backend Development':   'from-cyan-600 to-blue-500',
  'Mobile Development':    'from-pink-500 to-rose-500',
  'Database Management':   'from-amber-500 to-orange-500',
  'Cloud Technologies':    'from-sky-500 to-cyan-400',
  'UI/UX Design':          'from-emerald-500 to-teal-400',
  'DevOps':                'from-indigo-500 to-blue-400',
  'Version Control':       'from-slate-500 to-slate-400',
};

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryType | 'All'>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const grouped = categories.reduce<Record<string, typeof skillsData>>((acc, cat) => {
    const skills = (activeCategory === 'All' ? skillsData : filteredSkills).filter(s => s.category === cat);
    if (skills.length > 0) acc[cat] = skills;
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical competencies across the full development stack."
        />

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', ...categories] as const).map(cat => (
            <button
              key={cat}
              id={`skill-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                  : 'glass dark:bg-white/5 bg-slate-100 text-slate-600 dark:text-slate-400 hover:text-violet-500 hover:bg-violet-600/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(grouped).map(([cat, skills]) => (
            <GlassCard key={cat} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${categoryColors[cat as SkillCategoryType]} shadow-md flex-shrink-0`} />
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">{cat}</h3>
              </div>
              {skills.map(skill => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={categoryColors[skill.category]}
                />
              ))}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
