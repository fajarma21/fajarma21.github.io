import { logEvent } from 'firebase/analytics';
import { analytics } from '@/firebase';

export const trackerImpressionSection = (section: string) => {
  logEvent(analytics, 'section_view', {
    section,
  });
};
