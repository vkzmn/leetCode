// https://leetcode.com/problems/delete-operation-for-two-strings/

// Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

// In one step, you can delete exactly one character in either string.

// Example 1:

// Input: word1 = "sea", word2 = "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
// Example 2:

// Input: word1 = "leetcode", word2 = "etco"
// Output: 4

// Constraints:

// 1 <= word1.length, word2.length <= 500
// word1 and word2 consist of only lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  let arr1 = word1.split("");
  let arr2 = word2.split("");
  let dp = new Array(arr1.length + 1);
  for (var i = 0; i < arr1.length + 1; i++) {
    dp[i] = new Array(arr2.length + 1).fill(0);
  }
  for (var i = 0; i <= arr1.length; i++) {
    for (var j = 0; j <= arr2.length; j++) {
      if (i == 0) {
        dp[i][j] = j;
      } else if (j == 0) {
        dp[i][j] = i;
      } else if (arr1[i - 1] == arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[arr1.length][arr2.length];
};
