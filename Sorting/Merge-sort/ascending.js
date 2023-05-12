// Ascending order
let arr = [-6, 20, 8, -2, 4]

function ascending(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, mid)
    const rightArray = arr.slice(mid)
    return merge(ascending(leftArray), ascending(rightArray))
}

function merge(leftArray, rightArray) {
    const sortedArr = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArr.push(leftArray.shift())
        } else {
            sortedArr.push(rightArray.shift())
        }
    }
    return [...sortedArr, ...leftArray, ...rightArray]
}

console.log(ascending(arr))

// Time complexity = O(nlogn   )