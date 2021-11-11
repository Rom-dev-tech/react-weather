import style from '../Button/Button.module.scss';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {title}
    </button>
  );
};
