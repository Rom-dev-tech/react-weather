import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import { TitleInfiProps } from '../../types/types';
import style from '../ForecastInfo/ForecastInfo.module.scss';

export const TitleInfo = ({ Forecastweather }: TitleInfiProps) => {
  return (
    <>
      {Forecastweather.city.name && (
        <h2 className={style.forecastTitle}>{Forecastweather.city.name}</h2>
      )}

      <div className={style.forecastInfoThumb}>
        <WeatherIcon
          src={Forecastweather.list[0].weather[0].icon}
          alt={Forecastweather.list[0].weather[0].description}
        />

        {Forecastweather.list[0].main.temp && (
          <p>{Math.round(Forecastweather.list[0].main.temp)}°</p>
        )}

        {Forecastweather.list[0].main.feels_like && (
          <p>
            feels like {Math.round(Forecastweather.list[0].main.feels_like)}°
          </p>
        )}

        {Forecastweather.list[0].wind.speed && (
          <p> wind speed {Forecastweather.list[0].wind.speed}m/s</p>
        )}
      </div>
    </>
  );
};
