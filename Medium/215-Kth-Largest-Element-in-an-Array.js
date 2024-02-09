// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  while (true) {
    let idx = partition(nums);
    if (nums.length - idx == k) {
      return nums[idx];
    } else if (nums.length - idx > k) {
      nums = nums.slice(idx + 1);
    } else {
      k = k - (nums.length - idx);
      nums = nums.slice(0, idx);
    }
  }
};

const partition = (nums) => {
  let l = -1;
  let r = 0;
  let pivot = nums[nums.length - 1];

  while (r < nums.length - 1) {
    if (nums[r] <= pivot) {
      l++;
      swap(nums, l, r);
    }
    r++;
  }
  swap(nums, l + 1, r);
  return l + 1;
};

const swap = (nums, i, j) => {
  if (i == j) return;
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
