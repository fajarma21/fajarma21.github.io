import Contacts from '@/components/Contacts';

import css from './View.module.scss';

const Footer = () => {
  return (
    <div className={css.footer}>
      <Contacts tooltipPosition="top" />
      <p className={css.copy}>© 2025 fajarma</p>
    </div>
  );
};

export default Footer;
