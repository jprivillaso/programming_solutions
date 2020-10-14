/**
 * @param {int} array
 */

function quickSort(array) {

	if (array.length <= 1) { 
		return array;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = array.pop();
		var length = array.length;

		for (var i = 0; i < length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

const test = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = quickSort(test);
console.log(sortedArr);