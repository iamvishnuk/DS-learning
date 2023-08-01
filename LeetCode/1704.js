//1704. Determine is String Halves Are Alike

var halvesAreAlike = function (s) {
    let mid = Math.floor(s.length / 2)
    const leftWord = s.slice(0, mid)
    const rightWord = s.slice(mid)
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let leftCount = 0
    let rightCount = 0

    for (let i = 0; i < leftWord.length; i++) {
        if(vowels.includes(leftWord[i])) leftCount++
    }
    for (let i = 0; i < rightWord.length; i++) {
        if(vowels.includes(rightWord[i])) rightCount++
    }
    return leftCount === rightCount
};

let s = "MerryChristmas"

console.log(halvesAreAlike(s))