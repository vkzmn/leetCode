// https://leetcode.com/problems/matrix-block-sum/

// Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

// i - k <= r <= i + k,
// j - k <= c <= j + k, and
// (r, c) is a valid position in the matrix.

// Example 1:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[12,21,16],[27,45,33],[24,39,28]]
// Example 2:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2
// Output: [[45,45,45],[45,45,45],[45,45,45]]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n, k <= 100
// 1 <= mat[i][j] <= 100

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
const matrixBlockSum = (mat, k) => {
  const m = mat.length;
  const n = mat[0].length;
  const arr = Array.from({ length: m + 1 }, (v) => new Array(n + 1).fill(0));

  const res = Array.from({ length: m }, (v) => new Array(n).fill(0));

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      arr[i][j] =
        arr[i - 1][j] + arr[i][j - 1] - arr[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }

  get = (i, j) => {
    i = Math.max(Math.min(m, i), 0);
    j = Math.max(Math.min(n, j), 0);
    return arr[i][j];
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] =
        get(i + k + 1, j + k + 1) -
        get(i + k + 1, j - k) -
        get(i - k, j + k + 1) +
        get(i - k, j - k);
    }
  }
  return res;
};
