function heapify(array, n, i) {

  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {

    const temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    heapify(array, n, largest);

  }

}

function heapSort(array, ascendingOrder) {

  // create max heap
  for (let i = parseInt(array.length / 2); i >= 0; i--) {
    heapify(array, array.length, i);
  }

  for (let i = array.length - 1; i > 0; i--) {

    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    heapify(array, i, 0);

  }

  return array;

}

console.log(heapSort([4, 1, 3, 10, 5]));
