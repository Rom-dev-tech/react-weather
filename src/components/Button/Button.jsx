import PropTypes from 'prop-types';
import { setLocalStorage } from 'utils/setLocalStorage';
import style from 'components/Button/Button.module.scss';

export const Button = ({ title, city, getCity }) => {
  const onButtonClick = () => {
    if (city === title) {
      return;
    }

    setLocalStorage(title);

    getCity(title);
  };

  return (
    <button className={style.button} type="button" onClick={onButtonClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  getCity: PropTypes.func.isRequired,
};
