import style from '../Title/Title.module.scss';

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => (
  <h1 className={style.currentWeatherTitle}>{title}</h1>
);
