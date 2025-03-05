// 2579. Count Total Number of colored cells

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  return n * n + (n - 1) * (n - 1);
};

console.log(coloredCells(1)); // 1
console.log(coloredCells(2)); // 5
console.log(coloredCells(3)); // 13
