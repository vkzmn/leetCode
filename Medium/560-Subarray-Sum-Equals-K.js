// https://leetcode.com/problems/subarray-sum-equals-k/

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// -1000 <= nums[i] <= 1000
// -10^7 <= k <= 10^7

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    sum = sum + num;
    total += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return total;
};
