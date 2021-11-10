import PropTypes from 'prop-types';

import style from 'components/Title/Title.module.scss';

export const Title = ({ title }) => (
  <h1 className={style.currentWeatherTitle}>{title}</h1>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
