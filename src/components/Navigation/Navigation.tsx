import CustomLink from '../CustomLink';

import s from '../Navigation/Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.links}>
            <CustomLink to="/">Home</CustomLink>
          </li>

          <li className={s.links}>
            <CustomLink to="/information">information</CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
