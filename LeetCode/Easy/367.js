// 367. Valid Perfect Square

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let start = 0;
  let end = num;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

let num = 14;

console.log(isPerfectSquare(num));
