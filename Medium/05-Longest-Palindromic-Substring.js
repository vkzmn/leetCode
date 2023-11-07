// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let longest = [0, 1];

  const palindrome = (left, right) => {
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;
      left--;
      right++;
    }
    return [left + 1, right];
  };

  for (let i = 0; i < s.length; i++) {
    let odd = palindrome(i - 1, i + 1);
    let even = palindrome(i - 1, i);
    let max = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    longest = longest[1] - longest[0] > max[1] - max[0] ? longest : max;
  }

  return s.slice(longest[0], longest[1]);
};
