import defaultIcon from '../../images/logo.png';

type WeatherIconProps = {
  src?: string;
  alt?: string;
};

export const WeatherIcon = ({ src, alt }: WeatherIconProps) => {
  return (
    <img
      src={src ? `http://openweathermap.org/img/wn/${src}@2x.png` : defaultIcon}
      alt={alt ? alt : 'icon weather'}
    />
  );
};
