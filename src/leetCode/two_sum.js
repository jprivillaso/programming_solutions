/**
 * https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const indexes = {};
    for (let i = 0; i < nums.length; ++i) {

        let temp = target - nums[i];

        if (indexes[temp] !== undefined) {
            return [indexes[temp], i];
        }

        indexes[nums[i]] = i;

    }

};