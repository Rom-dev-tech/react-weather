import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchForecastWeather } from '../../service/weather-api';
import { ForecastInfo } from '../../components/ForecastInfo/ForecastInfo';

const WeatherForecast = () => {
  const [Forecastweather, setForecastweather] = useState([]);
  const location = useLocation();
  const navidate = useNavigate();

  const city = new URLSearchParams(location.search).get('weatherIn') ?? 'Minsk';

  const onChangeSubmit = (query) => {
    if (query === city) {
      return;
    }

    navidate({
      ...location,
      search: `weatherIn=${query}`,
    });
  };

  useEffect(() => {
    fetchForecastWeather(city).then((data) => {
      setForecastweather(data);
    });
  }, [city]);

  if (typeof Forecastweather.list === 'undefined') {
    return null;
  }

  return (
    <ForecastInfo
      Forecastweather={Forecastweather}
      onChangeSubmit={onChangeSubmit}
    />
  );
};

export default WeatherForecast;
