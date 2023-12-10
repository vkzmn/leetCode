// https://leetcode.com/problems/unique-binary-search-trees/

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:

// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 19

/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n) => {
  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      arr[i] += arr[j] * arr[i - j - 1];
    }
  }
  return arr[n];
};
