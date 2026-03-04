import { FaClipboardUser, FaLinkedin, FaSquareEnvelope } from 'react-icons/fa6';

export const LINKS = (cv: string, email: string, linkedin: string) => [
  {
    icon: <FaLinkedin size={24} />,
    url: `https://${linkedin}`,
    tooltip: 'Visit my LinkedIn',
  },
  {
    icon: <FaSquareEnvelope size={24} />,
    url: `mailto:${email}`,
    tooltip: 'Send me an email',
  },
  {
    icon: <FaClipboardUser size={24} />,
    url: cv,
    tooltip: 'Download my CV',
  },
];
