import { useState } from 'react';
import { useIntersect } from 'fajarma-react-lib';

import useSectionStore from '@/stores/useSection';

import css from './View.module.scss';
import type { SectionProps } from './View.types';

const Section = ({ children, index, title, vCenter }: SectionProps) => {
  const [intersected, setIntersected] = useState(false);

  const updateActiveSection = useSectionStore(
    (state) => state.updateActiveSection
  );

  const { ref } = useIntersect<HTMLDivElement>(
    (value) => {
      if (value) {
        updateActiveSection(index);
        if (!intersected) setIntersected(true);
      }
    },
    { threshold: 0.6 }
  );

  return (
    <section ref={ref} className={css.container}>
      {intersected && (
        <>
          {title && (
            <div className={css.title}>
              <h2>{title}</h2>
            </div>
          )}
          <div className={css.content} data-vcenter={vCenter || undefined}>
            {children}
          </div>
        </>
      )}
    </section>
  );
};

export default Section;
