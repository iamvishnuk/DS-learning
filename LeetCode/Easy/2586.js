// 2586. Count the Number of Vowel String in Range

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
    const obj = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
    };
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (obj[words[i][0]] && obj[words[i][words[i].length - 1]]) {
            count++;
        }
    }
    return count;
};

const words = ["hey", "aeo", "mu", "ooo", "artro"];
const left = 1;
const right = 4;

console.log(vowelStrings(words, left, right));
