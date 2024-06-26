// https://leetcode.com/problems/non-overlapping-intervals/

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// Constraints:

// 1 <= intervals.length <= 10^5
// intervals[i].length == 2
// -5 * 10^4 <= starti < endi <= 5 * 10^4

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let n = intervals.length;
  let res = 0;
  let i = n - 1;
  while (i > 0) {
    let j = i - 1;
    while (j >= 0 && intervals[j][1] > intervals[i][0]) {
      res++;
      j--;
    }
    i = j;
  }
  return res;
};
