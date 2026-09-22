import { useIntersect } from 'fajarma-react-lib';
import ContentWrapper from '../ContentWrapper';
import css from './View.module.scss';
import type { ScrollbaleContentProps } from './View.types';
import { useState } from 'react';

const ScrollableContent = ({
  children,
  ...contentProps
}: ScrollbaleContentProps) => {
  const [showShade, setShowShade] = useState(false);
  const { ref } = useIntersect<HTMLDivElement>((intersected) =>
    setShowShade(!intersected),
  );

  return (
    <div className={css.outerContent}>
      <div className={css.darkshade} data-show={showShade || undefined} />
      <ContentWrapper {...contentProps}>
        <div ref={ref} />
        {children}
      </ContentWrapper>
    </div>
  );
};

export default ScrollableContent;
