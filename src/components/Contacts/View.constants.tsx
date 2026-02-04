import { FaClipboardUser, FaLinkedin, FaSquareEnvelope } from 'react-icons/fa6';

export const LINKS = [
  {
    icon: <FaLinkedin size={24} />,
    url: 'https://linkedin.com/in/fajarma',
    tooltip: 'Visit my LinkedIn',
  },
  {
    icon: <FaSquareEnvelope size={24} />,
    url: 'mailto:fajarma21@gmail.com',
    tooltip: 'Send me an email',
  },
  {
    icon: <FaClipboardUser size={24} />,
    url: 'https://wkkfnusxohjljpjotkcv.supabase.co/storage/v1/object/public/profile/Fajar%20Maulana_CV.pdf',
    tooltip: 'Download my CV',
  },
];
