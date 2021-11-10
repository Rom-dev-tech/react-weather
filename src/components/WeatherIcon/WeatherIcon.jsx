import PropTypes from 'prop-types';

import defaultIcon from 'images/logo.png';

export const WeatherIcon = ({ src, alt }) => {
  return (
    <img
      src={
        src !== null
          ? `http://openweathermap.org/img/wn/${src}@2x.png`
          : defaultIcon
      }
      alt={alt !== null ? alt : 'icon weather'}
    />
  );
};

WeatherIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
