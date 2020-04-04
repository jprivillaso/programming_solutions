/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {

  const res = [];
  const stack = [];
  let curr = root;

  while (curr != null || !(stack.length === 0)) {

      while (curr != null) {
          stack.push(curr);
          curr = curr.left;
      }

      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;

  }

  return res;

};