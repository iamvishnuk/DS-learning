// 3151. Special Array 1

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  // if the array has only one element, return true
  if (nums.length === 1) return true;

  let pointerOne = 0;
  let pointerTwo = 0;

  for (let i = 0; i < nums.length; i++) {
    pointerOne = i;
    pointerTwo = i + 1;

    if (nums[pointerOne] % 2 === nums[pointerTwo] % 2) return false;
  }
  return true;
};

var nums = [1];
console.log(isArraySpecial(nums));
