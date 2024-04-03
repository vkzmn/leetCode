// https://leetcode.com/problems/palindromic-substrings/

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    search(s, i, i); //finds single number length Palindromic
    search(s, i, i + 1); //finds all even number length Palindromic
  }
  return count;

  function search(s, low, high) {
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      count += 1;
      low -= 1;
      high += 1;
    }
  }
};
//
