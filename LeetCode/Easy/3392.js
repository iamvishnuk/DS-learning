// 3392. Count Subarrays of Length Three With a Condition

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  if (nums.length < 3) return 0;

  let count = 0;
  let start = 0;
  let end = 2;

  while (end < nums.length) {
    if (nums[start] + nums[end] === nums[start + 1] / 2) {
      count++;
    }
    start++;
    end++;
  }
  return count;
};

const nums = [1, 2, 1, 4, 1];

console.log(countSubarrays(nums));
