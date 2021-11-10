import PropTypes from 'prop-types';
import { ButtonsList } from 'components/ButtonsList/ButtonsList';
import { CardInfo } from 'components/CurrentInfo/CardInfo';

export const CurrentInfo = ({ weather, getCity, city }) => {
  return (
    <section>
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
