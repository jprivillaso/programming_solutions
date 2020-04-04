/**
 * https://leetcode.com/problems/3sum/
 *
 * @param {*} arr
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
  if (arr.length < 3) return [];

  arr.sort((a, b) => a - b);

  let n = arr.length;
  const triplets = new Set();

  for (let i = 0; i < n; ++i) {
    let l = i + 1;
    let r = n - 1;
    let x = arr[i];

    while (l < r) {
      const sum = x + arr[l] + arr[r];

      if (sum === 0) {
        triplets.add([x, arr[l], arr[r]].join("::"));
        l += 1;
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  }

  return Array.from(triplets).map(a => a.split("::").map(b => parseInt(b)));
};