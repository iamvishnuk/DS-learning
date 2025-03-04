// 1780. Check if Number is a Sum of Powers of Three

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  while (n > 0) {
    if (n % 3 === 2) return false; // If a digit is 2 in base 3, return false
    n = Math.floor(n / 3); // Reduce n by dividing it by 3
  }
  return true;
};

const n = 12;

console.log(checkPowersOfThree(n)); // true
