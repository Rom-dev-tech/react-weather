import { Navigation } from 'components/Navigation/Navigation';
import style from 'components/AppBar/AppBar.module.scss';

export const AppBar = () => {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
};
