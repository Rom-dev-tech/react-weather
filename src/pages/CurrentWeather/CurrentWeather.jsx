import { useEffect, useState } from 'react';
import { ButtonsList } from 'components/ButtonsList/ButtonsList';
import { InfoDay } from 'components/InfoDay/InfoDay';
import { fetchCurrentWeather } from 'service/weather-api';
import { Loading } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import helpers from 'Helpers';

const CurrentWeather = () => {
  const { initialStateCity, Status } = helpers;

  const [city, setCity] = useState(initialStateCity);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    fetchCurrentWeather(city)
      .then((data) => {
        setWeather(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError({ message: 'Error not found' });
        setStatus(Status.REJECTED);
      });
  }, [Status.PENDING, Status.REJECTED, Status.RESOLVED, city]);

  if (typeof weather.main === 'undefined') {
    return null;
  }

  const getCity = (city) => {
    setCity(city);
  };

  return (
    <>
      {status === Status.PENDING && <Loading />}

      {status === Status.REJECTED && <Notification message={error.message} />}

      {status === Status.RESOLVED && (
        <>
          <ButtonsList city={city} getCity={getCity} />
          <InfoDay weather={weather} />
        </>
      )}
    </>
  );
};

export default CurrentWeather;
