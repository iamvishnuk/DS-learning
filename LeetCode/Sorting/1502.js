// 1502. Can Make Arithmetic Progression From Seguence

var canMakeArithmeticProgression = function (arr) {
    if (arr.length < 3) return true;
    arr.sort((a, b) => a - b);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== arr[i - 1] - arr[i - 2]) return false;
    }
    return true;
};

const arr = [1, 2, 4];

console.log(canMakeArithmeticProgression(arr));
