import { FaAnglesDown } from 'react-icons/fa6';

import profileImg from '@/assets/profile/profile_square.png';
import Contacts from '@/components/Contacts';
import useGetData from '@/hooks/useGetData';
import type { ProfileData } from '@/types';

import { getName } from './View.helpers';
import css from './View.module.scss';

const Profile = () => {
  const { data, loading } = useGetData<ProfileData>({
    collectionName: 'profile',
  });

  if (loading) return <>Loading...</>;
  if (!data) return <>No data!</>;
  const { name, jobs } = data[0];

  return (
    <>
      <div className={css.container}>
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
        <div className={css.row}>
          {jobs.map((item) => (
            <div key={item} className={css.chip}>
              {item}
            </div>
          ))}
        </div>

        <Contacts />
      </div>

      <button type="button" className={css.down}>
        <FaAnglesDown size={32} />
      </button>
    </>
  );
};

export default Profile;
