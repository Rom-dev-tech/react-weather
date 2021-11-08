import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import s from '../Button/Button.module.scss';

export const Button = ({ title, order }) => {
  const navidate = useNavigate();
  const location = useLocation();

  const onButtonClick = () => {
    if (order === title) {
      return;
    }
    navidate({
      ...location,
      search: `weatherIn=${title}`,
    });
  };

  return (
    <button className={s.button} type="button" onClick={onButtonClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};
