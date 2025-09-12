import Section from '@/components/Section';

import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Project from './components/Project';
import css from './View.module.scss';

const App = () => {
  return (
    <div className={css.container}>
      <Navbar />
      <Section vCenter>
        <Profile />
      </Section>
      <Section title="Experience">
        <Experience />
      </Section>
      <Section title="Project">
        <Project />
      </Section>
    </div>
  );
};

export default App;
