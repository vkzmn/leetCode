// https://leetcode.com/problems/remove-covered-intervals/

// Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

// The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

// Return the number of remaining intervals.

//     Example 1:

//     Input: intervals = [[1,4],[3,6],[2,8]]
//     Output: 2
//     Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
//     Example 2:

//     Input: intervals = [[1,4],[2,3]]
//     Output: 1

//     Constraints:

//     1 <= intervals.length <= 1000
//     intervals[i].length == 2
//     0 <= li < ri <= 10^5
//     All the given intervals are unique.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let prev = intervals[0];
  let curr = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] < intervals[i][1]) {
      curr++;
      prev = intervals[i];
    }
  }
  return curr;
};
