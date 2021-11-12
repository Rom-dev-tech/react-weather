import { ButtonProps } from '../../types/types';
import style from '../Button/Button.module.scss';

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {title}
    </button>
  );
};
