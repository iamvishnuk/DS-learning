// Given an integer array , find a subarray that has largest product, and return the product

var maxProduct = function (nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);
        prevMax = curMax
        prevMin = curMin
        result = Math.max(curMax, result);
    }
    return result;
}

// let nums = [-3, -1, -1]
// let nums = [-2, 0, -1]
let nums = [2, 3, -2, 4]
// let nums = [0, 2]
// let nums = [-2, 3, -4]
console.log(maxProduct(nums))