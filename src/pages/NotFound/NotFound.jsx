import { Link } from 'react-router-dom';
import { Notification } from 'components/Notification/Notification';
import style from '../NotFound/NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={style.sectionNotFound}>
      <Notification message="Nothing to see here!" />
      <p style={{ textAlign: 'center' }}>
        <Link to="/">Go to the home page</Link>
      </p>
    </section>
  );
};

export default NotFound;
