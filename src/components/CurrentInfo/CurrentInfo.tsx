import { ButtonsList } from '../ButtonsList/ButtonsList';
import { CardInfo } from '../CurrentInfo/CardInfo';
import { Title } from '../Title/Title';
import { CurrentIngoProps } from '../../types/types';
import style from '../CurrentInfo/CurrentInfo.module.scss';

export const CurrentInfo = ({ weather, setCity, city }: CurrentIngoProps) => {
  return (
    <section className={style.section}>
      <Title title="Current Weather in City:" />

      <ButtonsList city={city} setCity={setCity} />

      <CardInfo weather={weather} />
    </section>
  );
};
