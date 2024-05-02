/*
Problem Statement: 

Convert given number into String-- 

input: 15000;
output: Fifteen Thousand
*/

function numberToWords(num) {
  const ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num < 20) {
    return ones[num];
  }

  if (num < 100) {
    const tensDigit = Math.floor(num / 10);
    const onesDigit = num % 10;
    return `${tens[tensDigit]}${onesDigit ? " " + ones[onesDigit] : ""}`;
  }

  if (num < 1000) {
    const hundredsDigit = Math.floor(num / 100);
    const remainingNum = num % 100;
    return `${ones[hundredsDigit]} hundred${
      remainingNum ? " " + numberToWords(remainingNum) : ""
    }`;
  }

  if (num < 1000000) {
    const thousandsDigit = Math.floor(num / 1000);
    const remainingNum = num % 1000;
    return `${numberToWords(thousandsDigit)} thousand${
      remainingNum ? " " + numberToWords(remainingNum) : ""
    }`;
  }

  if (num < 1000000000) {
    const millionsDigit = Math.floor(num / 1000000);
    const remainingNum = num % 1000000;
    return `${numberToWords(millionsDigit)} million${
      remainingNum ? " " + numberToWords(remainingNum) : ""
    }`;
  }

  if (num < 1000000000000) {
    const billionsDigit = Math.floor(num / 1000000000);
    const remainingNum = num % 1000000000;
    return `${numberToWords(billionsDigit)} billion${
      remainingNum ? " " + numberToWords(remainingNum) : ""
    }`;
  }

  return "Number too large to convert to words";
}

console.log(numberToWords(0));
