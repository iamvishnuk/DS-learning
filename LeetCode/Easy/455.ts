// 455. Assign Cookies

export const findContentChildren = (g: number[], s: number[]): number => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let gPointer = 0;
  let sPointer = 0;
  while (gPointer < g.length && sPointer < s.length) {
    if (g[gPointer] <= s[sPointer]) {
      gPointer++;
      sPointer++;
    } else {
      sPointer++;
    }
  }
  return gPointer;
};
