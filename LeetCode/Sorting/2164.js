// 2164. Sort Even and Odd Indices Independently

var sortEvenOdd = function (nums) {
    const evenArray = [];
    const oddArray = [];
    const finalArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) evenArray.push(nums[i]);
        else oddArray.push(nums[i]);
    }
    oddArray.sort((a, b) => b - a);
    evenArray.sort((a, b) => a - b);
    for (let i = 0; i < nums.length / 2; i++) {
        if (evenArray[i]) finalArray.push(evenArray[i]);
        if (oddArray[i]) finalArray.push(oddArray[i]);
    }
    return finalArray;
};

const nums = [4, 1, 2, 3];

console.log(sortEvenOdd(nums));
