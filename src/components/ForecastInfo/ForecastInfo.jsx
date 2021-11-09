import PropTypes from 'prop-types';
import { SearchBar } from 'components/SearchBar/SearchBar';
import s from 'components/ForecastInfo/ForecastInfo.module.scss';

export const ForecastInfo = ({ Forecastweather, onChangeSubmit }) => {
  return (
    <section className={s.section}>
      <SearchBar onSubmit={onChangeSubmit} />
      <h1 className={s.forecastTitle}>{Forecastweather.city.name}</h1>

      <div className={s.forecastInfoThumb}>
        <img
          className={s.icon}
          src={`http://openweathermap.org/img/wn/${Forecastweather.list[0].weather[0].icon}@2x.png`}
          alt={Forecastweather.list[0].weather[0].icon.description}
        />

        <p>{Math.round(Forecastweather.list[0].main.temp)}°</p>
        <p>feels like {Math.round(Forecastweather.list[0].main.feels_like)}°</p>
        <p> wind speed {Forecastweather.list[0].wind.speed}m/s</p>
      </div>

      <ul className={s.list}>
        {Forecastweather.list.map((item) => (
          <li key={item.dt} className={s.item}>
            <p className={s.date}>{item.dt_txt.split(' ')[0]}</p>
            <p className={s.time}>{item.dt_txt.split(' ')[1]}</p>
            <p className={s.time}>{item.weather[0].description}</p>

            <img
              className={s.icon}
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p className={s.temp}>{Math.round(item.main.temp)}°</p>
            <p className={s.temp}>{item.wind.speed}m/s</p>
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
