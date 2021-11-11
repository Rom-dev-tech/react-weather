import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import { showDate } from '../../utils/showDate';
import { IWeather } from '../../pages/CurrentWeather/CurrentWeather';
import style from '../CurrentInfo/CurrentInfo.module.scss';

type CardInfoProps = {
  weather: IWeather;
};

export const CardInfo = ({ weather }: CardInfoProps) => {
  const date: string = showDate();

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
