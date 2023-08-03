// 2000. Reverse Prefix of word
var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch);
    let firstPart = word.slice(0, index + 1);
    let lastPart = word.slice(index + 1);
    firstPart = firstPart.split("").reverse().join("");
    return firstPart + lastPart;
};

const word = "abcdefd";
const ch = "s";

console.log(reversePrefix(word, ch));
