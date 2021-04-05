var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();
const day = days[today.getDay()];
const dateNum = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();

let date: JSX.Element;
switch (dateNum) {
  case 1:
  case 21:
  case 31:
    date = (
      <span>
        {dateNum}
        <sup>st</sup>
      </span>
    );
    break;
  case 2:
  case 22:
    date = (
      <span>
        {dateNum}
        <sup>nd</sup>
      </span>
    );
    break;
  case 3:
  case 23:
    date = (
      <span>
        {dateNum}
        <sup>rd</sup>
      </span>
    );
    break;
  default:
    date = (
      <span>
        {dateNum}
        <sup>th</sup>
      </span>
    );
}

export { day, date, month, year };
