import type { ProjectData } from '@/types';

export type PreviewProps = Pick<
  ProjectData,
  'imageTotal' | 'videoTotal' | 'prefix' | 'title'
>;
