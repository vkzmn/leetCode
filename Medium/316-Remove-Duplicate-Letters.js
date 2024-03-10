// https://leetcode.com/problems/remove-duplicate-letters/

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
// the smallest in lexicographical order
//  among all possible results.

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = (s) => {
  let countObject = {};
  let inStack = {};
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!countObject[s[i]]) {
      countObject[s[i]] = 0;
    }
    countObject[s[i]]++;
    inStack[s[i]] = false;
  }

  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    let stackTop = stack[stack.length - 1];

    countObject[currentLetter]--;

    if (inStack[currentLetter]) {
      continue;
    }

    if (currentLetter < stackTop) {
      while (currentLetter < stackTop && countObject[stackTop] > 0) {
        inStack[stack.pop()] = false;
        stackTop = stack[stack.length - 1];
      }
    }

    inStack[currentLetter] = true;
    stack.push(currentLetter);
  }

  return stack.join("");
};
