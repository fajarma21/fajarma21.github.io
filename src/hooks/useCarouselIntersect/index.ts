import { useState } from 'react';

import { useIntersect } from 'fajarma-react-lib';

const intersectOptions = {
  threshold: 0.8,
};

const useCarouselIntersect = () => {
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

  const { ref: leftIndicatorRef } = useIntersect<HTMLDivElement>(
    (intersect) => setShowLeftShadow(!intersect),
    intersectOptions
  );
  const { ref: rightIndicatorRef } = useIntersect<HTMLDivElement>(
    (intersect) => setShowRightShadow(!intersect),
    intersectOptions
  );

  const checkRef = (index: number, length: number) => {
    if (!index) return leftIndicatorRef;
    if (index === length - 1) return rightIndicatorRef;
    return null;
  };

  return {
    showLeftShadow,
    showRightShadow,
    checkRef,
  };
};

export default useCarouselIntersect;
