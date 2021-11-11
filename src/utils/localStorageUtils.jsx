const DEFAULT_CITY = 'Minsk';

export const setCityToLS = (title) => localStorage.setItem('city', title);

export const getCityFromLS = () => localStorage.getItem('city') || DEFAULT_CITY;
