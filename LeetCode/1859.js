// 1859. Sorting the Sentence

var sortSentence = function (s) {
    let arr = s.split(" ")
    let output = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i]
        output[letter[letter.length - 1]] = letter.slice(0, letter.length - 1)
    }
    return output.join(" ").trim()
};

let s = "is2 sentence4 This1 a3"

console.log(sortSentence(s))

