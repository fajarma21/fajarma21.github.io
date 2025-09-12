import Section from '@/components/Section';

import css from './View.module.scss';
import { useIntersect } from 'fajarma-react-lib';
import { useState } from 'react';

const ITEM = [
  {
    title: 'Software 1',
  },
  {
    title: 'Software 2',
  },
  {
    title: 'Software 3',
  },
];

const intersectOptions = {
  threshold: 0.5,
};

const Experience = () => {
  const [leftShadow, setLeftShadow] = useState(false);
  const [rightShadow, setRightShadow] = useState(false);

  const { ref: leftIndicator } = useIntersect<HTMLDivElement>(
    (intersect) => setLeftShadow(!intersect),
    intersectOptions
  );
  const { ref: rightIndicator } = useIntersect<HTMLDivElement>(
    (intersect) => setRightShadow(!intersect),
    intersectOptions
  );

  return (
    <Section title="Experience">
      <div className={css.outer}>
        {leftShadow && <div className={css.darkside} data-pos="left" />}
        <div className={css.container}>
          {/* <span ref={leftIndicator} /> */}
          {ITEM.map((item, index) => (
            <div
              key={item.title}
              ref={
                !index
                  ? leftIndicator
                  : index === ITEM.length - 1
                  ? rightIndicator
                  : null
              }
              className={css.item}
            >
              <div className={css.top}>
                <div className={css.dot} />
              </div>
              <div className={css.content}>
                <p className={css.date}>Nov 2018 - Aug 2024</p>
                <h3 className={css.company}>{item.title}</h3>
                <p className={css.title}>
                  Senior Software Engineer (Web Platform)
                </p>
                <ul className={css.jobs}>
                  <li>
                    Work on about 10 web modules on Desktop, Mobile, and WebView
                  </li>
                  <li>
                    Develop feature, bug fix, and maintain all modules
                    performance
                  </li>
                  <li>Create documentation for existing/ongoing module</li>
                  <li>
                    Modules: AI Chat, User Chat, Broadcast Chat, Notification,
                    etc
                  </li>
                  <li>Front-end: React, Typescript, WebSocket, etc</li>
                  <li>API Integration : fetch API &amp; Apollo Query</li>
                  <li>Module monitor : Scalyr &amp; New Relic</li>
                  <li>Version control: Git</li>
                </ul>
              </div>
            </div>
          ))}
          {/* // <span ref={rightIndicator} /> */}
        </div>
        {rightShadow && <div className={css.darkside} data-pos="right" />}
      </div>
    </Section>
  );
};

export default Experience;
