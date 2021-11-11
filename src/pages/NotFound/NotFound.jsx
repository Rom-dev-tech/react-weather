import { Link } from 'react-router-dom';

import { Notification } from 'components/Notification/Notification';

const NotFound = () => {
  return (
    <>
      <Notification message="Nothing to see here!" />
      <p style={{ textAlign: 'center' }}>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
};

export default NotFound;
