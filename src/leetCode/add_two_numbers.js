/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let h3 = new ListNode(0);
  let l3 = h3;
  let res, carry = 0;

  while (l1 || l2) {
      res = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = parseInt(res / 10);
      l3.next = new ListNode(res % 10);
      l3 = l3.next;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }

  if (carry > 0) {
      l3.next = new ListNode(carry);
  }

  return h3.next;

};