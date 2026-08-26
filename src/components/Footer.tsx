import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 dark:border-slate-800 py-10 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-white">
              Culas.dev
            </p>
            <p className="text-slate-200 dark:text-slate-400 text-sm mt-1">
              © {new Date().getFullYear()} Raymond Culas. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/raymondculas38-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/raymond-culas-592a97374"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="mailto:raymondculas38@gmail.com"
              className="w-9 h-9 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
              aria-label="Email"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
