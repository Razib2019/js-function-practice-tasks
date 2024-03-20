/**
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(numbers) {
  const len = numbers.length;
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  const result = { len, sum };
  return result;
}

const numbers = [12, 7, 8, 45, 25];
const result = make_avg(numbers);
console.log(
  "Size of the array:",
  result.len,
  "||",
  "Average of the array values:",
  result.sum
);
