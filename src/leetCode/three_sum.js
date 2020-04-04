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

// const test1 = [-1, 0, 1, 2, -1, -4]; // [[-1,-1,2],[-1,0,1]]
const test2 = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]; // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
// const test3 = [1, 2]; // []
// const test4 = []; // []
// const test5 = [-2, 0, 1, 1, 2]; // [[-2,0,2],[-2,1,1]]
// const test6 = [5, 5, 5, 5, 5, 0, -5]; // [[-5,0,5]]
const test6 = [-1, 0, 1, 2, -1, -4]; // [[-5,0,5]]

// console.log(threeSum(test1));
console.log(threeSum(test2));
// console.log(threeSum(test3));
// console.log(threeSum(test4));
// console.log(threeSum(test5));
// console.log(threeSum(test6));
