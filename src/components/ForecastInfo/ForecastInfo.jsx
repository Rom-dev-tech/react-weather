import PropTypes from 'prop-types';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { TitleInfo } from 'components/ForecastInfo/TitleInfo';
import { CardsGalleryInfo } from 'components/ForecastInfo/CardsGalleryInfo';
import { Title } from 'components/Title/Title';
import style from 'components/ForecastInfo/ForecastInfo.module.scss';

export const ForecastInfo = ({ Forecastweather, onChangeSubmit }) => {
  return (
    <section className={style.section}>
      <Title title="Forecast Weather 5 Day / 3 Hour  in:" />

      <SearchBar onSubmit={onChangeSubmit} />

      <TitleInfo Forecastweather={Forecastweather} />

      <CardsGalleryInfo Forecastweather={Forecastweather} />
    </section>
  );
};

ForecastInfo.propTypes = {
  Forecastweather: PropTypes.object.isRequired,
  onChangeSubmit: PropTypes.func.isRequired,
};
