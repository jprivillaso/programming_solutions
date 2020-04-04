/**
 * https://leetcode.com/problems/odd-even-linked-list/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

  if (!head || !head.next) return head

  const oddHead = head;
  const evenHead = head.next;
  let oddPos = oddHead;
  let evenPos = evenHead;

  while (oddPos.next.next) {

    oddPos.next = oddPos.next.next;
    oddPos = oddPos.next;

    if (!evenPos.next.next) {
      oddPos.next = evenHead;
      evenPos.next = null;
      return oddHead;
    }

    evenPos.next = evenPos.next.next;
    evenPos = evenPos.next;
  }

  oddPos.next = evenHead;
  return oddHead;

}