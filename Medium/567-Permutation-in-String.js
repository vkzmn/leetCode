// https://leetcode.com/problems/permutation-in-string/

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 10^4
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const permutationMatches = (chars, s1map, s2map) => {
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (!s2map[char] || s2map[char] !== s1map[char]) return false;
    }
    return true;
  };

  const chars = []; // stores permutation characters
  const s1map = {}; // stores key: val of a permutation char
  const s2map = {}; // stores key: val of char in a string

  for (let i = 0; i < s1.length; i++) {
    const s1char = s1.charAt(i);
    const s2char = s2.charAt(i);
    if (!s1map[s1char]) s1map[s1char] = 0;
    if (!s2map[s2char]) s2map[s2char] = 0;
    chars.push(s1char);
    s1map[s1char]++;
    s2map[s2char]++;
  }

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    if (permutationMatches(chars, s1map, s2map)) return true;
    const windowLeft = s2[i];
    const windowRight = s2[i + s1.length];
    if (!s2map[windowRight]) s2map[windowRight] = 0;
    s2map[windowRight]++;
    s2map[windowLeft]--;
  }

  return permutationMatches(chars, s1map, s2map);
};
