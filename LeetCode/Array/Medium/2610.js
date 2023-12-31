// 2610. Convert an Array Into a 2D Array With Conditions

var findMatrix = function (nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : (map[nums[i]] = 1);
    }

    const numberOfArray = Math.max(...Object.values(map));
    const output = [];

    for (let i = 0; i < numberOfArray; i++) {
        output[i] = [];
    }

    for (let key of Object.keys(map)) {
        let temp = 0;
        while (map[key] > 0) {
            output[temp].push(key);
            temp++;
            map[key]--;
        }
    }

    return output;
};

const nums = [1, 3, 4, 1, 2, 3, 1];

console.log(findMatrix(nums));