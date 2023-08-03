// 557. Reverse words in a string III

var reverseWords = function (s) {
    const wordsArray = s.split(" ");
    const reversedWordsArray = wordsArray.map((word) => {
        return word.split("").reverse().join("");
    });
    return reversedWordsArray.join(" ");
};

const s = "Let's take LeetCode contest";

console.log(reverseWords(s));
