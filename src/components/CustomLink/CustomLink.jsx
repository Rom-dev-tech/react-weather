import PropTypes from 'prop-types';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import s from '../CustomLink/CustomLink.module.scss';

export const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={match ? [s.link, s.activeLink].join(' ') : s.link}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  props: PropTypes.object,
};
