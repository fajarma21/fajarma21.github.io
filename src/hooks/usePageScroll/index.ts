import { useCallback, useEffect, useRef, useState } from 'react';

import type { UsePageScrollParams } from './index.types';

const usePageScroll = ({ pageLength }: UsePageScrollParams) => {
  const [currentPage, setCurrentPage] = useState(0);
  const touchstartY = useRef<number>(undefined);
  const isScrolling = useRef(false);

  const scrollLogic = useCallback(
    (target: HTMLElement, deltaY: number) => {
      const scrollableChild = target.closest('[data-scrollable="true"]');
      if (scrollableChild) {
        const scrollTop = scrollableChild.scrollTop;
        const scrollHeight = scrollableChild.scrollHeight;
        const height = scrollableChild.clientHeight;

        const scrollBetween =
          scrollTop > 0 && scrollTop + height + 1 < scrollHeight;

        if (scrollBetween || (!scrollBetween && Math.abs(deltaY) < 30)) return;
      }

      if (Math.abs(deltaY) < 10 || isScrolling.current) return;

      let newIndex = currentPage;
      if (deltaY > 0) newIndex++;
      else if (deltaY < 0) newIndex--;

      isScrolling.current = true;
      setCurrentPage(Math.min(Math.max(newIndex, 0), pageLength - 1));
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
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

  return { currentPage };
};

export default usePageScroll;
