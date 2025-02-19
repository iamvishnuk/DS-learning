// 2698. Fin the punishment Number of Integer

/**
 * @param {number} n
 * @return {number}
 */
const punishmentNumber = function (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let number = i * i;
    if (canMake(number.toString(), i)) {
      result += number;
    }
  }
  return result;
};

const canMake = (numStr, target, index = 0) => {
  // Base cases
  if (target < 0) return false;
  if (index === numStr.length) return target === 0;
  // Try different partitions of the remaining string
  let currentSum = 0;
  for (let i = index; i < numStr.length; i++) {
    currentSum = currentSum * 10 + parseInt(numStr[i]);
    if (currentSum > target) break;
    if (canMake(numStr, target - currentSum, i + 1)) {
      return true;
    }
  }
  return false;
};

console.log("Output >", punishmentNumber(36));
