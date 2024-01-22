// https://leetcode.com/problems/reshape-the-matrix/description/

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]
// Example 2:

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (mat, r, c) => {
  let ml = mat.length;
  let m0l = mat[0].length;
  if (ml * m0l !== r * c) return mat;

  let arr = new Array(r).fill(0).map((el) => new Array(c).fill(0));

  let s = 0;

  for (let i = 0; i < ml; i++) {
    for (let j = 0; j < m0l; j++) {
      arr[Math.floor(s / c)][s % c] = mat[i][j];
      s++;
    }
  }
  return arr;
};
