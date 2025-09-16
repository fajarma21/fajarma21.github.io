import type { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  index: number;
  title?: string;
  vCenter?: boolean;
}
