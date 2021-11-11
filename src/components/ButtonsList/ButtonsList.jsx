import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import style from 'components/ButtonsList/ButtonsList.module.scss';

const cities = ['Minsk', 'Moscow', 'Bratislava', 'Kiev'];

export const ButtonsList = ({ city, setCity }) => {
  const onButtonClick = (selectedCity) => {
    if (selectedCity !== city) setCity(selectedCity);
  };
  return (
    <ul className={style.buttonsList}>
      {cities.map((item) => (
        <li key={item} className={style.button}>
          <Button title={item} onClick={() => onButtonClick(item)} />
        </li>
      ))}
    </ul>
  );
};

ButtonsList.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};
