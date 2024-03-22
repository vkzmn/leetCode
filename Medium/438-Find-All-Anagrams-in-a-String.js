// https://leetcode.com/problems/find-all-anagrams-in-a-string/

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  let res = [];
  let left = 0;
  let right = 0;
  let hash = {};
  let uniqueChars = 0;

  for (let c of p) {
    if (hash[c] == null) {
      uniqueChars++;
      hash[c] = 1;
    } else {
      hash[c]++;
    }
  }

  for (right; right < s.length; right++) {
    if (hash[s[right]] != null) hash[s[right]]--;
    if (hash[s[right]] == 0) uniqueChars--;
    if (uniqueChars == 0) res.push(left);
    if (right - left + 1 == p.length) {
      if (hash[s[left]] != null) hash[s[left]]++;
      if (hash[s[left++]] == 1) uniqueChars++;
    }
  }
  return res;
};
