import loadable from '@loadable/component';

const ProjectLoadable = loadable(() => import('./View'));

export default ProjectLoadable;
