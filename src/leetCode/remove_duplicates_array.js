var removeDuplicates = function(nums) {

  for (let i = 0, j = 1; j < nums.length;) {

      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      } else {
        i += 1;
        j += 1;
      }

  }

  return nums.length;

};

var removeDuplicatesFaster = function(nums) {

  let i = j = 0;
  for (i = 0, j = 1; j < nums.length;) {

      if (nums[i] === nums[j]) {
          j += 1;
      } else {

          i += 1;
          // Swap i and j
          const temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          j += 1;

      }

  }

  let index = -1;
  for (let i = 0; i < nums.length - 1; ++i) {

    if (nums[i] >= nums[i + 1]) {
      index = i;
      break;
    }

  }

  if (index !== -1) {
    nums.splice(index + 1, nums.length);
  }

  return nums.length;

};

console.log(removeDuplicates([]));
console.log(removeDuplicates([1, 1]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 1, 2, 3, 4, 5]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));