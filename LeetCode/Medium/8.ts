export const myAtoi = (s: string): number => {
  let trimmedWord = s.trim();

  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);

  let i = 0;
  let result = 0;

  if (trimmedWord.length === 0) return 0;

  let isNegative = 1;

  if (trimmedWord[i] === '+' || trimmedWord[i] === '-') {
    if (trimmedWord[i] === '-') isNegative = -1;
    i++;
  }

  while (i < trimmedWord.length && /^[0-9]$/.test(trimmedWord[i])) {
    result = result * 10 + Number(trimmedWord[i]);
    i++;
  }

  return isNegative > 0
    ? Math.min(MAX, result * isNegative)
    : Math.max(MIN, result * isNegative);
};
