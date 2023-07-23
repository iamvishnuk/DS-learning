const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

var transpose = function (matrix) {
    let output = []
    for (let i = 0; i < matrix[0].length; i++) {
        output[i] = new Array(matrix.length).fill(0)        
    }
    
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            output[i][j] = matrix[j][i]
        }        
    }
    return output
};

console.log(transpose(matrix))