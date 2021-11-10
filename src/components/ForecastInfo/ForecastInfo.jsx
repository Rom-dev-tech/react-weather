import PropTypes from 'prop-types';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { TitleInfo } from 'components/ForecastInfo/TitleInfo';
import { CardsGalleryInfo } from 'components/ForecastInfo/CardsGalleryInfo';
import style from 'components/ForecastInfo/ForecastInfo.module.scss';

export const ForecastInfo = ({ Forecastweather, onChangeSubmit }) => {
  return (
    <section className={style.section}>
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
