// Largest Number After Digit Swaps by Parity

var largestInteger = function (num) {
    let x = "" + num
    let arr = Array.from(x)
    let odd = []
    let even = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) even.push(parseInt(arr[i]))
        else odd.push(parseInt(arr[i]))
    }
    odd.sort((a, b) => a - b)
    even.sort((a, b) => a - b)

    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) result.push(parseInt(even.pop()))
        else result.push(parseInt(odd.pop()))
    }

    return result.join('')

};

let num = 1234
console.log(largestInteger(num))