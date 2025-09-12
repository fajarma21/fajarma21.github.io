import { useIntersect } from 'fajarma-react-lib';

import useSectionStore from '@/stores/useSection';

import css from './View.module.scss';
import type { SectionProps } from './View.types';

const Section = ({ children, index, title, vCenter }: SectionProps) => {
  const updateActiveSection = useSectionStore(
    (state) => state.updateActiveSection
  );

  const { ref } = useIntersect<HTMLDivElement>(
    (value) => {
      if (value) updateActiveSection(index);
    },
    { threshold: 0.6 }
  );

  return (
    <section ref={ref} className={css.container}>
      {title && (
        <div className={css.title}>
          <h2>{title}</h2>
        </div>
      )}
      <div className={css.content} data-vcenter={vCenter || undefined}>
        {children}
      </div>
    </section>
  );
};

export default Section;
