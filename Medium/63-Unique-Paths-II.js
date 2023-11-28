// https://leetcode.com/problems/unique-paths-ii/

// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

const uniquePathsWithObstacles = (obstacleGrid) => {
  const l = obstacleGrid.length;
  const l0 = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[l - 1][l0 - 1] === 1) return 0;

  const tbl = Array.from({ length: l }, () => new Array(l0).fill(0));

  for (let i = 0; i < tbl.length; i++) {
    if (obstacleGrid[i][0] === 1) break;
    tbl[i][0] = 1;
  }

  for (let i = 0; i < tbl[0].length; i++) {
    if (obstacleGrid[0][i] === 1) break;
    tbl[0][i] = 1;
  }

  for (let i = 1; i < tbl.length; i++) {
    for (let j = 1; j < tbl[i].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        tbl[i][j] = 0;
      } else {
        tbl[i][j] = tbl[i - 1][j] + tbl[i][j - 1];
      }
    }
  }
  return tbl[tbl.length - 1][tbl[0].length - 1];
};
