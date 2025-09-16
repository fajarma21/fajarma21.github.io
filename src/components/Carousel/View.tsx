import { useRef, type MouseEvent } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import css from './View.module.scss';
import type { CarouselProps } from './View.types';

const Carousel = ({
  children,
  gap = 0,
  padding = 0,
  showLeftShadow,
  showRightShadow,
}: CarouselProps) => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleClickArrow = (e: MouseEvent) => {
    if (!scrollableRef.current) return;

    const target = e.target as HTMLButtonElement;
    const arrowPos = target.dataset.pos;
    let scrollAmount = scrollableRef.current.children[0].clientWidth + gap;
    if (arrowPos === 'left') scrollAmount *= -1;

    scrollableRef.current.scrollTo({
      left: scrollableRef.current.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={css.outer}>
      <div
        className={css.container}
        style={{ padding, gap }}
        ref={scrollableRef}
      >
        {children}
      </div>
      <div
        className={css.darkside}
        data-pos="left"
        data-show={showLeftShadow || undefined}
      />
      <div
        className={css.darkside}
        data-pos="right"
        data-show={showRightShadow || undefined}
      />

      <button
        type="button"
        className={css.btnControl}
        disabled={!showLeftShadow}
        data-pos="left"
        onClick={handleClickArrow}
      >
        <FaChevronLeft size={32} />
      </button>
      <button
        type="button"
        data-pos="right"
        className={css.btnControl}
        disabled={!showRightShadow}
        onClick={handleClickArrow}
      >
        <FaChevronRight size={32} />
      </button>
    </div>
  );
};

export default Carousel;
