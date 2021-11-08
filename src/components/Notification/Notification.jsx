import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.scss';

export const Notification = ({ message }) => (
  <h1 className={s.notificationError}>{message}</h1>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
