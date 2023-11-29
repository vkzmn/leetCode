// https://leetcode.com/problems/minimum-path-sum/

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 200

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  let arr = Array.from({ length: m }, (v) => new Array(n).fill(0));
  arr[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    arr[i][0] = arr[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < n; i++) {
    arr[0][i] = arr[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let current = grid[i][j];
      arr[i][j] = current + Math.min(arr[i - 1][j], arr[i][j - 1]);
    }
  }
  return arr[m - 1][n - 1];
};
