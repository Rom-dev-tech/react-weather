export const getLocalStorage = (city) =>
  JSON.parse(localStorage.getItem('city')) ?? city;
