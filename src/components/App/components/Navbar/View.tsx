import Nav from 'fajarma-react-lib/dist/fajarma/Nav';

import css from './View.module.scss';

const Navbar = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Nav links={[]} />
      </div>
    </header>
  );
};

export default Navbar;
