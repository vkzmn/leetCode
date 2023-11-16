// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"

// Constraints:

// 1 <= columnNumber <= 231 - 1

/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
  let columnTitle = [];

  while (columnNumber > 0) {
    columnNumber--;
    let num = columnNumber % 26;
    columnTitle.unshift(String.fromCharCode(num + 65));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return columnTitle.join("");
};
