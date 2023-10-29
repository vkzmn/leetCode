// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let arr = [];

  for (let char of s) {
    if (obj[char]) {
      // char is opening bracket push corresponding closing
      arr.push(obj[char]);
    } else if (arr.length > 0 && arr[arr.length - 1] === char) {
      // char is closing bracket and last element matches remove that parenthesis
      arr.pop();
    } else {
      // char is closing bracket and last elem doesn't match -> wrong order
      return false;
    }
  }

  return arr.length === 0;
};
