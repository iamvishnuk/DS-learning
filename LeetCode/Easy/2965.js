// 2965. Find the Missing and Repeated Values

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const row = grid.length;
  const col = grid[0].length;

  const arr = new Array(row * col).fill(0);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr[grid[i][j] - 1]++;
    }
  }

  let missing;
  let repeated;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      missing = i + 1;
    }
    if (arr[i] === 2) {
      repeated = i + 1;
    }
  }

  return [repeated, missing];
};

const grid1 = [
  [1, 3],
  [2, 2],
];

const grid2 = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];

console.log(findMissingAndRepeatedValues(grid1)); // [2, 4]
console.log(findMissingAndRepeatedValues(grid2)); // [9, 5]
