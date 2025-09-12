import css from './View.module.scss';
import type { SectionProps } from './View.types';

const Section = ({ children, title, vCenter }: SectionProps) => {
  return (
    <div className={css.container} data-vcenter={vCenter || undefined}>
      {title && (
        <div className={css.title}>
          <h2>{title}</h2>
        </div>
      )}
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default Section;
