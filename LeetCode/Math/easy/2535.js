// 2535. Difference Between Element Sum and Digit Sum of an Array

var differenceOfSum = function (nums) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        let number = String(nums[i]);
        for (let j = 0; j < number.length; j++) {
            sum2 += Number(number[j]);
        }
    }
    return sum - sum2;
};

const nums = [1, 15, 6, 3];

console.log(differenceOfSum(nums));
