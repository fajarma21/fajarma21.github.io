import Contacts from '@/components/Contacts';

import css from './View.module.scss';
import type { FooterProps } from './View.types';

const Footer = ({ isMobile }: FooterProps) => {
  return (
    <div className={css.footer} data-mobile-mode={isMobile || undefined}>
      <Contacts />
      <p className={css.copy}>© 2025 fajarma</p>
    </div>
  );
};

export default Footer;
