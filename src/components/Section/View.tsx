import { useState } from 'react';
import { useIntersect } from 'fajarma-react-lib';

import useSectionStore from '@/stores/useSection';

import ContentWrapper from './components/ContentWrapper';
import ScrollableContent from './components/ScrollableContent';
import css from './View.module.scss';
import type { SectionProps } from './View.types';

const Section = ({ children, index, title, ...contentProps }: SectionProps) => {
  const [intersected, setIntersected] = useState(false);

  const updateActiveSection = useSectionStore(
    (state) => state.updateActiveSection,
  );

  const { ref } = useIntersect<HTMLDivElement>((value) => {
    if (value) {
      updateActiveSection(index);
      if (!intersected) setIntersected(true);
    }
  });

  return (
    <section className={css.container}>
      <div ref={ref} className={css.detector} />
      {intersected && (
        <>
          {title && (
            <div className={css.title}>
              <h2>{title}</h2>
            </div>
          )}

          {contentProps.scrollable ? (
            <ScrollableContent {...contentProps}>{children}</ScrollableContent>
          ) : (
            <ContentWrapper {...contentProps}>{children}</ContentWrapper>
          )}
        </>
      )}
    </section>
  );
};

export default Section;
