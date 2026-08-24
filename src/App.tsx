import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ClickRipple from './components/ClickRipple';
import CursorGlow from './components/CursorGlow';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Socials from './sections/Socials';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-[#007A75] dark:bg-black text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Socials />
      </main>
      <Footer />
      <ScrollToTop />
      <ClickRipple />
      <CursorGlow />
    </div>
  );
}
