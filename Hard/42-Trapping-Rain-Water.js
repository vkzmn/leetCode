// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  let mxLeft = 0;
  let mxRight = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= mxLeft) {
        mxLeft = height[left];
      } else {
        res += mxLeft - height[left];
      }
      ++left;
    } else {
      if (height[right] >= mxRight) {
        mxRight = height[right];
      } else {
        res += mxRight - height[right];
      }
      --right;
    }
  }
  return res;
};
