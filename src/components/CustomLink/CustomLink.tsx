import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import style from './CustomLink.module.scss';

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={match ? [style.link, style.activeLink].join(' ') : style.link}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
