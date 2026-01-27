// 6. Zigzag Conversion

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const result: string[][] = new Array(numRows).fill(0).map(() => []);

  let currentRow = 0;
  let direction = -1; // Direction Indicator: -1 for going up, 1 for going down

  for (const char of s) {
    result[currentRow].push(char);

    if (currentRow === numRows - 1 || currentRow === 0) {
      direction = -direction;
    }

    currentRow += direction;
  }

  return result.flat().join('');
}

console.log(convert('PAYPALISHIRING', 4));
