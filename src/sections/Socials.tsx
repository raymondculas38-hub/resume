import { motion } from 'framer-motion';
import {
  FiFacebook, FiInstagram, FiLinkedin, FiGithub, FiYoutube, FiGlobe, FiMail, FiTwitter
} from 'react-icons/fi';
import { SiGitlab } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { socialLinks } from '../data/resumeData';
import { SocialPlatform } from '../types';

const platformConfig: Record<SocialPlatform, { icon: React.ReactNode; color: string; bg: string }> = {
  Facebook:          { icon: <FiFacebook size={24} />,  color: 'hover:text-blue-500',   bg: 'group-hover:bg-blue-500/10' },
  Instagram:         { icon: <FiInstagram size={24} />, color: 'hover:text-pink-500',   bg: 'group-hover:bg-pink-500/10' },
  LinkedIn:          { icon: <FiLinkedin size={24} />,  color: 'hover:text-sky-500',    bg: 'group-hover:bg-sky-500/10' },
  GitHub:            { icon: <FiGithub size={24} />,    color: 'hover:text-slate-300',  bg: 'group-hover:bg-slate-500/10' },
  GitLab:            { icon: <SiGitlab size={24} />,    color: 'hover:text-orange-500', bg: 'group-hover:bg-orange-500/10' },
  'X (Twitter)':     { icon: <FiTwitter size={24} />,   color: 'hover:text-slate-200',  bg: 'group-hover:bg-slate-500/10' },
  YouTube:           { icon: <FiYoutube size={24} />,   color: 'hover:text-red-500',    bg: 'group-hover:bg-red-500/10' },
  'Portfolio Website':{ icon: <FiGlobe size={24} />,   color: 'hover:text-violet-400', bg: 'group-hover:bg-violet-500/10' },
  Email:             { icon: <FiMail size={24} />,      color: 'hover:text-cyan-400',   bg: 'group-hover:bg-cyan-500/10' },
};

export default function Socials() {
  return (
    <section id="socials" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Let's Connect"
          title="Social & Professional Links"
          subtitle="Find me across the web. I'm always happy to connect."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {socialLinks.map((link, i) => {
            const config = platformConfig[link.platform];
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                id={`social-${link.platform.replace(/\s+/g, '-').toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className={`group glass dark:bg-white/5 bg-white border border-slate-200 dark:border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 ${config.bg}`}
              >
                <span className={`text-slate-600 dark:text-slate-400 transition-colors duration-200 ${config.color}`}>
                  {config.icon}
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center leading-tight">
                  {link.platform}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
