import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonsList } from '../../components/ButtonsList/ButtonsList';
import { InfoDay } from '../../components/InfoDay/InfoDay';
import { fetchCurrentWeather } from '../../service/weather-api';
import { Loading } from '../../components/Loader/Loader';
import { Notification } from '../../components/Notification/Notification';

const CurrentWeather = () => {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('idel');
  const location = useLocation();

  const city = new URLSearchParams(location.search).get('weatherIn') ?? 'Minsk';

  useEffect(() => {
    setStatus('pending');

    fetchCurrentWeather(city)
      .then((data) => {
        setWeather(data);
        setStatus('resolved');
      })
      .catch((error) => {
        setError({ message: 'Error not found' });
        setStatus('rejected');
      });
  }, [city]);

  if (typeof weather.main === 'undefined') {
    return null;
  }

  return (
    <>
      {status === 'pending' && <Loading />}

      {status === 'rejected' && <Notification message={error.message} />}

      {status === 'resolved' && (
        <>
          <ButtonsList order={city} />
          <InfoDay weather={weather} />
        </>
      )}
    </>
  );
};

export default CurrentWeather;
