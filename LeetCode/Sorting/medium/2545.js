// 2545. Sort the Students by Their Kth Score
// Topice -> Array, Sorting, Matrix

var sortTheStudents = function (score, k) {
    for (let i = 0; i < score.length; i++) {
        let swapped = false;
        for (let j = 1; j < score.length - i; j++) {
            if (score[j][k] > score[j - 1][k]) {
                let temp = score[j];
                score[j] = score[j - 1];
                score[j - 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return score;
};

const score = [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
];
const k = 2;

console.log(sortTheStudents(score, k));
