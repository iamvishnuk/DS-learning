// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let start = 1;
  let end = x;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    }
    if (square < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return Math.floor(end);
};

let x = 8;

console.log(mySqrt(x));
