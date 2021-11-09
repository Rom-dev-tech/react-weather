import PropTypes from 'prop-types';
import s from 'components/Button/Button.module.scss';

export const Button = ({ title, city, getCity }) => {
  const onButtonClick = () => {
    if (city === title) {
      return;
    }

    localStorage.setItem('city', JSON.stringify(title));
    getCity(title);
  };

  return (
    <button className={s.button} type="button" onClick={onButtonClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  getCity: PropTypes.func.isRequired,
};
