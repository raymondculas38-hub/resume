import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
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
    <div className="noise-bg relative min-h-screen">
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
    </div>
  );
}
