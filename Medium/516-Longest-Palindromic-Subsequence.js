// https://leetcode.com/problems/longest-palindromic-subsequence/

// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
// Example 2:

// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".

// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = (s) => {
  const len = s.length;
  const arr = Array(len)
    .fill(0)
    .map(() => Array(len).fill(0));

  for (let i = len - 1; i >= 0; i--) {
    arr[i][i] = 1;

    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        arr[i][j] = arr[i + 1][j - 1] + 2;
      } else {
        arr[i][j] = Math.max(arr[i + 1][j], arr[i][j - 1]);
      }
    }
  }

  return arr[0][len - 1];
};
