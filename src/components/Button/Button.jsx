import PropTypes from 'prop-types';
import style from 'components/Button/Button.module.scss';

export const Button = ({ title, onClick }) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
