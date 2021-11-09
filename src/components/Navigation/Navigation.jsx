import { Link } from 'react-router-dom';
import { CustomLink } from '../CustomLink/CustomLink';
import s from 'components/Navigation/Navigation.module.scss';

export const Navigation = () => {
  return (
    <>
      <nav className={s.navigation}>
        <Link className={s.logo} to="/"></Link>
        <ul className={s.list}>
          <li className={s.links}>
            <CustomLink to="/">Current</CustomLink>
          </li>

          <li className={s.links}>
            <CustomLink to="/forecast">Forecast</CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
