// https://leetcode.com/problems/number-of-longest-increasing-subsequence/

// Given an integer array nums, return the number of longest increasing subsequences.

// Notice that the sequence has to be strictly increasing.

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 5
// Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.

// Constraints:

// 1 <= nums.length <= 2000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = (nums) => {
  const tracker = new Array(nums.length).fill(1);

  const frequency = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (tracker[i] < tracker[j] + 1) {
          tracker[i] = tracker[j] + 1;

          frequency[i] = frequency[j];
        } else if (tracker[i] === tracker[j] + 1) {
          frequency[i] += frequency[j];
        }
      }
    }
  }

  const longestPath = Math.max(...tracker);

  let result = 0;
  for (let k = 0; k < nums.length; k++) {
    if (tracker[k] === longestPath) result += frequency[k];
  }

  return result;
};
