import { Fragment } from 'react';
import { useResizeObserver } from 'fajarma-react-lib';

import useKeySkillsStore from '@/stores/useKeySkills';

import css from './View.module.scss';

const KeySkills = () => {
  const skills = useKeySkillsStore((state) => state.skills);

  const { ref, elementSize } = useResizeObserver<HTMLDivElement>();
  const marquee = elementSize.width < 768;

  return (
    <div ref={ref} className={css.container}>
      <div className={css.skills} data-marquee={marquee || undefined}>
        {(marquee ? [...skills, ...skills, ...skills, ...skills] : skills).map(
          (item, index) => (
            <Fragment key={`${item}${index}`}>
              {index === 0 && <div className={css.dot}>&bull;</div>}
              <div className={css.skill}>{item}</div>
              <div className={css.dot}>&bull;</div>
            </Fragment>
          ),
        )}
      </div>
      <div className={css.darkside} data-pos="left" />
      <div className={css.darkside} data-pos="right" />
    </div>
  );
};

export default KeySkills;
