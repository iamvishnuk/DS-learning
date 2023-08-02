//1967. Number of String Appear as Substring in word

var numOfStrings = function (patterns, word) {
    let count = 0
    for (let i = 0; i < patterns.length; i++) {
        let letter = patterns[i]
        if (word.includes(letter)) count++
    }
    return count
};

const patterns = ["a", "abc", "bc", "d"]
const word = "abc"

console.log(numOfStrings(patterns, word))
