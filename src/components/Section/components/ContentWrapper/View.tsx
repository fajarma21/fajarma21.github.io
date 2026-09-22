import css from './View.module.scss';
import type { ContentWrapperProps } from './View.types';

const ContentWrapper = ({
  children,
  scrollable,
  vCenter,
  wide,
}: ContentWrapperProps) => {
  return (
    <div
      className={css.content}
      data-wide={wide || undefined}
      data-vcenter={vCenter || undefined}
      data-scrollable={scrollable || undefined}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
