//1688. Maximum Repeating Substring

var maxRepeating = function (sequence, word) {
    let result = 0;
    let str = word;
    if (sequence.includes(word)) result = 1;
    while (str.length <= sequence.length) {
        console.log(str);
        str += word;
        if (sequence.includes(str)) {
            result++;
        } else break;
    }
    return result;
};

const sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
const word = "aaaba";

console.log(maxRepeating(sequence, word));
