import { useState } from 'react';

import Carousel from '@/components/Carousel';
import useCarouselIntersect from '@/hooks/useCarouselIntersect';
import useGetData from '@/hooks/useGetData';
import type { ProjectData } from '@/types';

import Card from './components/Card';
import { HIDE } from './View.constants';
import css from './View.module.scss';

const Project = () => {
  const [project, setProject] = useState<ProjectData[] | null>();

  const { showLeftShadow, showRightShadow, checkRef } = useCarouselIntersect();

  const { loading } = useGetData<ProjectData>({
    collectionName: 'project',
    onCompleted: (data) => {
      setProject(data.filter((item) => !HIDE.includes(item.id)));
    },
    skip: !!project,
  });

  if (loading) return <>Loading...</>;
  if (!project) return <>No data!</>;

  return (
    <Carousel
      gap={32}
      padding="0 32px"
      showLeftShadow={showLeftShadow}
      showRightShadow={showRightShadow}
    >
      {project.map((item, index) => (
        <div
          key={item.title}
          ref={checkRef(index, project.length)}
          className={css.container}
        >
          <Card data={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default Project;
