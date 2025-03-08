// 1456. Maximum Number of Vowels in a Substring of Given Length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  if (s.length < k) return 0;

  let start = 0;
  let end = k - 1;
  let maxVowels = 0;
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);

  // count vowels in the first window
  let vowelsCount = 0;
  for (let i = start; i <= end; i++) {
    if (VOWELS.has(s[i])) vowelsCount++;
  }
  // update maxVowels
  if (vowelsCount > maxVowels) maxVowels = vowelsCount;
  start++;
  end++;

  while (end < s.length) {
    if (VOWELS.has(s[start - 1])) vowelsCount--;
    if (VOWELS.has(s[end])) vowelsCount++;
    if (vowelsCount > maxVowels) maxVowels = vowelsCount;
    start++;
    end++;
  }
  return maxVowels;
};

const s1 = "abciiidef";
const k1 = 3;

const s2 = "aeiou";
const k2 = 2;

const s3 = "leetcode";
const k3 = 3;

console.log(maxVowels(s1, k1)); // output ---> 3
console.log(maxVowels(s2, k2)); // output ---> 2
console.log(maxVowels(s3, k3)); // output ---> 2
