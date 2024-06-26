// https://leetcode.com/problems/search-a-2d-matrix/

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let m = matrix[0].length;
  let left = 0;
  let right = matrix.length * m - 1;
  while (left < right) {
    let center = Math.floor((left + right) / 2);
    let i = Math.floor(center / m);
    let j = center % m;
    if (matrix[i][j] >= target) {
      right = center;
    } else {
      left = center + 1;
    }
  }
  return matrix[Math.floor(left / m)][left % m] == target;
};
