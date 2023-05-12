// Ascending Order
let arr = [-6, 20, 8, -2, 4]

function ascending(arr) {
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...ascending(left), pivot, ...ascending(right)]
}

console.log(ascending(arr))

// Worst case - O(n^2)
// Average case complexity = O(nlogn)