import type { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  index: number;
  wide?: boolean;
  scrollable?: boolean;
  title?: string;
  vCenter?: boolean;
}
