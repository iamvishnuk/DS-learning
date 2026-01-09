// 73. Set Matrix Zeroes

function setZeroes(matrix: number[][]): void {
  const rowSet = new Set<number>();
  const columnSet = new Set<number>();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rowSet.add(row);
        columnSet.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (rowSet.has(row) || columnSet.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
}
