// 38. Count and say

const frequencyPair = (str: string): [number, number][] => {
  if (str.length === 0) return [];

  const result: [number, number][] = [];

  let prev = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === prev) {
      count++;
    } else {
      result.push([Number(prev), count]);
      prev = str[i];
      count = 1;
    }
  }

  result.push([Number(prev), count]);

  return result;
};

const flattenArray = (arr: [number, number][]): string => {
  let str = '';

  for (const [a, b] of arr) {
    str = str + b + a;
  }

  return str;
};

function countAndSay(n: number): string {
  if (n === 1) return '1';

  let input = '1';

  for (let i = 1; i <= n - 1; i++) {
    let pair = frequencyPair(input);
    let str = flattenArray(pair);
    input = str;
  }

  return input;
}

console.log('1 =', countAndSay(1));
console.log('11 =', countAndSay(2));
console.log('21 =', countAndSay(3));
console.log('1211 =', countAndSay(4));
