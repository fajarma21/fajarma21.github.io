import css from './View.module.scss';
import type { NoDataProps } from './View.types';

const NoData = ({ withContainer }: NoDataProps) => {
  return (
    <div className={withContainer ? css.container : undefined}>
      <p className={css.text}>
        <b>No Data.</b>
        <br />
        You can try again later.
      </p>
    </div>
  );
};

export default NoData;
