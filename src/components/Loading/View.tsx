import css from './View.module.scss';
import type { LoadingProps } from './View.types';

const Loading = ({ withContainer }: LoadingProps) => {
  return (
    <div className={withContainer ? css.container : undefined}>
      <div className={css.loader} />
    </div>
  );
};

export default Loading;
