// https://leetcode.com/problems/subsets-ii/description/

// Given an integer array nums that may contain duplicates, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];
  const obj = {};

  const dfs = (i, nums, temp) => {
    if (i === nums.length) {
      res.push([...temp]);
      return;
    }

    // including
    temp.push(nums[i]);
    dfs(i + 1, nums, temp);
    temp.pop();

    // excluding
    dfs(i + 1, nums, temp);
  };

  dfs(0, nums, []);

  for (let el of res) {
    if (obj[el]) continue;
    obj[el] = el;
  }

  return Object.values(obj);
};
