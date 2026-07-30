// 3014. Minimum Number of Pushes to Type Word I
/*
 * Math
 * String
 * Greedy
 */

function minimumPushes(word: string): number {
  const n: number = word.length;
  let ans: number = 0;

  for (let i = 0; i < n; i++) {
    ans += Math.floor(i / 8) + 1;
  }

  return ans;
}
