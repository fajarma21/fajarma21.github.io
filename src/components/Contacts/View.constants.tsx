import type { ContactData } from '@/types';
import { FaClipboardUser, FaLinkedin, FaSquareEnvelope } from 'react-icons/fa6';

export const LINKS = ({ cvUrl, email, linkedinUrl }: ContactData) => [
  {
    icon: <FaLinkedin size={24} />,
    url: `https://${linkedinUrl}`,
    tooltip: 'Visit my LinkedIn',
  },
  {
    icon: <FaSquareEnvelope size={24} />,
    url: `mailto:${email}`,
    tooltip: 'Send me an email',
  },
  {
    icon: <FaClipboardUser size={24} />,
    url: cvUrl,
    tooltip: 'Download my CV',
  },
];
