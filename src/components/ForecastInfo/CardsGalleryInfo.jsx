import PropTypes from 'prop-types';
import { WeatherIcon } from 'components/WeatherIcon/WeatherIcon';
import style from 'components/ForecastInfo/ForecastInfo.module.scss';

export const CardsGalleryInfo = ({ Forecastweather }) => {
  return (
    <ul className={style.list}>
      {Forecastweather.list.map((item) => (
        <li key={item.dt} className={style.item}>
          {item.dt_txt && (
            <p className={style.date}>{item.dt_txt?.split(' ')[0]}</p>
          )}
          {item.dt_txt && (
            <p className={style.time}>{item.dt_txt?.split(' ')[1]}</p>
          )}

          {item.weather[0].description && (
            <p className={style.time}>{item.weather[0]?.description}</p>
          )}

          <WeatherIcon
            src={item.weather[0]?.icon}
            alt={item.weather[0]?.description}
          />

          {item.main?.temp && (
            <p className={style.temp}>{Math.round(item.main?.temp)}°</p>
          )}

          {item.wind?.speed && (
            <p className={style.temp}>{item.wind?.speed}m/s</p>
          )}
        </li>
      ))}
    </ul>
  );
};

CardsGalleryInfo.propTypes = {
  Forecastweather: PropTypes.object.isRequired,
};
