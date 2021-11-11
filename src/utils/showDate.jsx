export const showDate = () => {
  const monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const dateObj = new Date();

  const day = dateObj.getDay();
  const numDayday = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const result = `${daysArr[day]}, ${numDayday} ${monthArr[month]} ${year}`;

  return result;
};
