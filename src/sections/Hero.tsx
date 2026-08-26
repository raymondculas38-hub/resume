import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/resumeData';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

interface HeroProps {
  theme: string;
}

export default function Hero({ theme }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const githubUrl = socialLinks.find(s => s.platform === 'GitHub')?.url ?? '#';
  const linkedinUrl = socialLinks.find(s => s.platform === 'LinkedIn')?.url ?? '#';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (theme === 'light') {
      setVideoVisible(true);
      if (video.currentTime < 0.1 || video.ended) {
        video.currentTime = 0;
      }
      video.playbackRate = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Playback failed", error);
        });
      }
      return () => {};
    } else {
      // Reverse playback using the 'seeked' event to avoid browser rendering freezes
      video.pause();

      const handleSeeked = () => {
        if (video.currentTime > 0) {
          // Decrement current time smoothly by a frame interval
          video.currentTime = Math.max(0, video.currentTime - 0.06);

          if (video.currentTime < 0.6) {
            setVideoVisible(false);
          }
        }
      };

      video.addEventListener('seeked', handleSeeked);

      // Start the reverse playback chain
      video.currentTime = Math.max(0, video.currentTime - 0.06);

      return () => {
        video.removeEventListener('seeked', handleSeeked);
      };
    }
  }, [theme]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            <motion.p variants={item} className="text-slate-200 dark:text-slate-400 font-semibold text-sm sm:text-base tracking-widest uppercase mb-3">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight">
              {personalInfo.fullName}
            </motion.h1>

            <motion.h2 variants={item} className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-100 dark:text-slate-300 mb-6">
              {personalInfo.title}
            </motion.h2>

            <motion.p variants={item} className="text-slate-100 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-200 dark:text-slate-400 mb-8">
              <FiMapPin size={14} />
              <span>{personalInfo.location}</span>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-contact-btn"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white dark:bg-green-600 dark:text-white font-bold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
              >
                <FiMail size={16} />
                Contact Me
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-btn"
                className="w-11 h-11 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="w-11 h-11 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <FiLinkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex-shrink-0 relative"
          >
            {/* Ring border */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 border-4 border-black dark:border-green-600 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                {/* The Static Photo (Dark Mode / Initial State) */}
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-[1000ms] ease-in-out z-10"
                  style={{
                    opacity: videoVisible ? 0 : 1,
                  }}
                />
                {/* The Video (White Mode / Living state) */}
                <video
                  ref={videoRef}
                  src="/assets/kling_20260531_作品_Cinematic__2389_0.mp4"
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-[1000ms] ease-in-out z-20"
                  style={{
                    opacity: videoVisible ? 1 : 0,
                    pointerEvents: videoVisible ? 'auto' : 'none',
                  }}
                  muted
                  playsInline
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 no-print"
        >
          <span className="text-xs text-slate-200 dark:text-slate-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-white dark:bg-green-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
