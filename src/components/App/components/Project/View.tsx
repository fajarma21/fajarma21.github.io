import Carousel from '@/components/Carousel';
import Contacts from '@/components/Contacts';
import useCarouselIntersect from '@/hooks/useCarouselIntersect';
import useGetData from '@/hooks/useGetData';
import type { ProjectData } from '@/types';

import Card from './components/Card';
import { HIDE } from './View.constants';
import css from './View.module.scss';
import type { ProjectProps } from './View.types';

const Project = ({ isMobile }: ProjectProps) => {
  const { showLeftShadow, showRightShadow, checkRef } = useCarouselIntersect();

  const { data, loading } = useGetData<ProjectData>({
    collectionName: 'project',
  });

  if (loading) return <>Loading...</>;
  if (!data) return <>No data!</>;
  const validData = data.filter((item) => !HIDE.includes(item.id));

  return (
    <>
      <Carousel
        gap={32}
        padding="0 32px"
        showLeftShadow={showLeftShadow}
        showRightShadow={showRightShadow}
      >
        {validData.map((item, index) => (
          <div
            key={item.title}
            ref={checkRef(index, validData.length)}
            className={css.container}
          >
            <Card data={item} isMobile={isMobile} />
          </div>
        ))}
      </Carousel>

      <div className={css.footer}>
        <Contacts />
        <p className={css.copy}>© 2025 fajarma</p>
      </div>
    </>
  );
};

export default Project;
