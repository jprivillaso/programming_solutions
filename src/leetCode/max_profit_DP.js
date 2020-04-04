var maxProfit3 = function(prices) {

  let minPrices = [];
  for (let i = 0; i < prices.length; ++i) {
    if (i - 1 < 0) {
      minPrices.push(prices[i]);
    } else {
      minPrices.push(Math.min(prices[i], minPrices[i - 1]));
    }
  }

  let maxProfitVal = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < prices.length; ++i) {

    let max = prices[i];
    let min = minPrices[i];
    maxProfitVal = Math.max(maxProfitVal, max - min);

  }

  return maxProfitVal;

};

var maxProfit = function(prices) {

  if (prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfitVal = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < prices.length; ++i) {
      if (prices[i] - minPrice > maxProfitVal) maxProfitVal = prices[i] - minPrice;
      if (prices[i] < minPrice) minPrice = prices[i];
  }
  return maxProfitVal;
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