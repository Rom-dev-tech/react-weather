import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import s from 'components/ButtonsList/ButtonsList.module.scss';

export const ButtonsList = ({ city, getCity }) => {
  return (
    <ul className={s.buttonsList}>
      <li className={s.button}>
        <Button title="Minsk" city={city} getCity={getCity} />
      </li>

      <li className={s.button}>
        <Button title="Moscow" city={city} getCity={getCity} />
      </li>

      <li className={s.button}>
        <Button title="Bratislava" city={city} getCity={getCity} />
      </li>

      <li className={s.button}>
        <Button title="Kiev" city={city} getCity={getCity} />
      </li>
    </ul>
  );
};

ButtonsList.propTypes = {
  city: PropTypes.string.isRequired,
  getCity: PropTypes.func.isRequired,
};
