import type { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  index: number;
  isWide?: boolean;
  stickyTitle?: boolean;
  title?: string;
  vCenter?: boolean;
}
