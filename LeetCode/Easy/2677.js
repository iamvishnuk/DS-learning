// 2677. chunk Array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const result = [];
    for(let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result
};

const arr = [1, 2, 3, 4, 5];
const size = 2;

console.log(chunk(arr, size));
