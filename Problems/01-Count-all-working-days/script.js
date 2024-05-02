/*
Problem Statement: Find the total number of working days between the two dates

example: 
 input: date 1 - 1-may-2024
        date 2 - 31- may-2024
 output: 23
*/

var startDay = new Date("1999-08-15");
var endDay = new Date("2002-02-11");

// const startDay = new Date(date1).getDay();
// const endDay = new Date(date2).getDay();

function countDays(DayOne, DayLast) {
  //   const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  //   const diffDays = Math.round(Math.abs((DayOne - DayLast) / oneDay));

  let current = DayOne;
  let count = 0;

  while (current <= DayLast) {
    if (
      current.getDay() == 1 ||
      current.getDay() == 2 ||
      current.getDay() == 3 ||
      current.getDay() == 4 ||
      current.getDay() == 5
    ) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }

  return count;
}

console.log(countDays(startDay, endDay));
// countDays(startDay, endDay);
