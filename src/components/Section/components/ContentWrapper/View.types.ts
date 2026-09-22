import type { ReactNode } from 'react';

export interface ContentWrapperProps {
  children: ReactNode;
  scrollable?: boolean;
  vCenter?: boolean;
  wide?: boolean;
}
