/**
Take four parameters. Multiply the four numbers and then return the result
 */

function multiplyOfNumbers(num1, num2, num3, num4) {
  const result = num1 * num2 * num3 * num4;
  return result;
}

const num1 = 21;
const num2 = 12;
const num3 = 31;
const num4 = 54;

const multiply = multiplyOfNumbers(num1, num2, num3, num4);
console.log(multiply);
