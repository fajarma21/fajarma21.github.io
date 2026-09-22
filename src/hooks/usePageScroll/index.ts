import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TransitionEvent,
} from 'react';

import type { UsePageScrollParams } from './index.types';

const usePageScroll = ({ pageLength }: UsePageScrollParams) => {
  const [currentPage, setCurrentPage] = useState(0);
  const touchstartY = useRef<number>(undefined);
  const isScrolling = useRef(false);

  const handleTransitionEnd = (e: TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    isScrolling.current = false;
  };

  const scrollLogic = useCallback(
    (target: HTMLElement, deltaY: number) => {
      let newIndex = currentPage;
      if (deltaY > 0) newIndex++;
      else if (deltaY < 0) newIndex--;

      if (
        Math.abs(deltaY) < 10 ||
        isScrolling.current ||
        newIndex < 0 ||
        newIndex > pageLength - 1
      )
        return;

      const scrollableChild = target.closest('[data-scrollable="true"]');
      if (scrollableChild) {
        const scrollTop = scrollableChild.scrollTop;
        const scrollHeight = scrollableChild.scrollHeight;
        const height = scrollableChild.clientHeight;

        const scrollBetween =
          scrollTop > 0 && scrollTop + height + 1 < scrollHeight;

        if (scrollBetween || (!scrollBetween && Math.abs(deltaY) < 30)) return;
      }

      isScrolling.current = true;
      setCurrentPage(newIndex);
    },
    [currentPage, pageLength],
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (e.cancelable) e.preventDefault();
      if (!(e.target instanceof HTMLElement)) return;
      const deltaY = e.deltaY;

      scrollLogic(e.target, deltaY);
    },
    [scrollLogic],
  );

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchstartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault();
      if (!touchstartY.current || !(e.target instanceof HTMLElement)) return;
      const deltaY = (e.touches[0].clientY - touchstartY.current) * -1;

      scrollLogic(e.target, deltaY);
    },
    [scrollLogic],
  );

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: true });
    document.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    document.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    });
    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleTouchMove, handleTouchStart, handleWheel]);

  return { currentPage, handleTransitionEnd };
};

export default usePageScroll;
