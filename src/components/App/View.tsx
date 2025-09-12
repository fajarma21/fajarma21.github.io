import Experience from './components/Experience';
import Profile from './components/Profile';
import Project from './components/Project';

import css from './View.module.scss';

const App = () => {
  return (
    <div className={css.container}>
      <Profile />
      <Experience />
      <Project />
    </div>
  );
};

export default App;
