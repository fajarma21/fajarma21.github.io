import { useRef, useState, type MouseEvent } from 'react';
import { useIntersect } from 'fajarma-react-lib';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import css from './View.module.scss';
import type { PreviewProps } from './View.types';

const Preview = ({ images, title, videos }: PreviewProps) => {
  const imageTotal = images.length;
  const videoTotal = videos.length;
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
        {videos.map((item, index) => {
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
                  {index + 1}/{previewLength}
                </div>
              )}
              <video controls poster={images[0]} height={170}>
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        })}
        {images.map((item, index) => {
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
              <a href={item} target="_blank">
                <img
                  src={item}
                  alt={`${title}-${index}`}
                  width="100%"
                  height={170}
                />
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
