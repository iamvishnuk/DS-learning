// 238. Product of Array Except Self

var productExceptSelf = function (nums) {
    const prefixSum = [];
    const suffixSum = [];
    const result = [];

    prefixSum.push(1);
    suffixSum[nums.length - 1] = 1;

    //prefixsum
    for (let i = 0; i < nums.length - 1; i++) {
        prefixSum.push(nums[i] * prefixSum[i]);
    }
    //suffixsum
    for (let i = nums.length - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < suffixSum.length; i++) {
        result.push(suffixSum[i] * prefixSum[i]);
    }

    return result;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));