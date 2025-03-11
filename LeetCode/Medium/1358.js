// 1358. Number of Substring Containing All Three Characters

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let left = 0;
  let count = 0;
  const freq = { a: 0, b: 0, c: 0 };

  for (let right = 0; right < s.length; right++) {
    freq[s[right]]++;

    while (freq["a"] > 0 && freq["b"] > 0 && freq["c"] > 0) {
      count += s.length - right;
      freq[s[left]]--;
      left++;
    }
  }

  return count;
};

const s = "abcabc";

console.log("output --->", numberOfSubstrings(s)); // output ---> 10
