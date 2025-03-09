// 3208. Alternative Groups II

/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  let n = colors.length;
  let count = 0;
  let left = 0;

  for (let right = 1; right < n + k - 1; right++) {
    if (colors[right % n] === colors[(right - 1) % n]) {
      left = right;
    }
    if (right - left + 1 >= k) {
      count++;
    }
  }

  return count;
};
