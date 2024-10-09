// 1249. Minimum Remove to Make Valid Parentheses

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  let arr = Array.from(s);

  for (let i = 0; i < arr.length; i++) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1].val === "(" &&
      arr[i] === ")"
    ) {
      stack.pop();
    } else if (arr[i] === "(" || arr[i] === ")") {
      stack.push({ val: arr[i], index: i });
    }
  }

  for (let i = 0; i < stack.length; i++) {
    arr[stack[i].index] = "";
  }

  return arr.join("");
};
