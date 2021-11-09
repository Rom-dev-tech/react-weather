import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchForecastWeather } from 'service/weather-api';
import { ForecastInfo } from 'components/ForecastInfo/ForecastInfo';
import { Loading } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { Status } from 'Helpers/status';

const WeatherForecast = () => {
  const [Forecastweather, setForecastweather] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
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
    setStatus(Status.PENDING);

    fetchForecastWeather(city)
      .then((data) => {
        setForecastweather(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError({ message: 'Error not found' });
        setStatus(Status.REJECTED);
      });
  }, [city]);

  if (typeof Forecastweather.list === 'undefined') {
    return null;
  }

  return (
    <>
      {status === Status.PENDING && <Loading />}

      {status === Status.REJECTED && <Notification message={error.message} />}

      {status === Status.RESOLVED && (
        <ForecastInfo
          Forecastweather={Forecastweather}
          onChangeSubmit={onChangeSubmit}
        />
      )}
    </>
  );
};

export default WeatherForecast;
