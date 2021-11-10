import PropTypes from 'prop-types';
import { SearchBar } from 'components/SearchBar/SearchBar';
import defaultIcon from 'images/logo.png';
import style from 'components/ForecastInfo/ForecastInfo.module.scss';

export const ForecastInfo = ({ Forecastweather, onChangeSubmit }) => {
  return (
    <section className={style.section}>
      <SearchBar onSubmit={onChangeSubmit} />
      <h1 className={style.forecastTitle}>{Forecastweather.city.name}</h1>

      <div className={style.forecastInfoThumb}>
        <img
          className={style.icon}
          src={
            Forecastweather.list[0].weather[0].icon !== null
              ? `http://openweathermap.org/img/wn/${Forecastweather.list[0].weather[0].icon}@2x.png`
              : defaultIcon
          }
          alt={
            Forecastweather.list[0].weather[0].icon.description !== null
              ? Forecastweather.list[0].weather[0].icon.description
              : 'icon weather'
          }
        />

        <p>{Math.round(Forecastweather.list[0].main.temp)}°</p>
        <p>feels like {Math.round(Forecastweather.list[0].main.feels_like)}°</p>
        <p> wind speed {Forecastweather.list[0].wind.speed}m/s</p>
      </div>

      <ul className={style.list}>
        {Forecastweather.list.map((item) => (
          <li key={item.dt} className={style.item}>
            <p className={style.date}>{item.dt_txt.split(' ')[0]}</p>
            <p className={style.time}>{item.dt_txt.split(' ')[1]}</p>
            <p className={style.time}>{item.weather[0].description}</p>

            <img
              className={style.icon}
              src={
                item.weather[0].icon !== null
                  ? `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                  : defaultIcon
              }
              alt={
                item.weather[0].description !== null
                  ? item.weather[0].description
                  : 'icon weather'
              }
            />
            <p className={style.temp}>{Math.round(item.main.temp)}°</p>
            <p className={style.temp}>{item.wind.speed}m/s</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

ForecastInfo.propTypes = {
  Forecastweather: PropTypes.object.isRequired,
  onChangeSubmit: PropTypes.func.isRequired,
};
