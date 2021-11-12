import { WeatherIconProps } from '../../types/types';
import defaultIcon from '../../images/logo.png';

export const WeatherIcon = ({ src, alt }: WeatherIconProps) => {
  return (
    <img
      src={src ? `http://openweathermap.org/img/wn/${src}@2x.png` : defaultIcon}
      alt={alt ? alt : 'icon weather'}
    />
  );
};
