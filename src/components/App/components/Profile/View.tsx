import { useState } from 'react';
import { FaAnglesDown } from 'react-icons/fa6';

import profileImg from '@/assets/profile/profile_square.png';
import useGetData from '@/hooks/useGetData';
import type { ProfileData } from '@/types';

import { getName } from './View.helpers';
import { LINKS } from './View.constants';
import css from './View.module.scss';

const Profile = () => {
  const [profile, setProfile] = useState<ProfileData>();

  const { loading } = useGetData<ProfileData>({
    collectionName: 'profile',
    onCompleted: (data) => {
      setProfile(data[0]);
    },
    skip: !!profile,
  });

  if (loading) return <>Loading...</>;
  if (!profile) return <>No data!</>;
  const { name, jobs } = profile;

  return (
    <>
      <img
        src={profileImg}
        alt="fajarma picture"
        width={150}
        height={150}
        className={css.profile}
      />
      <h2
        className={css.name}
        dangerouslySetInnerHTML={{ __html: getName(name) }}
      />
      {jobs.map((item) => (
        <div key={item} className={css.chip}>
          {item}
        </div>
      ))}
      <div className={css.contact}>
        {LINKS.map((item, index) => (
          <a
            key={`link-${index}`}
            className={css.link}
            href={item.url}
            target="_blank"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <button type="button" className={css.down}>
        <FaAnglesDown size={32} />
      </button>
    </>
  );
};

export default Profile;
