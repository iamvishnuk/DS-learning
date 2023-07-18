var wordPattern = function (pattern, s) {
    let obj = {}
    let obj2 = {}
    const arr = s.split(" ")

    if (arr.length != pattern.length) return false

    for (let i = 0; i < pattern.length; i++) {
        const key = pattern[i]
        const value = arr[i]
        if (key in obj || value in obj2) {
            if (obj[key] !== value) return false
            if (obj2[value] !== key) return false
        } else {
            obj[key] = value
            obj2[value] = key
        }
    }
    return true
};

let pattern = "abba"
let s = "dog constructor constructor dog"

console.log(wordPattern(pattern, s))

// not completed