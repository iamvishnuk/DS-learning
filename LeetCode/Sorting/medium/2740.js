// 2740. Find the Value of the Partition

var findValueOfPartition = function (nums) {
    nums.sort((a, b) => a - b);
    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length - 1; i++) {
        let diff = Math.abs(nums[i] - nums[i + 1]);
        if (diff < result) result = diff;
    }
    return result;
};

const nums = [100, 1, 10];

console.log(findValueOfPartition(nums));
