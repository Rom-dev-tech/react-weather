import { useEffect, useState } from 'react';
import { CurrentInfo } from '../../components/CurrentInfo/CurrentInfo';
import { fetchCurrentWeather } from '../../service/weather-api';
import { Loading } from '../../components/Loader/Loader';
import { Notification } from '../../components/Notification/Notification';
import { setCityToLS, getCityFromLS } from '../../utils/localStorageUtils';

export type IWeather = {
  weather: [
    {
      id: number;
      description?: string;
      icon?: string;
    }
  ];

  main: {
    temp?: number;
    feels_like?: number;
  };

  wind: {
    speed?: number;
  };
  dt?: number;
  id: number;
  name?: string;
};

const CurrentWeather = () => {
  const [city, setCity] = useState<string>(getCityFromLS());
  const [weather, setWeather] = useState<IWeather>();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setError('');

    fetchCurrentWeather(city)
      .then((data) => {
        setWeather(data);
        setIsLoading(false);
        setError('');
      })
      .catch((error) => {
        setError('Error not found');
        setIsLoading(false);
      });
  }, [city]);

  const onSelectCity = (selectedCity: string): void => {
    setCityToLS(selectedCity);
    setCity(selectedCity);
  };

  if (!weather) {
    return <div />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Notification message={error} />;
  }

  return <CurrentInfo weather={weather} setCity={onSelectCity} city={city} />;
};

export default CurrentWeather;
