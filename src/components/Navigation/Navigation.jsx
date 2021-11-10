import { Link } from 'react-router-dom';
import { CustomLink } from '../CustomLink/CustomLink';
import style from 'components/Navigation/Navigation.module.scss';

export const Navigation = () => {
  return (
    <>
      <nav className={style.navigation}>
        <Link className={style.logo} to="/"></Link>
        <ul className={style.list}>
          <li className={style.links}>
            <CustomLink to="/">Current</CustomLink>
          </li>

          <li className={style.links}>
            <CustomLink to="/forecast">Forecast</CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
