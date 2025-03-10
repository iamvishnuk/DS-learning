// 3074. Apple Redistribution into Boxes

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  const totalAppCount = apple.reduce((acc, curr) => acc + curr, 0);

  capacity.sort((a, b) => b - a);

  let temp = 0;
  for (let i = 0; i < capacity.length; i++) {
    temp = temp += capacity[i];
    if (temp >= totalAppCount) {
      return i + 1;
    }
  }

  return 0;
};

const apple1 = [1, 3, 2];
const capacity1 = [4, 3, 1, 5, 2];

const apple2 = [5, 5, 5];
const capacity2 = [2, 4, 2, 7];

console.log("output 1 --->", minimumBoxes(apple1, capacity1)); // output ---> 2
console.log("output 2 --->", minimumBoxes(apple2, capacity2)); // output ---> 4
