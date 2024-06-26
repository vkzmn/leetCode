// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 10^5
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
  let node = head;
  let first = head;
  let second = head;
  for (let i = 1; i < k; i++) {
    node = node.next;
    second = second.next;
  }

  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }

  let temp = first.val;
  first.val = node.val;
  node.val = temp;

  return head;
};
