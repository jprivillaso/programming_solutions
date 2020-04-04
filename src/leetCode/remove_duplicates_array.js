/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let i = j = 0;
  for (i = 0, j = 1; j < nums.length;) {

      if (nums[i] === nums[j]) {
          j += 1;
      } else {
          i += 1;
          nums[i] = nums[j];
          j += 1;
      }

  }

  return i + 1;

};