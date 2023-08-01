// Maximun Average Subarray I

var findMaxAverage = function (nums, k) {
    if (nums.length == 1 && k == 1) return nums[0]
    let avg = Number.MIN_SAFE_INTEGER
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    if ((sum / k) > avg) avg = sum / k
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i]
        if ((sum / k) > avg) avg = sum / k
    }
    return avg

};

const nums = [1, 12, -5, -6, 50, 3]
let k = 4

console.log(findMaxAverage(nums, k))