// https://leetcode.com/problems/path-sum-ii/

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 5 + 4 + 11 + 2 = 22
// 5 + 8 + 4 + 5 = 22
// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

const pathSum = (root, targetSum) => {
  if (!root) return [];

  const paths = [];

  const dfs = (node, sum, list) => {
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        list.push(node.val);
        paths.push([...list]);
        list.pop();
      }
    }
    if (node.left) {
      list.push(node.val);
      dfs(node.left, sum - node.val, list);
      list.pop();
    }
    if (node.right) {
      list.push(node.val);
      dfs(node.right, sum - node.val, list);
      list.pop();
    }
  };

  dfs(root, targetSum, []);
  return paths;
};
