// https://leetcode.com/problems/spiral-matrix-ii/

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

// Constraints:

// 1 <= n <= 20

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  let square = Array(n)
    .fill(0)
    .map((el) => Array(n).fill(0));
  let row = 0;
  let col = 0;
  let count = 0;

  while (count < n * n) {
    while (square[row][col] === 0) {
      square[row][col++] = ++count;
    }
    col--;
    row++;
    while (square[row] && square[row][col] === 0) {
      square[row++][col] = ++count;
    }
    row--;
    col--;
    while (square[row][col] === 0) {
      square[row][col--] = ++count;
    }
    col++;
    row--;
    while (square[row] && square[row][col] === 0) {
      square[row--][col] = ++count;
    }
    row++;
    col++;
  }
  return square;
};
