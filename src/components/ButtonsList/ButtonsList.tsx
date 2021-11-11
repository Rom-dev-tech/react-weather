import { Button } from '../Button/Button';
import style from '../ButtonsList/ButtonsList.module.scss';

type ButtonsListProps = {
  city: string;
  setCity: (city: string) => void;
};
const cities = ['Minsk', 'Moscow', 'Bratislava', 'Kiev'];

export const ButtonsList = ({ city, setCity }: ButtonsListProps) => {
  const onButtonClick = (selectedCity: string): void => {
    if (selectedCity !== city) setCity(selectedCity);
  };
  return (
    <ul className={style.buttonsList}>
      {cities.map((item) => (
        <li key={item} className={style.button}>
          <Button title={item} onClick={() => onButtonClick(item)} />
        </li>
      ))}
    </ul>
  );
};
