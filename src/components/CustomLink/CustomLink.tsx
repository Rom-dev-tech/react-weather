import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import s from '../CustomLink/CustomLink.module.scss';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
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

export default CustomLink;
