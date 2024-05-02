// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/

// Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.

// A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

// Return the maximum length of a subarray with positive product.

// Example 1:

// Input: nums = [1,-2,-3,4]
// Output: 4
// Explanation: The array nums already has a positive product of 24.
// Example 2:

// Input: nums = [0,1,-2,-3,-4]
// Output: 3
// Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
// Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.
// Example 3:

// Input: nums = [-1,-2,-3,0,1]
// Output: 2
// Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].

// Constraints:

// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxLen = function (nums) {
  let a = nums[0] > 0 ? 1 : 0;
  let b = nums[0] < 0 ? 1 : 0;
  let res = a;

  for (let i = 1; i < nums.length; ++i) {
    let cur = nums[i];
    if (cur == 0) {
      a = 0;
      b = 0;
    } else if (cur > 0) {
      a++;
      b = b > 0 ? b + 1 : 0;
    } else {
      let t1 = a;
      let t2 = b;
      a = t2 > 0 ? t2 + 1 : 0;
      b = t1 + 1;
    }
    res = Math.max(res, a);
  }
  return res;
};
