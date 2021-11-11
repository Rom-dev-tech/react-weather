import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchForecastWeather } from '../../service/weather-api';
import { ForecastInfo } from '../../components/ForecastInfo/ForecastInfo';
import { Loading } from '../../components/Loader/Loader';
import { Notification } from '../../components/Notification/Notification';

export type IForecastWeather = {
  list: [
    {
      dt: 1636664400;
      main: {
        temp: 0.86;
        feels_like: -3.39;
      };
      weather: [
        {
          id: 804;
          description: 'overcast clouds';
          icon: '04n';
        }
      ];
      wind: {
        speed: 4.25;
      };
      dt_txt: '2021-11-11 21:00:00';
    }
  ];
  city: {
    id: 625144;
    name: 'Minsk';
  };
};

const WeatherForecast = () => {
  const [Forecastweather, setForecastweather] = useState<IForecastWeather>();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const location = useLocation();
  const navidate = useNavigate();

  const city = new URLSearchParams(location.search).get('weatherIn') ?? 'Minsk';

  const onChangeSubmit = (query: string) => {
    if (query === city) {
      return;
    }

    navidate({
      ...location,
      search: `weatherIn=${query}`,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setError('');

    fetchForecastWeather(city)
      .then((data) => {
        setForecastweather(data);
        setIsLoading(false);
        setError('');
      })
      .catch((error) => {
        setError('City not found');
        setIsLoading(false);
      });
  }, [city]);

  if (!Forecastweather) {
    return <div />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Notification message={error} />;
  }

  return (
    <ForecastInfo
      Forecastweather={Forecastweather}
      onChangeSubmit={onChangeSubmit}
    />
  );
};

export default WeatherForecast;
