// https://leetcode.com/problems/ugly-number-ii/

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// Constraints:

// 1 <= n <= 1690

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = (n) => {
  let arr = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  for (let i = 1; i < n; i++) {
    let next2 = arr[p2] * 2;
    let next3 = arr[p3] * 3;
    let next5 = arr[p5] * 5;
    arr[i] = Math.min(next2, Math.min(next3, next5));
    if (arr[i] == next2) p2++;
    if (arr[i] == next3) p3++;
    if (arr[i] == next5) p5++;
    arr.push(arr[i]);
  }

  return arr[n - 1];
};
