import { FMTitle } from 'fajarma-react-lib';
import useSectionStore from '@/stores/useSection';

import css from './View.module.scss';

const Navbar = () => {
  const active = useSectionStore((state) => state.active);

  return (
    <header className={css.header} data-show={active !== 1 || undefined}>
      <div className={css.wrapper}>
        <FMTitle />
      </div>
    </header>
  );
};

export default Navbar;
