/**
 * https://leetcode.com/problems/implement-stack-using-queues/
 */
class Queue {

  constructor() {
      this.queue = [];
  }

  pushBack(x) {
      this.queue.unshift(x);
  }

  pop() {
      return this.queue.shift();
  }

  top() {
      return this.queue[0];
  }

  size() {
      return this.queue.length;
  }

  empty() {
      return this.queue.length === 0;
  }

}


/**
* Initialize your data structure here.
*/
var MyStack = function() {
  this.queue = new Queue();
};

/**
* Push element x onto stack.
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue.pushBack(x);
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.queue.pop();
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.queue.top();
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue.empty();
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/