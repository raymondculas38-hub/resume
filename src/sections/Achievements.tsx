import { motion } from 'framer-motion';
import { FiAward, FiStar, FiZap, FiBookOpen } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { achievementsData } from '../data/resumeData';

const categoryIcon: Record<string, React.ReactNode> = {
  Award:              <FiAward size={18} />,
  Competition:        <FiZap size={18} />,
  Hackathon:          <FiZap size={18} />,
  Academic:           <FiBookOpen size={18} />,
  'Client Testimonial': <FiStar size={18} />,
};

const categoryStyle: Record<string, string> = {
  Award:              'from-amber-500 to-orange-500',
  Competition:        'from-violet-600 to-purple-500',
  Hackathon:          'from-cyan-500 to-blue-500',
  Academic:           'from-emerald-500 to-teal-400',
  'Client Testimonial': 'from-pink-500 to-rose-500',
};

const testimonials = achievementsData.filter(a => a.category === 'Client Testimonial');
const others       = achievementsData.filter(a => a.category !== 'Client Testimonial');

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Recognition"
          title="Achievements & Testimonials"
          subtitle="Awards, hackathon wins, academic distinctions, and what clients say."
        />

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {others.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full" hover>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryStyle[ach.category]} flex items-center justify-center text-white mb-4 shadow-md`}>
                  {categoryIcon[ach.category]}
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-2 block">{ach.category}</span>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm leading-snug">{ach.title}</h3>
                <p className="text-xs text-violet-500 dark:text-violet-400 font-semibold mb-3">{ach.organization} · {ach.date}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{ach.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">Client Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlassCard className="p-7">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FiStar key={s} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic mb-5">
                  "{t.description}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.authorName?.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">{t.authorName}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{t.authorTitle}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
