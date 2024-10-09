// 921. Minimum Add to Make Parentheses Valid

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let stack = [];
  let closeCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (stack.length > 0) {
      stack.pop();
    } else {
      closeCount++;
    }
  }

  return stack.length + closeCount;
};
