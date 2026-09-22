import { useCallback, useEffect, useRef, useState } from 'react';

import type { UsePageScrollParams } from './index.types';

const usePageScroll = ({ pageLength }: UsePageScrollParams) => {
  const [currentPage, setCurrentPage] = useState(0);
  const isScrolling = useRef(false);

  const scrollToSection = (index: number) => {
    isScrolling.current = true;
    setCurrentPage(index);
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (e.cancelable) e.preventDefault();

      if (!(e.target instanceof HTMLElement)) return;
      const scrollableChild = e.target.closest('[data-scrollable="true"]');
      const deltaY = e.deltaY;

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

      scrollToSection(Math.min(Math.max(newIndex, 0), pageLength - 1));
    },
    [currentPage, pageLength],
  );

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  return { currentPage };
};

export default usePageScroll;
