import { Fragment } from 'react';
import { FaCube, FaGithub, FaLink, FaLinkSlash } from 'react-icons/fa6';

import Preview from './components/Preview';
import css from './View.module.scss';
import type { CardProps } from './View.types';

const Card = ({ data, isMobile }: CardProps) => {
  const { desc, desktopOnly, images, repo, stacks, title, url, videos } = data;

  const desktopUrl = isMobile && desktopOnly;
  const urlAvailable = !desktopUrl && url;
  const stacksList = stacks.map((item) => JSON.parse(item));

  return (
    <div className={css.item}>
      <div className={css.wrapper}>
        <Preview images={images} title={title} videos={videos} />
        <div className={css.content}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.desc}>{desc}</p>
          <div className={css.row}>
            <div className={css.icon}>
              <FaCube title="Stacks" />
            </div>
            <div className={css.stacks}>
              {stacksList.map((stack, index) => (
                <Fragment key={`stack-${index}`}>
                  <a href={stack.url} target="_blank">
                    {stack.name}
                  </a>
                  {index < stacksList.length - 1 && <>, </>}
                </Fragment>
              ))}
            </div>
          </div>
          {repo.length > 0 && (
            <div className={css.row}>
              <div className={css.icon}>
                <FaGithub title="Github repository" />
              </div>
              <div className={css.repo}>
                {repo.map((item, index) => (
                  <a
                    key={`stack-${index}`}
                    href={item}
                    target="_blank"
                    className={css.list}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={css.btnWrapper}>
        <a
          className={css.liveBtn}
          href={urlAvailable || '#!'}
          aria-disabled={!urlAvailable}
          target={urlAvailable ? '_blank' : ''}
        >
          <div className={css.text}>
            {urlAvailable ? <FaLink /> : <FaLinkSlash />}
            <b>{desktopUrl ? 'Desktop only' : url || 'Not deployef yet'}</b>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
