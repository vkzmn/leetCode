// https://leetcode.com/problems/subarray-product-less-than-k/

// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

// Constraints:

// 1 <= nums.length <= 3 * 10^4
// 1 <= nums[i] <= 1000
// 0 <= k <= 10^6

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  let count = 0;
  let product = 1;
  let j = 0;
  let i = 0;

  while (i < nums.length && j < nums.length) {
    if (product * nums[i] < k) {
      product = product * nums[i];
      count = count + (i - j + 1);
      i++;
    } else {
      if (nums[j]) product = product / nums[j];
      j++;
    }
  }

  return count;
};
