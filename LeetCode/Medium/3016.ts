// 3016. Minimum Number of Pushes to Type Word II
/*
 * Hash Table
 * String
 * Greedy
 * Sorting
 * Counting
 */

function minimumPushes(word: string): number {
  const freq = new Array(26).fill(0);

  for (const char of word) {
    freq[char.charCodeAt(0) - 97]++;
  }

  freq.sort((a, b) => b - a);

  let res: number = 0;

  for (let i = 0; i < freq.length && freq[i] > 0; i++) {
    res += freq[i] * (Math.floor(i / 8) + 1);
  }

  return res;
}

minimumPushes('aabbccddeeffgghhiiiiii');
