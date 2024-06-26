// https://leetcode.com/problems/is-subsequence/

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const isSubsequence = (s, t) => {
//   if (s.length === 0) return true
//   let p1 = 0
//   let p2 = 0

//   while (p1 < s.length && p2 < t.length) {
//     while (t[p2] !== s[p1]) {
//       p2++
//       if (p2 === t.length) return false
//     }
//     p1++
//     p2++
//   }

//   return p1 === s.length
// }

const isSubsequence = (s, t) => {
  let sl = s.length;
  let tl = t.length;
  let i = 0;

  for (let j = 0; j < tl && i < sl; j++) {
    if (s[i] === t[j]) i++;
  }
  return i === sl;
};
