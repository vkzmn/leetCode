// https://leetcode.com/problems/maximal-square/

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example 1:

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4
// Example 2:

// Input: matrix = [["0","1"],["1","0"]]
// Output: 1
// Example 3:

// Input: matrix = [["0"]]
// Output: 0

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;
  let arr = Array.from({ length: m + 1 }, (v) => new Array(n + 1).fill(0));
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == "1") {
        arr[i + 1][j + 1] =
          Math.min(Math.min(arr[i][j + 1], arr[i + 1][j]), arr[i][j]) + 1;
        max = Math.max(max, arr[i + 1][j + 1]);
      }
    }
  }
  return max * max;
};
