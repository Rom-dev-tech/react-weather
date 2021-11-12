import { SearchBar } from '../SearchBar/SearchBar';
import { TitleInfo } from '../ForecastInfo/TitleInfo';
import { CardsGalleryInfo } from '../ForecastInfo/CardsGalleryInfo';
import { Title } from '../Title/Title';
import { ForecastInfoProps } from '../../types/types';
import style from '../ForecastInfo/ForecastInfo.module.scss';

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
