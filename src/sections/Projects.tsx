import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiX, FiCalendar, FiUser, FiLock } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { projectsData } from '../data/resumeData';
import { ProjectFilterType, ProjectDifficulty } from '../types';

const filterTabs: Array<'All' | ProjectFilterType> = [
  'All', 'Web Development', 'Mobile Development', 'Capstone', 'Freelance', 'Personal Projects',
];

const difficultyColor: Record<ProjectDifficulty, string> = {
  Beginner:     'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Advanced:     'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

const statusColor: Record<string, string> = {
  Completed:   'bg-emerald-500/10 text-emerald-400',
  'In Progress': 'bg-amber-500/10 text-amber-400',
  Maintained:  'bg-cyan-500/10 text-cyan-400',
  Beta:        'bg-violet-500/10 text-violet-400',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectFilterType>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projectsData.filter(p => {
      const matchesFilter = activeFilter === 'All' || p.type === activeFilter;
      const matchesQuery  = query === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase()));
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section id="projects" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Portfolio"
          title="My Projects"
          subtitle="From beginner exercises to advanced enterprise systems — here's everything I've built."
        />

        {/* Search + Filter controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          {/* Search */}
          <div className="relative w-full sm:max-w-sm">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              id="project-search"
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search projects or technologies..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl glass dark:bg-white/5 bg-white border border-slate-200 dark:border-white/10 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <FiX size={14} />
              </button>
            )}
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filterTabs.map(tab => (
              <button
                key={tab}
                id={`proj-filter-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                    : 'glass dark:bg-white/5 bg-white text-slate-600 dark:text-slate-400 hover:text-violet-500 hover:bg-violet-600/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-400 mb-6">
          Showing <span className="font-bold text-violet-400">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Cards grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="glass dark:bg-white/5 bg-white rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col"
              >
                {/* Screenshot */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Overlay badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${difficultyColor[project.difficulty]}`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{project.name}</h3>
                    <span className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                      <FiCalendar size={10} />
                      {project.date}
                    </span>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-violet-600/10 text-violet-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Demo Credentials */}
                  {project.credentials && project.credentials.length > 0 && (
                    <div className="mb-4 p-3 rounded-xl bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/20">
                      <p className="text-xs font-bold text-violet-400 mb-2 flex items-center gap-1.5">
                        <FiLock size={11} /> Demo Credentials
                      </p>
                      <div className="space-y-2">
                        {project.credentials.map(cred => (
                          <a
                            key={cred.role}
                            href={cred.loginUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-violet-500/40 transition-colors group"
                          >
                            <div className="flex items-center gap-1.5 mb-1">
                              <FiUser size={10} className="text-violet-400" />
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-violet-400 transition-colors">
                                {cred.role} Login
                              </span>
                              <FiExternalLink size={9} className="ml-auto text-slate-400 group-hover:text-violet-400 transition-colors" />
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono leading-relaxed">
                              <span>{cred.email}</span> / <span>{cred.password}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-200 dark:border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`proj-github-${project.id}`}
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-violet-500 transition-colors"
                    >
                      <FiGithub size={14} /> Code
                    </a>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`proj-demo-${project.id}`}
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No projects found for "<span className="text-violet-400">{query}</span>"</p>
            <button onClick={() => { setQuery(''); setActiveFilter('All'); }} className="mt-4 text-sm text-violet-500 hover:underline">Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
