import Loading from '@/components/Loading';
import NoData from '@/components/NoData';
import useGetData from '@/hooks/useGetData';
import type { ProjectData } from '@/types';

import Card from './components/Card';
import { HIDE } from './View.constants';
import css from './View.module.scss';
import type { ProjectProps } from './View.types';

const Project = ({ children, isMobile }: ProjectProps) => {
  const { data, loading } = useGetData<ProjectData>({
    collectionName: 'project',
    orderBy: ['order', 'asc'],
  });

  if (loading) return <Loading withContainer />;
  if (!data) return <NoData withContainer />;
  const validData = data.filter((item) => !HIDE.includes(item.id));

  return (
    <>
      <div className={css.container}>
        {validData.map((item) => (
          <div key={item.title} className={css.itemWrapper}>
            <Card data={item} isMobile={isMobile} />
          </div>
        ))}
        {!!validData.length && (
          <p className={css.end}>--- There will be more later ---</p>
        )}
      </div>
      {children}
    </>
  );
};

export default Project;
