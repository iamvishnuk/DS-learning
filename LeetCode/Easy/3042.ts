// 3042. Count Prefix and Suffix Pairs I

const isPrefixAndSuffix = (str1: string, str2: string): boolean => {
  if (str1.length > str2.length) {
    return false;
  }
  const str1Length = str1.length;

  return (
    str1 === str2.slice(0, str1Length) &&
    str1 === str2.slice(str2.length - str1Length)
  );
};

export const countPrefixSuffixPairs = (words: string[]): number => {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }
  return count;
};
