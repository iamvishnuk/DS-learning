var countNegatives = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = grid[0].length - 1; j >= 0; j--) {
            if (grid[i][j] < 0) {
                count++
            } else {
                break
            }
        }
    }
    return count
};

const grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]

console.log(countNegatives(grid))