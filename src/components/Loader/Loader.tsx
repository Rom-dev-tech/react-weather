import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from '../Loader/Loader.module.scss';

export const Loading = () => {
  return (
    <div className={style.loader}>
      <Loader type="Circles" color="#303f9f" height={100} width={100} />
    </div>
  );
};
