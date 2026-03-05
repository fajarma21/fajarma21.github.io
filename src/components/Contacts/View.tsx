import { FMContacts } from 'fajarma-react-lib';

import css from './View.module.scss';
import { LINKS } from './View.constants';
import type { ContactsProps } from './View.types';
import useContactStore from '@/stores/useContact';

const Contacts = ({ tooltipPosition = 'bottom' }: ContactsProps) => {
  const data = useContactStore((state) => state.data);

  return (
    <FMContacts
      className={`${css.contact} ${css[tooltipPosition]}`}
      links={LINKS(data)}
    />
  );
};

export default Contacts;
