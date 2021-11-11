import PropTypes from 'prop-types';
import { ButtonsList } from 'components/ButtonsList/ButtonsList';
import { CardInfo } from 'components/CurrentInfo/CardInfo';
import { Title } from 'components/Title/Title';
import style from 'components/CurrentInfo/CurrentInfo.module.scss';

export const CurrentInfo = ({ weather, getCity, city }) => {
  return (
    <section className={style.section}>
      <Title title="Current Weather in City:" />

      <ButtonsList city={city} getCity={getCity} />

      <CardInfo weather={weather} />
    </section>
  );
};

CurrentInfo.propTypes = {
  weather: PropTypes.object.isRequired,
  getCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};
