// 1422. Maximum Score After Splitting a String

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let totalOnes = 0;
  let onesCount = 0;
  let zerosCount = 0;
  let maxScore = -Infinity;

  for (let char of s) {
    if (char === "1") totalOnes++;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zerosCount++;
    } else {
      onesCount++;
    }

    let score = zerosCount + (totalOnes - onesCount);
    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};

let s = "011101";

console.log(maxScore(s));
