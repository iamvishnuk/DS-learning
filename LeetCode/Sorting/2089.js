// 2089. Find Target Indices After Sorting Array

var targetIndices = function (nums, target) {
    let output = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) output.push(i);
    }
    return output;
};

const nums = [
    48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62,
    77, 15, 38,
];
const target = 6;

console.log(targetIndices(nums, target));
