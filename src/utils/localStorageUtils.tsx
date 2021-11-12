import { DEFAULT_CITY } from '../Constants/Constants';

export const setCityToLS = (title: string) =>
  localStorage.setItem('city', title);

export const getCityFromLS = () => localStorage.getItem('city') || DEFAULT_CITY;
