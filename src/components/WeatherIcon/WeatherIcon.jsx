import PropTypes from 'prop-types';

import defaultIcon from 'images/logo.png';

export const WeatherIcon = ({ src, alt }) => {
  return (
    <img
      src={src ? `http://openweathermap.org/img/wn/${src}@2x.png` : defaultIcon}
      alt={alt ? alt : 'icon weather'}
    />
  );
};

WeatherIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
