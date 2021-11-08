import { Navigation } from '../Navigation/Navigation';
import s from '../AppBar/AppBar.module.scss';

export const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};
