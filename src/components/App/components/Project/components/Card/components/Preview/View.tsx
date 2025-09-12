import { useRef, useState, type MouseEvent } from 'react';
import { useIntersect } from 'fajarma-react-lib';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { PROJECT_ASSETS } from '@/constants/project';

import css from './View.module.scss';
import type { PreviewProps } from './View.types';

const Preview = ({ imageTotal, prefix, title, videoTotal }: PreviewProps) => {
  const isMultiple = imageTotal > 1;
  const previewLength = videoTotal + imageTotal;

  const scrollableRef = useRef<HTMLDivElement>(null);
  const [leftIntersecting, setLeftIntersecting] = useState(false);
  const [rightIntersecting, setRightIntersecting] = useState(false);

  const intersectOpt = { threshold: 0.05 };

  const { ref: leftRef } = useIntersect<HTMLDivElement>(
    (value) => setLeftIntersecting(value),
    intersectOpt
  );
  const { ref: rightRef } = useIntersect<HTMLDivElement>(
    (value) => setRightIntersecting(value),
    intersectOpt
  );

  const handleClickArrow = (e: MouseEvent) => {
    if (!scrollableRef.current) return;

    const target = e.target as HTMLButtonElement;
    const arrowPos = target.dataset.pos;

    let scrollAmount = scrollableRef.current.children[0].clientWidth;
    if (arrowPos === 'left') scrollAmount *= -1;

    scrollableRef.current.scrollTo({
      left: scrollableRef.current.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={css.wrapper}>
      {isMultiple && (
        <button
          type="button"
          className={css.arrowBtn}
          data-pos="left"
          data-show={!leftIntersecting || undefined}
          onClick={handleClickArrow}
        >
          <FaChevronLeft />
        </button>
      )}
      <div className={css.carousel} ref={scrollableRef}>
        {[...Array(videoTotal)].map((_, index) => {
          const idxName = index + 1;
          const videoKey =
            `${prefix}-video-${idxName}` as keyof typeof PROJECT_ASSETS;
          return (
            <div
              key={`video-${index}`}
              ref={
                !index ? leftRef : index === previewLength - 1 ? rightRef : null
              }
              className={css.item}
            >
              {previewLength > 1 && (
                <div className={css.counter}>
                  {idxName}/{previewLength}
                </div>
              )}
              <video controls poster={PROJECT_ASSETS[`${prefix}-1`]}>
                <source src={PROJECT_ASSETS[videoKey]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        })}
        {[...Array(imageTotal)].map((_, index) => {
          const idxName = index + 1;
          const imgKey = `${prefix}-${idxName}` as keyof typeof PROJECT_ASSETS;
          const imgUrl = PROJECT_ASSETS[imgKey];

          const imgIdx = videoTotal + index;
          return (
            <div
              key={`image-${imgIdx}`}
              ref={
                !imgIdx
                  ? leftRef
                  : imgIdx === previewLength - 1
                  ? rightRef
                  : null
              }
              className={css.item}
            >
              {previewLength > 1 && (
                <div className={css.counter}>
                  {imgIdx + 1} / {previewLength}
                </div>
              )}
              <a href={imgUrl} target="_blank">
                <img src={imgUrl} alt={`${title}-${index}`} width="100%" />
              </a>
            </div>
          );
        })}
      </div>
      {isMultiple && (
        <button
          type="button"
          className={css.arrowBtn}
          data-pos="right"
          data-show={!rightIntersecting || undefined}
          onClick={handleClickArrow}
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default Preview;
