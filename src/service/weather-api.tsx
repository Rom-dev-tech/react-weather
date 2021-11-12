import { API_KEY, BASE_URL } from '../Constants/Constants';

export const fetchCurrentWeather = async (city: string) => {
  const url = `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const fetchObject = await response.json();

  if (fetchObject.cod === 200) {
    return fetchObject;
  }

  return Promise.reject(new Error(`Error`));
};

export const fetchForecastWeather = async (city: string) => {
  const url = `${BASE_URL}forecast?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const fetchObject = await response.json();

  if (fetchObject.cod === '200') {
    return fetchObject;
  }

  return Promise.reject(new Error(`Error`));
};
