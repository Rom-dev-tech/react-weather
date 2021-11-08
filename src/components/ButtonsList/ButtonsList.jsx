import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import s from '../ButtonsList/ButtonsList.module.scss';

export const ButtonsList = ({ order }) => {
  return (
    <ul className={s.buttonsList}>
      <li className={s.button}>
        <Button title="Minsk" order={order} />
      </li>

      <li className={s.button}>
        <Button title="Moscow" order={order} />
      </li>

      <li className={s.button}>
        <Button title="Bratislava" order={order} />
      </li>

      <li className={s.button}>
        <Button title="Kiev" order={order} />
      </li>
    </ul>
  );
};

ButtonsList.propTypes = {
  order: PropTypes.string.isRequired,
};
