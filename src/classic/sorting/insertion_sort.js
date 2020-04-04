/**
 * Complexity of the algorithm is n^2 because
 * in the worst case the array will be reverse
 * ordered and it will take n swaps over the n
 * elements.
 *
 * @param {int} array
 */

function insertionSort(array) {

  let length = array.length;
  let pointer = 1;

  for (let i = 1; i < length; i++) {

    for (let j = pointer; j > 0; j--) {

      // swap items if previous item is lower
      if (array[j] < array[j - 1]) {

        const temp = array[j - 1];
        array[j-1] = array[j];
        array[j] = temp;

      } else {
        /**
         * Whenever it reaches a position in which the previous item
         * is no longer greater or it reaches the first position, it
         * should stop.
         */
        break;
      }

    }

    pointer++;

  }

  return array;

}

console.log(insertionSort([38, 27, 43, 3, 9, 82, 10]));
console.log(insertionSort([38, 27, 43, 3, 9, 82, 10, 1, 2, 3]));
console.log(insertionSort([1, 2, 3, 4, 5, 6]));
console.log(insertionSort([6, 5, 4, 3, 2, 1]));