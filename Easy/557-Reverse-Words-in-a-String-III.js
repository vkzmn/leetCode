// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  return (arr = s.split(" ").map((elem) => {
    let el = elem.split("");
    for (let i = 0, j = el.length - 1; i < j; i++, j--) {
      [el[i], el[j]] = [el[j], el[i]];
    }
    return el.join("");
  })).join(" ");
};
