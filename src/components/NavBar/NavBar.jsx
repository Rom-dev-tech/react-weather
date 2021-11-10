import { Link, Outlet } from 'react-router-dom';
import { CustomLink } from '../CustomLink/CustomLink';
import style from 'components/NavBar/NavBar.module.scss';

export const NavBar = () => {
  return (
    <>
      <header className={style.header}>
        <nav className={style.navigation}>
          <Link className={style.logo} to="/"></Link>

          <p className={style.headerTitle}>Weather application</p>

          <ul className={style.list}>
            <li className={style.links}>
              <CustomLink to="/">Current</CustomLink>
            </li>

            <li className={style.links}>
              <CustomLink to="/forecast">Forecast</CustomLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
