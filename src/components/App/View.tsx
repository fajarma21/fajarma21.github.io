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
      title: 'Experience',
      comp: <Experience />,
    },
    {
      title: 'Project',
      comp: <Project isMobile={isMobile} />,
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
        {list.map((item, index) => (
          <Section
            key={`section-${index}`}
            index={index + 1}
            vCenter={item.vCenter}
            title={item.title}
          >
            {item.comp}
          </Section>
        ))}
        {active === list.length && <Footer />}
      </div>
    </>
  );
};

export default App;
