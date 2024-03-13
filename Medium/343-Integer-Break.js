// https://leetcode.com/problems/integer-break/

// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: n = 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

// Constraints:

// 2 <= n <= 58

/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = (n) => {
  const arr = new Array(n + 1).fill(0);
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      arr[i] = Math.max(Math.max(arr[i], arr[i - j] * j), (i - j) * j);
    }
  }
  return arr[n];
};
