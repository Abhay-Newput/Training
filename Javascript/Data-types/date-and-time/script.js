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
