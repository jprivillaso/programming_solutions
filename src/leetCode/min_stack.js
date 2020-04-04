/**
 * https://leetcode.com/problems/min-stack/
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.tail = null;
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {

  if (!this.tail) {
      this.tail = {
          value: x, min: x, before: null
      };
      return;
  }

  this.tail = {
      value: x,
      min: Math.min(x, this.tail.min),
      before: this.tail
  };

};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.tail) this.tail = this.tail.before;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.tail ? this.tail.value : null;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.tail ? this.tail.min : null;
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/