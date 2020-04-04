function countingSort(arr, n, exp) {

  const output = new Array(n);
  const count = new Array(10);
  count.fill(0);
  output.fill(0);

  /**
   * The following expression gets the less significat digit at every step.
   * parseInt((arr[i]/exp)%10)
   * For example:
   * (7/1)%10 = 7
   * (7/10)%10 = 0
   * (7/100)%100 = 0
   * (802/1)%10 = 2
   * (802/10)%10 = 0
   * (802/100)%100 = 8
   */
  for (let i = 0; i < n; ++i) {
    const pos = parseInt((arr[i]/exp)%10);
    count[pos] += 1;
  }

  for (let i = 1; i < 10; ++i) {
    count[i] = count[i] + count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--)  {
    const pos = parseInt((arr[i]/exp)%10);
    output[count[ pos ] - 1] = arr[i];
    count[ pos ]--;
  }

  for (i = 0; i < n; i++) {
    arr[i] = output[i];
  }

}

function radixSort(arr) {

  const maxNumber = Math.max(...arr);
  const n = arr.length;

  for (let exp = 1; parseInt(maxNumber/exp) > 0; exp *= 10) {
    countingSort(arr, n, exp);
  }

  return arr;

}

const test = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(test);
console.log(sortedArr);