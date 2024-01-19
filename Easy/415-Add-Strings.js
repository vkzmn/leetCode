// https://leetcode.com/problems/add-strings/

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const maxLength = Math.max(num1.length, num2.length);
  let res = [];
  let carry = 0;

  if (num1.length < num2.length) {
    num1 = "0".repeat(maxLength - num1.length) + num1;
  } else {
    num2 = "0".repeat(maxLength - num2.length) + num2;
  }

  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = num1.charCodeAt(i) - 48 + num2.charCodeAt(i) - 48 + carry;

    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else {
      sum = sum;
      carry = 0;
    }

    res.unshift(sum);

    if (i === 0 && carry === 1) {
      res.unshift(carry);
    }
  }

  return res.join("");
};
