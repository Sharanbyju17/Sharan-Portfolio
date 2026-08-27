import './styles.css';
import { SmoothScroll } from './components/Layout/SmoothScroll';
import { CustomCursor } from './components/Layout/CustomCursor';
import { Navigation } from './components/Layout/Navigation';

import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { SkillsMatrix } from './components/Sections/SkillsMatrix';
import { Experience } from './components/Sections/Experience';
import { Education } from './components/Sections/Education';
import { Projects } from './components/Sections/Projects';
import { Process } from './components/Sections/Process';
import { Certificates } from './components/Sections/Certificates';
import { Contact } from './components/Sections/Contact';

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Hero />
        <About />
        <SkillsMatrix />
        <Experience />
        <Education />
        <Projects />
        <Process />
        <Certificates />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

export default App;