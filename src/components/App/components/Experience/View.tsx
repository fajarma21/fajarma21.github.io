import Carousel from '@/components/Carousel';
import convertFSDate from '@/helpers/convertFSDate';
import useCarouselIntersect from '@/hooks/useCarouselIntersect';
import useGetData from '@/hooks/useGetData';
import type { ExperienceData } from '@/types';

import css from './View.module.scss';

const Experience = () => {
  const { showLeftShadow, showRightShadow, checkRef } = useCarouselIntersect();

  const { data, loading } = useGetData<ExperienceData>({
    collectionName: 'experience',
  });

  if (loading) return <>Loading...</>;
  if (!data) return <>No data!</>;

  return (
    <Carousel showLeftShadow={showLeftShadow} showRightShadow={showRightShadow}>
      {data.map(({ id, company, jobs, start, end, title }, index) => (
        <div key={id} ref={checkRef(index, data.length)} className={css.item}>
          <div className={css.top}>
            <div className={css.dot} />
          </div>
          <div className={css.content}>
            <p className={css.date}>
              {convertFSDate(start)} - {convertFSDate(end)}
            </p>
            <h3 className={css.company}>{company}</h3>
            <p className={css.title}>{title}</p>
            <ul className={css.jobs}>
              {jobs.map((item, index) => (
                <li key={`job-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Experience;
