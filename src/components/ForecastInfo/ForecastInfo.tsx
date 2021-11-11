import { SearchBar } from '../SearchBar/SearchBar';
import { TitleInfo } from '../ForecastInfo/TitleInfo';
import { CardsGalleryInfo } from '../ForecastInfo/CardsGalleryInfo';
import { Title } from '../Title/Title';
import { IForecastWeather } from '../../pages/WeatherForecast/WeatherForecast';
import style from '../ForecastInfo/ForecastInfo.module.scss';

type ForecastInfoProps = {
  Forecastweather: IForecastWeather;
  onChangeSubmit: (query: string) => void;
};

export const ForecastInfo = ({
  Forecastweather,
  onChangeSubmit,
}: ForecastInfoProps) => {
  return (
    <section className={style.section}>
      <Title title="Forecast Weather 5 Day / 3 Hour  in City:" />

      <SearchBar onSubmit={onChangeSubmit} />

      <TitleInfo Forecastweather={Forecastweather} />

      <CardsGalleryInfo Forecastweather={Forecastweather} />
    </section>
  );
};
