// https://leetcode.com/problems/design-linked-list/

// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

var Node = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function (head) {
  this.head = head;
  this.tail = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index >= this.size || index < 0) return -1;
  let idx = 0;
  var current = this.head;
  while (current) {
    if (idx === index) return current.val;
    current = current.next;
    idx++;
  }
};

MyLinkedList.prototype.addAtHead = function (val) {
  var node = new Node(val);
  if (this.head) {
    node.next = this.head;
    this.head = node;
  } else {
    this.head = node;
    this.tail = this.head;
  }
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  var node = new Node(val);
  if (this.tail) this.tail.next = node;
  else this.head = node;
  this.tail = node;
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  let idx = 0;
  var current = this.head;
  while (current) {
    if (idx === index - 1) {
      var node = new Node(val);
      node.next = current.next;
      current.next = node;
      this.size++;
      return;
    }
    current = current.next;
    idx++;
  }
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return;
  }
  let idx = 0;
  var current = this.head;
  while (current) {
    if (idx === index - 1) {
      current.next = current.next.next ? current.next.next : null;
      if (!current.next) {
        this.tail = current;
      }
      this.size--;
      return;
    }
    current = current.next;
    idx++;
  }
};
