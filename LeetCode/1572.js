const mat = [[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]

var diagonalSum = function (mat) {
    let sum = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if(i === j || (j + i) == mat.length - 1) {
                sum += mat[i][j]
            }
        }
    }
    return sum
};

console.log(diagonalSum(mat))