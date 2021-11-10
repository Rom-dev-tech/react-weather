import { useEffect, useState } from 'react';
import { ButtonsList } from 'components/ButtonsList/ButtonsList';
import { InfoDay } from 'components/InfoDay/InfoDay';
import { fetchCurrentWeather } from 'service/weather-api';
import { Loading } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { Status } from 'Helpers/status';
import { getLocalStorage } from 'utils/getLocalStorage';

const CurrentWeather = () => {
  const [city, setCity] = useState(() => getLocalStorage('Minsk'));
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
  }, [city]);

  if (!weather.main) {
    return null;
  }

  const getCity = (city) => {
    setCity(city);
  };

  if (status === Status.PENDING) {
    return <Loading />;
  }

  if (status === Status.REJECTED) {
    return <Notification message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ButtonsList city={city} getCity={getCity} />
        <InfoDay weather={weather} />
      </>
    );
  }
};

export default CurrentWeather;
