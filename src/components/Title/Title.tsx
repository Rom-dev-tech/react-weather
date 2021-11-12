import { TitleProps } from '../../types/types';
import style from '../Title/Title.module.scss';

export const Title = ({ title }: TitleProps) => (
  <h1 className={style.currentWeatherTitle}>{title}</h1>
);
