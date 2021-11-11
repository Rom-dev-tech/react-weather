import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from 'components/Loader/Loader.module.scss';

export const Loading = () => {
  return (
    <Loader
      className={style.loader}
      type="Circles"
      color="#303f9f"
      height={100}
      width={100}
    />
  );
};
