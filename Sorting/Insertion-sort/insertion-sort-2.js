// Descending Order

let arr = [3, -47, 77, 9, 92, 1, 4, 20]

function descending(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] < numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
}

descending(arr)
console.log(arr)