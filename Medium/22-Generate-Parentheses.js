// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = [];

  function genP(l, r, s) {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) genP(l + 1, r, s + "(");
    if (r < l) genP(l, r + 1, s + ")");
  }

  genP(0, 0, "");
  return res;
};
