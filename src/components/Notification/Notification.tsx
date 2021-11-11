import style from '../Notification/Notification.module.scss';

type NotificationProps = {
  message: string;
};

export const Notification = ({ message }: NotificationProps) => (
  <h1 className={style.notificationError}>{message}</h1>
);
