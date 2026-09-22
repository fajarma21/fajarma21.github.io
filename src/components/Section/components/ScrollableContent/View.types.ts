import type { ReactNode } from 'react';

export interface ScrollbaleContentProps {
  children: ReactNode;
  scrollable?: boolean;
  vCenter?: boolean;
  wide?: boolean;
}
