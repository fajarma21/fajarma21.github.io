import type { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  index: number;
  stickyTitle?: boolean;
  title?: string;
  vCenter?: boolean;
}
