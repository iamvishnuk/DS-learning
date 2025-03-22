// 1283. Find the smallest Divisor Given a Threshold

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let start = 1;
  let end = Math.max(...nums);

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    let sum = arraySum(nums, mid);

    if (sum > threshold) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

var arraySum = function (nums, divisor) {
  let sum = 0;
  for (let num of nums) {
    sum += Math.ceil(num / divisor);
  }
  return sum;
};

const nums = [1, 2, 5, 9];
const threshold = 6;

console.log("Output ===> 5", smallestDivisor(nums, threshold));
