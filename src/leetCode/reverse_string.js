function reverse(arr, start, end) {

  for (let i = start, j = end; i <= j; ++i, --j) {

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

  }

}

var reverseStr = function(s, k) {

  const windowSize = 2 * k;
  const sLenght = s.length;
  const tokenized = s.split('');

  if (k >= sLenght) {
    reverse(tokenized, 0, sLenght - 1);
  } else {
    for (let i = 0; i <= sLenght; i += windowSize) {
      reverse(tokenized, i, Math.min(i + k - 1, sLenght - 1));
    }
  }

  return tokenized.join('');

};

console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('abcd', 2));
console.log(reverseStr('abcdef', 2));
console.log(reverseStr('abcdefghijklmnop', 3));
console.log(reverseStr('abcdefg', 8));
console.log(reverseStr('abcdefgh', 8));
console.log(reverseStr('hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl');
