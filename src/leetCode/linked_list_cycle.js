/**
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

  let slowPointer = fastPointer = head;
  while (slowPointer !== null && fastPointer !== null && fastPointer.next !== null) {

      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
          return true;
      }

  }

  return false;

};