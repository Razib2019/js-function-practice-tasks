/**
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(values) {
  let sum = 0;
  for (let value of values) {
    if (value == "0") {
      sum = sum + 1;
    }
  }
  return sum;
}

const binaryString = "1001001011110";
const result = count_zero(binaryString);
console.log("Total Number of 0 in the string has:", result);
