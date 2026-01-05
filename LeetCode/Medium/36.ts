// 36. Valid Sudoko

function isValidSudoku(board: string[][]): boolean {
  const set = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const value = board[row][col];

      if (value === '.') continue;

      const rowValue = `r: ${row}, v: ${value}`;
      const colValue = `c: ${col}, v: ${value}`;

      const box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
      const boxValue = `b: ${box}, v: ${value}`;

      if (set.has(rowValue) || set.has(colValue) || set.has(boxValue))
        return false;

      set.add(rowValue).add(colValue).add(boxValue);
    }
  }

  return true;
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(isValidSudoku(board));
