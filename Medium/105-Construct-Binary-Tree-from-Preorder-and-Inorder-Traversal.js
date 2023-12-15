// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  function buildTreeHelper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) return null;

    let value = preorder[p1];
    let index = inorder.indexOf(value);
    let nLeft = index - i1;
    let root = new TreeNode(value);

    root.left = buildTreeHelper(p1 + 1, p1 + nLeft, i1, index - 1);
    root.right = buildTreeHelper(p1 + nLeft + 1, p2, index + 1, i2);

    return root;
  }

  return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
};
