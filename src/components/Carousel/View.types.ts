import type { ReactNode } from 'react';

export interface CarouselProps {
  children: ReactNode;
  gap?: number;
  padding?: number | string;
  showLeftShadow?: boolean;
  showRightShadow?: boolean;
}
