// let arr = [1, 2, 2, 5, 5]
// let target = 4

// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     let mid
//     while (left <= right) {
//         mid = Math.floor((left + right) / 2)
//         // console.log(mid)
//         if (arr[mid] === target) {
//             let temp = arr[mid]
//             while (arr[mid] === arr[temp]) {
//                 temp++
//             }
//             return temp
//         } else if (arr[mid] < target) {
//             left = mid + 1
//         } else {
//             right = right - 1
//         }
//     }
//     let count = 0
//     for (const element of arr) {
//         if (element <= target) {
//             count++
//         }
//     }
//     return count++
// }

// console.log(binarySearch(arr, 3))
let nums = [1, 1, 2, 2, 2, 3]
var frequencySort = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++
            }
        }
        if (!obj.hasOwnProperty(nums[i])) {
            obj[nums[i]] = count
        }

    }
    return obj
};

console.log(frequencySort(nums))