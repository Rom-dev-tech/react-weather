import PropTypes from 'prop-types';

import moment from 'moment';
import s from '../InfoDay/InfoDay.module.scss';

export const InfoDay = ({ weather }) => {
  const date = moment(Date.now()).format('MMMM Do YYYY');

  return (
    <div className={s.cardWrapper}>
      <h2 className={s.currentWeatherTitle}>Current Weather in</h2>
      <p className={[s.city, s.date].join(' ')}>{weather.name}</p>

      <div className={s.weatherWrapper}>
        <p className={s.currentWeather}>{Math.round(weather.main.temp)}°</p>
        <p className={s.iconDescriptions}>{weather.weather[0].description}</p>
      </div>

      <div className={s.weatherWrapper}>
        <img
          className={s.icon}
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />

        <p
          className={s.windDescriptions}
        >{`Wind speed: ${weather.wind.speed}m/s`}</p>
      </div>
      <p className={s.date}>
        feels like {Math.round(weather.main.feels_like)}°
      </p>
      <p className={s.date}>{date}</p>
    </div>
  );
};

InfoDay.propTypes = {
  weather: PropTypes.object.isRequired,
};
