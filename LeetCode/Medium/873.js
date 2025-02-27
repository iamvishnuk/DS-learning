// 873. Length of Longest Fibonacci Subsequence

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = (arr) => {
  if (arr.length < 4) return 0;

  let maxLength = 0;
  const set = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i];
      let b = arr[j];
      let count = 2;
      while (set.has(a + b)) {
        let temp = a;
        a = b;
        b = temp + b;
        count++;
      }
      if (count > 2) {
        maxLength = Math.max(maxLength, count);
      }
    }
  }
  return maxLength;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(lenLongestFibSubseq(arr)); // 5
