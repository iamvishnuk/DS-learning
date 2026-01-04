// 1390. Four Divisors

const findDivisors = (num: number): number[] => {
  const divisor: number[] = [];
  let i = 1;

  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      const pair = num / i;

      if (i === pair) {
        divisor.push(i);
      } else {
        divisor.push(i);
        divisor.push(pair);
      }
    }

    if (divisor.length > 4) {
      return divisor;
    }

    i++;
  }

  return divisor;
};

function sumFourDivisors(nums: number[]): number {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let divisors = findDivisors(nums[i]);
    if (divisors.length === 4) {
      sum += divisors.reduce((acc, curr) => curr + acc, 0);
    }
  }

  return sum;
}

console.log(sumFourDivisors([21, 4, 7]));
console.log(sumFourDivisors([21, 21]));
console.log(sumFourDivisors([1, 2, 3, 4, 5]));
