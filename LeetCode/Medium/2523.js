// 2523. Closest Prime Number in Range

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const primeNumbers = [];

  for (let i = left; i <= right; i++) {
    if (isPrime(i)) primeNumbers.push(i);
  }

  if (primeNumbers.length < 2) return [-1, -1];

  if (primeNumbers.length === 2) return primeNumbers;

  let minDiff = Infinity;

  let result = [];

  for (let i = 0; i < primeNumbers.length - 1; i++) {
    const diff = primeNumbers[i + 1] - primeNumbers[i];
    if (diff < minDiff) {
      minDiff = diff;
      result = [primeNumbers[i], primeNumbers[i + 1]];
    }
  }

  return result;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const left = 4;
const right = 6;

console.log(closestPrimes(left, right));
