// 1619. Mean of Array After Removing Some Elements

var trimMean = function (arr) {
    arr.sort((a, b) => a - b);
    let find_5_percentage = (arr.length * 5) / 100;
    let sum = 0;
    for (let i = find_5_percentage; i < arr.length - find_5_percentage; i++) {
        sum += arr[i];
    }
    return sum / (arr.length - find_5_percentage * 2);
};

const arr = [
    6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4,
    3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
];

console.log(trimMean(arr));

