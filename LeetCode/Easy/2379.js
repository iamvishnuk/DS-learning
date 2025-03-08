// 2379. Minimum Number to Get K Consecutive Black blocks

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  if (blocks.length < k) return 0;

  let start = 0;
  let end = k - 1;
  let minimumRecolors = Infinity;

  while (end < blocks.length) {
    let whiteCount = countWhite(blocks, start, end);
    if (whiteCount < minimumRecolors) minimumRecolors = whiteCount;
    start++;
    end++;
  }

  return minimumRecolors;
};

const countWhite = (blocks, start, end) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (blocks[i] === "W") count++;
  }
  return count;
};

const blocks1 = "WBBWWBBWBW";
const k1 = 7;

const blocks2 = "WBWBBBW";
const k2 = 2;

console.log(minimumRecolors(blocks1, k1)); // output ---> 3
console.log(minimumRecolors(blocks2, k2)); // output ---> 0
