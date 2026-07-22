import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiPhp, SiTypescript, SiJavascript,
  SiHtml5, SiTailwindcss, SiDart, SiFlutter,
  SiMysql, SiPostgresql, SiFirebase, SiGithub, SiGit, SiFigma, SiJupyter
} from 'react-icons/si';
import { FaJava, FaRocket } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
  SiDart:             <SiDart size={32} />,
  SiFlutter:          <SiFlutter size={32} />,
  SiMysql:            <SiMysql size={32} />,
  SiPostgresql:       <SiPostgresql size={32} />,
  SiFirebase:         <SiFirebase size={32} />,
  SiGithub:           <SiGithub size={32} />,
  SiGit:              <SiGit size={32} />,
  SiFigma:            <SiFigma size={32} />,
  SiJupyter:          <SiJupyter size={32} />
};

const techColors: Record<string, string> = {
  TypeScript:   'hover:text-blue-500 hover:border-blue-500/40',
  JavaScript:   'hover:text-yellow-400 hover:border-yellow-500/40',
  React:        'hover:text-cyan-400 hover:border-cyan-500/40',
  PHP:          'hover:text-indigo-400 hover:border-indigo-500/40',
  MySQL:        'hover:text-blue-400 hover:border-blue-500/40',
  PostgreSQL:   'hover:text-sky-400 hover:border-sky-500/40',
  Firebase:     'hover:text-amber-400 hover:border-amber-500/40',
  Flutter:      'hover:text-cyan-400 hover:border-cyan-500/40',
  Git:          'hover:text-orange-500 hover:border-orange-500/40',
  GitHub:       'hover:text-slate-200 hover:border-slate-400/40',
  Jupyter:      'hover:text-orange-600 hover:border-orange-500/40'
};

export default function TechStack() {
  const n = techStackGrid.length;
  // Duplicate array 3 times for seamless infinite loop
  const extendedItems = [...techStackGrid, ...techStackGrid, ...techStackGrid];

  const [currentIndex, setCurrentIndex] = useState(n);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // IntersectionObserver to only rotate when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Responsive items count configuration
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1280) setVisibleCount(6);
      else if (w >= 1024) setVisibleCount(5);
      else if (w >= 768) setVisibleCount(4);
      else if (w >= 640) setVisibleCount(3);
      else setVisibleCount(2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite auto-rotate slide timer (1.5 seconds) - Pauses when hovered or out of viewport
  useEffect(() => {
    if (isHovered || !isVisible) return;
    const interval = setInterval(() => {
      handleNext();
    }, 1500);
    return () => clearInterval(interval);
  }, [isHovered, isVisible]);

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= n * 2) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - n);
    } else if (currentIndex < n) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + n);
    }
  };

  // Re-enable CSS transition in the next tick using setTimeout
  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  // Touch handlers for mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  // Pagination Dot Navigation
  const handleDotClick = (index: number) => {
    setCurrentIndex(n + index);
  };

  const activeDotIndex = (currentIndex - n) % n;

  return (
    <section id="techstack" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tools & Technologies"
          title="Tech Stack Showcase"
          subtitle="Every technology and tool I've mastered in my development journey."
        />

        {/* Carousel Container */}
        <div 
          className="relative px-12 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Viewport wrapper */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
                transition: transitionEnabled ? 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedItems.map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="px-2 flex-shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div
                    className={`glass dark:bg-white/5 bg-white border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 cursor-default select-none ${techColors[tech.name] || 'hover:text-violet-400 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10'}`}
                  >
                    <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">
                      {iconMap[tech.iconName as IconKey] || <FaRocket size={32} />}
                    </span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 text-center leading-tight transition-colors duration-300">
                      {tech.name}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 text-center font-medium">{tech.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/40 hover:scale-110 transition-all duration-200 shadow-md md:opacity-0 md:group-hover:opacity-100"
            aria-label="Previous tech stack"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/40 hover:scale-110 transition-all duration-200 shadow-md md:opacity-0 md:group-hover:opacity-100"
            aria-label="Next tech stack"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {techStackGrid.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeDotIndex === index 
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 w-6 shadow-md shadow-violet-500/20' 
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
