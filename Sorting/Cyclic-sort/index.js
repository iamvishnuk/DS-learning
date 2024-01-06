// Cyclic Sort
/*
 => When given a number range from 1 to n / 0 to n 
 => Leetcode => 268, 448, 287, 442, 41
 => Time complexcity O(n)
 */

const cyclicSort = (arr) => {
    let i = 0;
    while (i < arr.length) {
        let correctIndex = arr[i] - 1;
        if (arr[i] !== arr[correctIndex]) {
            let temp = arr[i];
            arr[i] = arr[correctIndex];
            arr[correctIndex] = temp;
        } else {
            i++;
        }
    }
};
const arr = [5, 3, 1, 4, 2];
cyclicSort(arr);
console.log("Output =>", arr);
