import Nav from 'fajarma-react-lib/dist/fajarma/Nav';

import useSectionStore from '@/stores/useSection';

import css from './View.module.scss';

const Navbar = () => {
  const active = useSectionStore((state) => state.active);

  return (
    <header className={css.header} data-show={active !== 1 || undefined}>
      <div className={css.wrapper}>
        <Nav links={[]} />
      </div>
    </header>
  );
};

export default Navbar;
