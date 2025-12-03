import { Fragment, useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaCube,
  FaGithub,
  FaLink,
  FaLinkSlash,
} from 'react-icons/fa6';
import { useIntersect } from 'fajarma-react-lib';

import Preview from './components/Preview';
import css from './View.module.scss';
import type { CardProps } from './View.types';

const Card = ({ data, isMobile }: CardProps) => {
  const {
    desc,
    desktopOnly,
    images,
    repo,
    stacks,
    thumbnail,
    title,
    url,
    videos,
  } = data;

  const desktopUrl = isMobile && desktopOnly;
  const urlAvailable = !desktopUrl && url;
  const stacksList = stacks.map((item) => JSON.parse(item));

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const dataExpanded = expanded || undefined;

  const { ref } = useIntersect<HTMLDivElement>(setVisible);

  return (
    <div ref={ref}>
      <div className={css.item} data-visible={visible || undefined}>
        <div className={css.wrapper}>
          <div className={css.previewWrapper} data-expanded={dataExpanded}>
            {expanded ? (
              <Preview images={images} title={title} videos={videos} />
            ) : (
              <img src={thumbnail} className={css.thumbnail} />
            )}
          </div>
          <div className={css.content}>
            <button
              type="button"
              className={css.head}
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
            >
              <h3 className={css.title}>{title}</h3>
              <div className={css.chevron}>
                {expanded ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
            <p className={css.desc}>{desc}</p>
            <div className={css.extra} data-expanded={dataExpanded}>
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
        </div>
        <div className={css.btnWrapper} data-expanded={dataExpanded}>
          <a
            className={css.liveBtn}
            href={urlAvailable || '#!'}
            aria-disabled={!urlAvailable}
            target={urlAvailable ? '_blank' : ''}
          >
            <div className={css.text}>
              {urlAvailable ? <FaLink /> : <FaLinkSlash />}
              <b>{desktopUrl ? 'Desktop only' : url || 'Not deployed yet'}</b>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
