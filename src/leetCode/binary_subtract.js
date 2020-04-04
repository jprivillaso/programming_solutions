function equalLength(x, y) {

  const xLength = x.length;
  const yLength = y.length;
  const maxLength = Math.max(xLength, yLength);

  for (let i = maxLength; i > xLength; --i) {
    x = `0${x}`;
  }

  for (let i = maxLength; i > yLength; --i) {
    y = `0${y}`;
  }

  return [x, y];

}

function sumBinary(x, y) {

  x = (x >>> 0).toString(2);
  y = (y >>> 0).toString(2);

  // Make the binaries of equal length
  [x, y] = equalLength(x, y);

  x = x.split('').map(a => parseInt(a));
  y = y.split('').map(a => parseInt(a));

  let carry = 0;
  let result = [];

  for (let i = x.length - 1; i >= 0; --i) {

    const xValue = x[i];
    const yValue = y[i];

    result.unshift(xValue ^ yValue ^ carry);

    if (xValue === 1 && yValue === 1 || xValue + carry + yValue === 2) {
      carry = 1;
    } else {
      carry = 0;
    }

  }

  if (carry === 1) result.unshift(1);
  return parseInt(result.join(''), 2);

}

function substractBinary(a, b) {

  /**
   * Using technique of 2s Complement to subtract b from a
   * a - b is the same as a + (-b)
   * So we calculate -b and apply the normal sum
   */
  // Convert b into -b
  b = sumBinary(~b, 1);
  const result = sumBinary(a, b);
  return (result >>> 0).toString(2);

}

expected = (8 >>> 0).toString(2);
test = substractBinary(10, 2);
console.log(expected, test);

expected = (2 >>> 0).toString(2);
test = substractBinary(5, 3);
console.log(expected, test);

expected = (3 >>> 0).toString(2);
test = substractBinary(5, 2);
console.log(expected, test);

expected = (45 >>> 0).toString(2);
test = substractBinary(50, 5);
console.log(expected, test);

expected = (223 >>> 0).toString(2);
test = substractBinary(328, 105);
console.log(expected, test);

expected = (24 >>> 0).toString(2);
test = substractBinary(25, 1);
console.log(expected, test);