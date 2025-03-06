// 633. Sum of Square Numbers

/**
 * @param {number} c
 * @return {boolean}
 */
// solution 1 (two pointer)(best)
var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    let sum = left * left + right * right;
    if (sum === c) return true;
    if (sum < c) left++; // Increase the smaller value
    else right--; // Decrease the larger value
  }

  return false;
};
// solution 2 (binary search)
var judgeSquareSum = function (c) {
  if (c <= 1) return true;
  const end = Math.floor(Math.sqrt(c));
  for (let i = 0; i <= end; i++) {
    let temp = i * i;
    let target = c - temp;
    if (binarySearch(1, end, target)) return true;
  }
  return false;
};

const binarySearch = (start, end, target) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mid * mid === target) return true;
    if (mid * mid < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};
