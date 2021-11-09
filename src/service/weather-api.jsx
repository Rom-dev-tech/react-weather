const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '52d1b8a08da4b0b2a6a50290af58193b';

export const fetchCurrentWeather = async (city) => {
  const url = `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const fetchObject = await response.json();

  if (fetchObject.cod === 200) {
    return fetchObject;
  }

  return Promise.reject(new Error(`Error not found`));
};

export const fetchForecastWeather = async (city = 'Minsk') => {
  const url = `${BASE_URL}forecast?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const fetchObject = await response.json();

  if (fetchObject.cod === '200') {
    return fetchObject;
  }

  return Promise.reject(new Error(`Error not found`));
};
