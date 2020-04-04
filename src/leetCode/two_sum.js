var twoSum = function(nums, target) {

  const originalOrder = {};

  nums.forEach((a, i) => {

      if(originalOrder[a]) {
          originalOrder[a].push(i);
      } else {
          originalOrder[a] = [i];
      }

  });

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {

      if (nums[left] + nums[right] === target) {

          const realleft = originalOrder[nums[left]].shift();
          const realright = originalOrder[nums[right]].pop();
          return [realleft, realright];

      }

      if (nums[left] + nums[right] > target) {
          right--;
      } else {
          left++;
      }

  }

};

var twoSum2 = function(nums, target) {

    const indexes = {};
    for (let i = 0; i < nums.length; ++i) {

        let temp = target - nums[i];

        if (indexes[temp] !== undefined) {
            return [indexes[temp], i];
        }

        indexes[nums[i]] = i;

    }

};

const test = [230,863,916,585,981,404,316,785,88,12,70,435,384,778,887,755,740,337,86,92,325,422,815,650,920,125,277,336,221,847,168,23,677,61,400,136,874,363,394,199,863,997,794,587,124,321,212,957,764,173,314,422,927,783,930,282,306,506,44,926,691,568,68,730,933,737,531,180,414,751,28,546,60,371,493,370,527,387,43,541,13,457,328,227,652,365,430,803,59,858,538,427,583,368,375,173,809,896,370,789];
const test2 = [-3,4,3,90];
const test3 = [-1, 0, 5, 2, 1, -4];
// const test2 = [0,7,6,93];
// console.log(twoSum(test, 542));
console.log(twoSum2(test3, 0));