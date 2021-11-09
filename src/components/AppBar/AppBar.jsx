import { Navigation } from 'components/Navigation/Navigation';
import s from 'components/AppBar/AppBar.module.scss';

export const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};
