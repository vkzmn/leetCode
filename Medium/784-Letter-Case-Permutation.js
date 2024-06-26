// https://leetcode.com/problems/letter-case-permutation/

// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// Constraints:

// 1 <= s.length <= 12
// s consists of lowercase English letters, uppercase English letters, and digits.

/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = (s) => {
  const res = [];

  const dfs = (i, s, temp) => {
    // base case
    if (i === s.length) {
      res.push(temp.join(""));
      return;
    }

    // recursive case
    let char = s[i];
    if (!Number.isInteger(parseInt(char))) {
      // lowercase
      temp.push(char.toLowerCase());
      dfs(i + 1, s, temp);
      temp.pop();
      // uppercase
      temp.push(char.toUpperCase());
      dfs(i + 1, s, temp);
      temp.pop();
    } else {
      temp.push(char);
      dfs(i + 1, s, temp);
      temp.pop();
    }
  };

  dfs(0, s, []);
  return res;
};
