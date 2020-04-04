/**
 * https://leetcode.com/contest/weekly-contest-113/problems/largest-time-for-given-digits/
 *
 * @param {number[]} A
 * @return {string}
 */

function factorial(n) {
  if (n === 0 || n === 1 ) return n;
  return n * factorial(n-1);
}

var permute = function(nums) {

  if (nums.length < 2) return [nums];
  if (nums.length === 2) return [[nums[0],nums[1]], [nums[1],nums[0]]];

  const permutations = [];
  const n = nums.length;

  for (let i = 0; i < n; i += 1) {

    // swap every item to position 0
    const temp = nums[i];
    nums[i] = nums[0];
    nums[0] = temp;

    let innerIterations = factorial(n - 1);

    for (let j = n - 1; innerIterations > 0; innerIterations -= 1, j -= 1) {

      permutations.push(new Array(...nums));

      if (j === 1) {
          // start over
          j = n - 1;
      }

      const temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;

    }

  }

  return permutations;

};

var largestTimeFromDigits = function(A) {

  const permutations = permute(A);

  let max = -1;
  let index = -1;

  for (let i = 0; i < permutations.length; ++i) {

      const number = permutations[i].join('');

      if (parseInt(number) <= 2359 && parseInt(number) > parseInt(max)) {

          const first = permutations[i].join('').slice(0, 2);
          const last = permutations[i].join('').slice(2, 4);

          if (parseInt(first) <= 23 && parseInt(last) <= 59) {
              max = number;
              index = i;
          }

      }

  }

  if (index === -1) return '';

  const first = permutations[index].join('').slice(0, 2);
  const last = permutations[index].join('').slice(2, 4);

  return first + ':' + last;

};