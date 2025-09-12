import dayjs from 'dayjs';
import type { FirebaseDate } from '@/types';

const convertFSDate = (date?: FirebaseDate, format = 'MMM YYYY') => {
  if (date) {
    return dayjs(date.seconds * 1000).format(format);
  }

  return 'Now';
};

export default convertFSDate;
