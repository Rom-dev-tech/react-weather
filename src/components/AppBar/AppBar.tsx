import Navigation from '../Navigation';
import s from '../AppBar/AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
