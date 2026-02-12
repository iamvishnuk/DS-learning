// 3713. Longest Balanced Substring I

function longestBalancedS(s: string): number {
  let len: number = 0;

  for (let i = 0; i < s.length; i++) {
    const freq: number[] = new Array(26).fill(0)
    for (let j = i; j < s.length; j++) {
      let flag = true;
      let c = s.charCodeAt(j) - 97
      freq[c]++

      for (const f of freq) {
        if (f > 0 && f !== freq[c]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        len = Math.max(len, j - i + 1)
      }
    }

  }

  return len
};
