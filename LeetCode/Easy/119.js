// 119. Pascal's Triangle II

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const res = [1];
  let prev = 1;
  for (let i = 1; i <= rowIndex; i++) {
    const temp = (prev * (rowIndex - i + 1)) / i;
    res.push(temp);
    prev = temp;
  }
  return res;
};
