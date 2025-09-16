import Carousel from '@/components/Carousel';
import Loading from '@/components/Loading';
import NoData from '@/components/NoData';
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

  if (loading) return <Loading withContainer />;
  if (!data) return <NoData withContainer />;
  const validData = data.filter((item) => !HIDE.includes(item.id));

  return (
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
          style={{ animationDelay: `${index * 250 + 250}ms` }}
        >
          <Card data={item} isMobile={isMobile} />
        </div>
      ))}
    </Carousel>
  );
};

export default Project;
