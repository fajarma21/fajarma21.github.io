import Nav from 'fajarma-react-lib/dist/fajarma/Nav';

import Section from '@/components/Section';

import Experience from './components/Experience';
import Profile from './components/Profile';
import Project from './components/Project';
import css from './View.module.scss';

const App = () => {
  return (
    <>
      <header className={css.header}>
        <Nav links={[]} />
      </header>
      <div className={css.container}>
        <Section>
          <Profile />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
        <Section title="Project">
          <Project />
        </Section>
      </div>
    </>
  );
};

export default App;
