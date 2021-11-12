import { NotificationProps } from '../../types/types';
import style from '../Notification/Notification.module.scss';

export const Notification = ({ message }: NotificationProps) => (
  <h1 className={style.notificationError}>{message}</h1>
);
