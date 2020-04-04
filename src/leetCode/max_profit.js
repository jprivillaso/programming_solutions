var findMin = function(prices, start, end) {

  let min = Number.MAX_SAFE_INTEGER;
  let minIndex = null;

  for (let i = start; i < end; ++i) {
    if (prices[i] < min) {
      min = prices[i];
      minIndex = i;
    }
  }

  return [min, minIndex];

};

var maxProfit = function(prices) {

  let indexMap = {};
  prices.forEach((el, i) => {
    if (indexMap[el]) {
      indexMap[el].push(i);
    } else {
      indexMap[el] = [i];
    }
  });

  let orderedPrices = new Set();
  prices.forEach(el => orderedPrices.add(el));
  orderedPrices = Array.from(orderedPrices);
  orderedPrices.sort((a, b) => b - a);

  let start = 0;
  let end = prices.length;
  let maxProfitVal = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < orderedPrices.length; ++i) {

    let max = orderedPrices[i];
    let maxIndex = indexMap[max].pop();
    end = maxIndex;

    let [min, minIndex] = findMin(prices, start, end);

    if (minIndex !== null) {
      start = minIndex;
      maxProfitVal = Math.max(maxProfitVal, prices[end] - prices[start]);
    }

  }

  return Math.max(maxProfitVal, 0);

};

console.log(maxProfit([7,1,5,2,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([3,2,6,5,0,3])); // 4
console.log(maxProfit([2,4,1])); // 2
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0])); // 8
console.log(maxProfit([4,7,2,1])); // 3
console.log(maxProfit([2,11,1,4,7])); // 9
console.log(maxProfit([2,1,2,1,0,1,2])); // 2
console.log(maxProfit([3,3,5,0,0,3,1,4])); // 4