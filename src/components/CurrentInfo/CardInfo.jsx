import PropTypes from 'prop-types';
import { WeatherIcon } from 'components/WeatherIcon/WeatherIcon';
import { showDate } from 'utils/showDate';
import style from 'components/CurrentInfo/CurrentInfo.module.scss';

export const CardInfo = ({ weather }) => {
  const date = showDate();

  return (
    <div className={style.cardWrapper}>
      {weather?.name && (
        <p className={[style.city, style.date].join(' ')}>{weather?.name}</p>
      )}

      <div className={style.weatherWrapper}>
        {weather.main?.temp && (
          <p className={style.currentWeather}>
            {Math.round(weather.main?.temp)}°
          </p>
        )}

        {weather.weather[0]?.description && (
          <p className={style.iconDescriptions}>
            {weather.weather[0]?.description}
          </p>
        )}
      </div>

      <div className={style.weatherWrapper}>
        <WeatherIcon
          src={weather.weather[0]?.icon}
          alt={weather.weather[0]?.description}
        />

        {weather.wind?.speed && (
          <p className={style.windDescriptions}>
            Wind speed: {weather.wind?.speed} m/s
          </p>
        )}
      </div>

      {weather.main?.feels_like && (
        <p className={style.date}>
          feels like {Math.round(weather.main?.feels_like)}°
        </p>
      )}

      <p className={style.date}>{date} years</p>
    </div>
  );
};

CardInfo.propTypes = {
  weather: PropTypes.object.isRequired,
};
