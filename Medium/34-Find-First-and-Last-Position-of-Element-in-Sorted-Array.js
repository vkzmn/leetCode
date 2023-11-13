// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let res = [-1, -1];

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }

  if (nums[l] !== target) return res;
  else res[0] = l;
  r = nums.length - 1;

  while (l < r) {
    let mid = Math.ceil((l + r) / 2);
    if (nums[mid] > target) r = mid - 1;
    else l = mid;
  }

  res[1] = r;
  return res;
};
