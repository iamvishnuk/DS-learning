// 2562.Find the Array Concatenation Value

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = 0;
    while (left <= right) {
        if (left !== right) {
            let temp = "" + nums[left] + nums[right];
            result += Number(temp);
        } else {
            result += nums[left];
        }
        left++;
        right--;
    }
    return result;
};

const nums = [7, 52, 2, 4];

console.log(findTheArrayConcVal(nums));
