// 1394. Find Lucky Integer in An Array

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > max && arr[i] === count) {
      max = count;
    }
  }
  return max !== 0 ? max : -1;
};

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
