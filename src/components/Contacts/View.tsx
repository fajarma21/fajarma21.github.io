import { FMContacts } from 'fajarma-react-lib';

import { LINKS } from './View.constants';
import type { ContactsProps } from './View.types';

const Contacts = ({ tooltipPosition = 'bottom' }: ContactsProps) => {
  const tooltipOffset = tooltipPosition === 'top' ? { top: -20 } : { top: 50 };

  return <FMContacts links={LINKS} tooltipOffset={tooltipOffset} />;
};

export default Contacts;
