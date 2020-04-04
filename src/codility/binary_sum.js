function sumBinary(a, b) {

  let aBinary = (a >>> 0).toString(2);
  let bBinary = (b >>> 0).toString(2);

  let aLength = aBinary.length;
  let bLength = bBinary.length;
  const max = Math.max(aLength, bLength);

  for (let i = max; i > aLength; --i ) {
    aBinary = `0${aBinary}`;
  }

  for (let i = max; i > bLength; --i ) {
    bBinary = `0${bBinary}`;
  }

  aBinary = aBinary.split('').map(a => parseInt(a));
  bBinary = bBinary.split('').map(a => parseInt(a));

  let carry = 0;
  let result = [];

  for (let i = max - 1; i >= 0; --i) {

    const first = aBinary[i];
    const last = bBinary[i];

    result.unshift(first ^ last ^ carry);

    if (first === 1 && last === 1) {
      carry = 1;
    } else if (first + carry + last === 2) {
      carry = 1;
    } else {
      carry = 0;
    }

  }

  if (carry === 1) result.unshift(1);
  return result.join('');

}

expected = (8 >>> 0).toString(2);
test = sumBinary(5, 3);
console.log(expected, test);

expected = (30 >>> 0).toString(2);
test = sumBinary(20, 10);
console.log(expected, test);

expected = (7 >>> 0).toString(2);
test = sumBinary(5, 2);
console.log(expected, test);

expected = (2000 >>> 0).toString(2);
test = sumBinary(500, 1500);
console.log(expected, test);

expected = (433 >>> 0).toString(2);
test = sumBinary(328, 105);
console.log(expected, test);

expected = (177 >>> 0).toString(2);
test = sumBinary(128, 49);
console.log(expected, test);