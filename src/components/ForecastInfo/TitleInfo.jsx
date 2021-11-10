import PropTypes from 'prop-types';
import { WeatherIcon } from 'components/WeatherIcon/WeatherIcon';
import style from 'components/ForecastInfo/ForecastInfo.module.scss';

export const TitleInfo = ({ Forecastweather }) => {
  return (
    <>
      <h2 className={style.forecastTitle}>{Forecastweather.city.name}</h2>

      <div className={style.forecastInfoThumb}>
        <WeatherIcon
          src={Forecastweather.list[0].weather[0].icon}
          alt={Forecastweather.list[0].weather[0].description}
        />

        <p>{Math.round(Forecastweather.list[0].main.temp)}°</p>
        <p>feels like {Math.round(Forecastweather.list[0].main.feels_like)}°</p>
        <p> wind speed {Forecastweather.list[0].wind.speed}m/s</p>
      </div>
    </>
  );
};

TitleInfo.propTypes = {
  Forecastweather: PropTypes.object.isRequired,
};
