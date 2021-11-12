export type IWeather = {
  weather: [
    {
      id: number;
      description?: string;
      icon?: string;
    }
  ];

  main: {
    temp?: number;
    feels_like?: number;
  };

  wind: {
    speed?: number;
  };
  dt?: number;
  id: number;
  name?: string;
};

export type IForecastWeather = {
  list: [
    {
      dt?: number;
      main: {
        temp?: number;
        feels_like?: number;
      };
      weather: [
        {
          id: number;
          description?: string;
          icon?: string;
        }
      ];
      wind: {
        speed?: number;
      };
      dt_txt?: string;
    }
  ];
  city: {
    id: number;
    name?: string;
  };
};

export type ButtonProps = {
  title: string;
  onClick: () => void;
};

export type ButtonsListProps = {
  city: string;
  setCity: (city: string) => void;
};

export type CardInfoProps = {
  weather: IWeather;
};

export type CurrentIngoProps = {
  weather: IWeather;
  setCity: (city: string) => void;
  city: string;
};

export type CardsGalleryInfoProps = {
  Forecastweather: IForecastWeather;
};

export type ForecastInfoProps = {
  Forecastweather: IForecastWeather;
  onChangeSubmit: (query: string) => void;
};

export type TitleInfiProps = {
  Forecastweather: IForecastWeather;
};

export type NotificationProps = {
  message: string;
};

export type SearchBarProps = {
  onSubmit: (query: string) => void;
};

export type TitleProps = {
  title: string;
};

export type WeatherIconProps = {
  src?: string;
  alt?: string;
};
