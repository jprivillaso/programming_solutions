/**
 * This sort method is called the two finger sorting algorithm.
 * It is applied in every step of the merge sort in which you have
 * to join the two ordered arrays.
 * It takes O(n) to order it and it's pretty straightforward:
 * - Compares if the first position of the first array is lower
 * than the other array. Depending on the result, it pushes the
 * lower value and increase the pointer on that array.
 * It repeats this process until you reach the end of one of the
 * arrays or when you compared all the values.
 *
 * @param {int} first
 * @param {int} last
 */
function sort(first, last) {

  const length = first.length + last.length;
  let j = 0;
  let k = 0;

  const array = new Array();
  while(array.length < length) {

    if (first[j] && last[k]) {

      if (first[j] < last[k]) {
        array.push(first[j]);
        j++;
      } else {
        array.push(last[k]);
        k++;
      }

    } else if (!first[j]) {
      array.push(last[k]);
      k++;
    } else if (!last[k]) {
      array.push(first[j]);
      j++;
    }

  }

  return array;

}

function mergeSort(array) {

  let length = array.length;

  if (length === 1) {
    return [array[0]];
  } else if (length === 2){
    return [Math.min(array[0], array[1]), Math.max(array[0], array[1])]

  } else {

    const first = mergeSort(array.slice(0, parseInt(length / 2)));
    const last = mergeSort(array.slice(parseInt(length / 2), length));
    return sort(first, last);

  }

}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10, 1, 2, 3]));
console.log(mergeSort([1, 2, 3, 4, 5, 6]));
console.log(mergeSort([6, 5, 4, 3, 2, 1]));