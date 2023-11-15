// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */

// const preorderTraversal = (root) => {
//   if (!root) return []
//   const res = []

//   const preorder = (node) => {
//     if (!node) return null

//     res.push(node.val)
//     if (node.left) preorder(node.left)
//     if (node.right) preorder(node.right)
//   }

//   preorder(root)
//   return res
// }

const preorderTraversal = (root) => {
  if (!root) return [];

  const stack = [root];
  const res = [];

  while (stack.length) {
    let el = stack.pop();

    res.push(el.val);
    if (el.right) stack.push(el.right);
    if (el.left) stack.push(el.left);
  }

  return res;
};
