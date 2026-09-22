import { useLayoutEffect, type CSSProperties } from 'react';

import Section from '@/components/Section';
import useGetData from '@/hooks/useGetData';
import useContactStore from '@/stores/useContact';
import useSectionStore from '@/stores/useSection';

import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Project from './components/Project';
import css from './View.module.scss';
import { ContactData } from '@/types';
import usePageScroll from '@/hooks/usePageScroll';

// TODO: handle touch scroll

const App = () => {
  const active = useSectionStore((state) => state.active);
  const updateContact = useContactStore((state) => state.updateContact);

  const windowH = window.innerHeight;

  useGetData<ContactData>({
    collectionName: 'contact',
    onCompleted: (data) => {
      updateContact(data[0]);
    },
  });

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
      scrollable: true,
      wide: true,
      comp: <Project />,
    },
  ];

  const { currentPage } = usePageScroll({ pageLength: list.length });

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Navbar />
      <div className={css.backgroundGroup} />
      <div
        className={css.progress}
        style={{ width: `${((active - 1) / (list.length - 1)) * 100}%` }}
      />
      <div
        className={css.container}
        style={
          {
            '--windowH': windowH ? `${windowH}px` : '100vh',
            transform: `translateY(${currentPage * -windowH}px)`,
          } as CSSProperties
        }
      >
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
