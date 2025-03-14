// 2226. Maximum Candies Allocated to K Children

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let left = 1,
    right = Math.max(...candies);
  let total = candies.reduce((sum, c) => sum + c, 0);
  if (total < k) return 0;

  let result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canDistribute(candies, k, mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

function canDistribute(candies, k, val) {
  let count = 0;
  for (let c of candies) count += Math.floor(c / val);
  return count >= k;
}

const candies = [5, 8, 6];
const k = 3;

console.log("output ---> 5", maximumCandies(candies, k));
