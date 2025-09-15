import loadable from '@loadable/component';

const ProfileLoadable = loadable(() => import('./View'));

export default ProfileLoadable;
