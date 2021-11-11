import { ButtonsList } from '../ButtonsList/ButtonsList';
import { CardInfo } from '../CurrentInfo/CardInfo';
import { Title } from '../Title/Title';
import { IWeather } from '../../pages/CurrentWeather/CurrentWeather';
import style from '../CurrentInfo/CurrentInfo.module.scss';

type CurrentIngoProps = {
  weather: IWeather;
  setCity: (city: string) => void;
  city: string;
};

export const CurrentInfo = ({ weather, setCity, city }: CurrentIngoProps) => {
  return (
    <section className={style.section}>
      <Title title="Current Weather in City:" />

      <ButtonsList city={city} setCity={setCity} />

      <CardInfo weather={weather} />
    </section>
  );
};
