import { FMContacts } from 'fajarma-react-lib';

import css from './View.module.scss';
import { LINKS } from './View.constants';
import type { ContactsProps } from './View.types';

const Contacts = ({ tooltipPosition = 'bottom' }: ContactsProps) => {
  return (
    <FMContacts
      className={`${css.contact} ${css[tooltipPosition]}`}
      links={LINKS}
    />
  );
};

export default Contacts;
