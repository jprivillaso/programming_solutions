function heapify(array, i) {

  const node = array[i - 1];
  const nodePosition = i - 1;
  const leftChild = 2 * i;
  const rightChild = 2 * i + 1;

  if (array[leftChild - 1] && node < array[leftChild - 1]) {
    //swap
    const temp = array[nodePosition];
    array[nodePosition] = array[leftChild - 1];
    array[leftChild - 1] = temp;
    heapify(array, leftChild);

  } else if (array[rightChild - 1] && node < array[rightChild - 1]) {
    //swap
    const temp = array[nodePosition];
    array[nodePosition] = array[rightChild - 1];
    array[rightChild - 1] = temp;
    heapify(array, rightChild);

  }

}

function buildMaxHeap(array) {

  const length = array.length;

  // create max heap
  for (let i = parseInt(length / 2); i > 0; i--) {
    heapify(array, i);
  }

  return array;

}

function heapSort(array, ascendingOrder) {

  const orderedArray = [];

  let maxHeapArray = buildMaxHeap(array);
  console.log(maxHeapArray);

  const arrayLength = maxHeapArray.length;

  while (orderedArray.length < arrayLength) {

    orderedArray.push(maxHeapArray[0]);

    // swap first and last element
    maxHeapArray[0] = maxHeapArray[maxHeapArray.length - 1];

    // discard last element
    maxHeapArray = maxHeapArray.slice(0, maxHeapArray.length - 1);

    // console.log(maxHeapArray);
    heapify(maxHeapArray, maxHeapArray[0], 1);

  }

  return maxHeapArray;
  // return ascendingOrder ? orderedArray.reverse() : orderedArray;

}

// This heap sort algorithm will sort in descending order
console.log(heapSort([4, 1, 3, 10, 5], true));
