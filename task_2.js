/**
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function numberCalculation(number) {
  if (number % 2 === 1) {
    number = number * 2;
    return number;
  } else {
    number = number / 2;
    return number;
  }
}

const number = 8;
const result = numberCalculation(number);
console.log(result);
