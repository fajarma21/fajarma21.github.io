import css from './View.module.scss';
import type { CarouselProps } from './View.types';

const Carousel = ({
  children,
  gap,
  padding,
  showLeftShadow,
  showRightShadow,
}: CarouselProps) => {
  return (
    <div className={css.outer}>
      {showLeftShadow && <div className={css.darkside} data-pos="left" />}
      <div
        className={css.container}
        style={{ padding: padding || 0, gap: gap || 0 }}
      >
        {children}
      </div>
      {showRightShadow && <div className={css.darkside} data-pos="right" />}
    </div>
  );
};

export default Carousel;
