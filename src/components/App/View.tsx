import { checkIsMobile } from 'fajarma-package';
import Section from '@/components/Section';
import useSectionStore from '@/stores/useSection';

import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Project from './components/Project';
import css from './View.module.scss';

const App = () => {
  const isMobile = checkIsMobile();
  const active = useSectionStore((state) => state.active);

  const list = [
    {
      vCenter: true,
      comp: <Profile />,
    },
    {
      title: 'Experiences',
      comp: <Experience />,
    },
    {
      title: 'Projects',
      stickyTitle: true,
      comp: (
        <Project isMobile={isMobile}>
          <Footer />
        </Project>
      ),
    },
  ];

  return (
    <>
      <div className={css.backgroundGroup} />
      <div className={css.container}>
        <Navbar />
        <div
          className={css.progress}
          style={{ width: `${((active - 1) / (list.length - 1)) * 100}%` }}
        />
        {list.map(({ comp, ...resItem }, index) => (
          <Section key={`section-${index}`} index={index + 1} {...resItem}>
            {comp}
          </Section>
        ))}
      </div>
    </>
  );
};

export default App;
