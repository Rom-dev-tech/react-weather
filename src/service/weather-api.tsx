const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '57a90a8fcac701e57c9c008de996f569';

export const fetchCurrentWeather = async (city: string) => {
  const url = `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const fetchObject = await response.json();

  if (fetchObject.cod === 200) {
    return fetchObject;
  }

  return Promise.reject(new Error(`Error`));
};
