// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

// Constraints:

// 0 <= rowIndex <= 33

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  if (rowIndex === 1) return [1, 1];

  const triangle = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    let prevRow = triangle[i - 1];
    let currentRow = [];
    currentRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      currentRow[j] = prevRow[j] + prevRow[j - 1];
    }
    currentRow.push(1);
    triangle.push(currentRow);
  }
  return triangle[rowIndex];
};
