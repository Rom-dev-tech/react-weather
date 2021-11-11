import PropTypes from 'prop-types';
import style from 'components/Notification/Notification.module.scss';

export const Notification = ({ message }) => (
  <h1 className={style.notificationError}>{message}</h1>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
