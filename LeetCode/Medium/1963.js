// 1963. Minimum Number of Swaps to Make the String Balanced

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return Math.ceil(stack.length / 2);
};
