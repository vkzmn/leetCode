// https://leetcode.com/problems/ransom-note/description/

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// const canConstruct = (ransomNote, magazine) => {
//   let map = {}

//   for (let char of magazine) {
//     map[char] = (map[char] || 0) + 1
//   }

//   for (let char of ransomNote) {
//     if (!map[char] || map[char] === 0) {
//       return false
//     } else {
//       map[char] = map[char] - 1
//     }
//   }
//   return true
// }

const canConstruct = (ransomNote, magazine) => {
  const map = new Map();

  for (let char of magazine) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  console.log(map);

  for (let char of ransomNote) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    } else {
      map.set(char, map.get(char) - 1);
    }
  }
  return true;
};
