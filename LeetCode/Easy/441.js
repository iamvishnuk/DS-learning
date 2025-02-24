// 441. Arranging Coins

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = Math.floor((mid * (mid + 1)) / 2);

    if (sum === n) {
      return mid;
    } else if (sum > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

let n = 5;

console.log(arrangeCoins(n));
