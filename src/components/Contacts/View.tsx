import { LINKS } from './View.constants';
import css from './View.module.scss';

// TODO: add tooltip

const Contacts = () => {
  return (
    <div className={css.container}>
      {LINKS.map((item, index) => (
        <a key={`link-${index}`} href={item.url} target="_blank">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Contacts;
