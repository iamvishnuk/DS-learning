// Rotate Array 

// Method - 1
var rotate = function (nums, k) {
    const length = nums.length
    const result = []
    if (k > length) {
        k = k % length
    }
    const value = nums.slice(length - k)
    for (let i = 0; i < value.length; i++) {
        result.push(value[i])
    }
    for (let i = 0; i < nums.length - k; i++) {
        result.push(nums[i])
    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i]
    }

};


// Method - 2
var rotate1 = function (nums, k) {
    let timesOfRotation = k % nums.length;
    nums.unshift(...nums.splice(-timesOfRotation));
    return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3

rotate1(nums, k)
console.log(nums)