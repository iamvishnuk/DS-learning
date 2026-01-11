// 171. Excel Sheel Column Number

function titleToNumber(columnTitle: string): number {
  const len = columnTitle.length;
  let result = 0;

  for (let i = 0; i < len; i++) {
    let temp = len - i - 1;
    let charValue = columnTitle.charCodeAt(i) - 64;
    result += charValue * Math.pow(26, temp);
  }
  return result;
}
