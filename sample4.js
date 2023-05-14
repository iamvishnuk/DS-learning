let nums = [3, 4, 5, 1, 2]
let clonedArray = [...nums]
let n = nums.length
clonedArray.sort((a, b) => a - b)

function sample(num, sortedArray) {
    console.log(sortedArray)
    for (let i = 0; i < sortedArray.length; i++) {
        let shiftedElement = nums.shift()
        nums.push(shiftedElement)
        console.log(num)
        if (JSON.stringify(num) === JSON.stringify(sortedArray)) {
            return true
        }

    }
    return false
}

console.log(sample(nums, clonedArray))