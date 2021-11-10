import PropTypes from 'prop-types';
import { showDate } from 'Helpers/showDate';
import defaultIcon from 'images/logo.png';
import style from 'components/InfoDay/InfoDay.module.scss';

export const InfoDay = ({ weather }) => {
  const date = showDate();

  return (
    <div className={style.cardWrapper}>
      <h2 className={style.currentWeatherTitle}>Current Weather in</h2>
      <p className={[style.city, style.date].join(' ')}>{weather.name}</p>

      <div className={style.weatherWrapper}>
        <p className={style.currentWeather}>{Math.round(weather.main.temp)}°</p>
        <p className={style.iconDescriptions}>
          {weather.weather[0].description}
        </p>
      </div>

      <div className={style.weatherWrapper}>
        <img
          className={style.icon}
          src={
            weather.weather[0].icon !== null
              ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
              : defaultIcon
          }
          alt={
            weather.weather[0].description !== null
              ? weather.weather[0].description
              : 'icon weather'
          }
        />

        <p
          className={style.windDescriptions}
        >{`Wind speed: ${weather.wind.speed}m/s`}</p>
      </div>
      <p className={style.date}>
        feels like {Math.round(weather.main.feels_like)}°
      </p>
      <p className={style.date}>{date} years</p>
    </div>
  );
};

InfoDay.propTypes = {
  weather: PropTypes.object.isRequired,
};
