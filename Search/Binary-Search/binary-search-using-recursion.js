let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let binarySearchUsingRecursion = (arr, left, right, target) => {
    if (left > right) {
        return -1
    }
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] < target) {
        return binarySearchUsingRecursion(arr, mid + 1, right, target)
    } else {
        return binarySearchUsingRecursion(arr, left, mid - 1, target)
    }


}

let left = 0
let right = arr.length - 1
let target = 10
console.log(binarySearchUsingRecursion(arr, left, right, target))