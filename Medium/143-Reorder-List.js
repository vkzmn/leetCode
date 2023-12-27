// https://leetcode.com/problems/reorder-list/

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  // nothing need to be done in case the list is either empty or contains onlu one or two nodes
  if (!head || !head.next || !head.next.next) return head;

  //  step 1: use fast and slow pointer to move to the middle of linked list
  //  in case list is even, move to the middle left node
  let fast = head.next;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // get the second half of list
  const secondHalf = slow.next;

  // break the list
  slow.next = null;

  // step 2: reverse the second half
  let curr = secondHalf;
  let prev = null;
  let temp;

  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // step 3: combine first half with second half
  let first = head;
  let second = prev;

  while (second) {
    temp = first.next;
    first.next = second;
    second = second.next;
    first.next.next = temp;
    first = temp;
  }
};
