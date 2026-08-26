import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'OUTSIDE IDE', href: '#outside-ide' },
  { label: 'TECH STACK', href: '#techstack' },
  { label: 'PROJECT', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#socials' },
];

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);

    // Close mobile menu first, then scroll after the exit animation settles
    if (mobileOpen) {
      setMobileOpen(false);
      // Wait for the Framer Motion exit animation to complete before scrolling
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }, 350);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass bg-[#005f5b]/90 dark:bg-black/90 shadow-lg shadow-black/20 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-black dark:bg-green-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">RC</span>
          <span className="font-bold text-white text-sm hidden sm:block">Raymond.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold tracking-wider transition-all duration-200 bg-black text-white hover:bg-zinc-800 dark:bg-green-600 dark:text-white dark:hover:bg-green-500 shadow-sm ${
                  active === link.href ? 'ring-2 ring-white dark:ring-green-300 scale-105' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="theme-toggle p-2 rounded-lg bg-black text-white dark:bg-green-600 dark:text-white hover:opacity-80 transition-all duration-200 hover:scale-110 shadow-sm"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>



          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(o => !o)}
            className="lg:hidden p-2 rounded-lg text-white bg-black dark:bg-green-600 transition-colors"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass bg-[#005f5b] dark:bg-black border-t border-white/10 px-4 pb-4 pt-2 space-y-2"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 px-3 rounded-lg text-xs font-extrabold tracking-wider bg-black text-white dark:bg-green-600 dark:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
