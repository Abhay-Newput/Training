let now = new Date();
// console.log(now); // shows current date/time

//Show a weekday
/**
 * The function `getWeekDay` returns the abbreviated day of the week for a given date.
 * @param date - date: January 3, 2014
 * @returns The code is returning the weekday abbreviation for the date "3 Jan 2014", which is "FR" for
 * Friday.
 */
function getWeekDay(date) {
  var days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

var date = new Date(2014, 0, 3); // 3 Jan 2014
console.log(getWeekDay(date)); // FR

// Which day of month was many days ago?

/**
 * The function `getDateAgo` calculates the day of the month `days` days ago from a given `date`.
 * @param date - The `date` parameter in the `getDateAgo` function represents the starting date from
 * which you want to calculate the date that was `days` ago. In the example provided, the `date` is set
 * to January 2, 2015.
 * @param days - The `days` parameter in the `getDateAgo` function represents the number of days to
 * subtract from the given `date` in order to calculate a new date.
 * @returns The function `getDateAgo` is returning the day of the month for a date that is `days` days
 * before the input `date`.
 */
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

var date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

//Last day of month?

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28

// How many seconds have passed today?

function getSecondsToday() {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}

console.log(getSecondsToday());

// Format the relative date
function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // formatting
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "right now";
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`;
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
