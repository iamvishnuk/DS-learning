// 2114. Maximum Number of Words Found in Sentences

var mostWordsFound = function (sentences) {
    let result = 0;
    for (let i = 0; i < sentences.length; i++) {
        let word = sentences[i];
        let length = word.split(" ").length;
        if (length > result) result = length;
    }
    return result
};

const sentences = ["please wait", "continue to fight", "continue to win"];

console.log(mostWordsFound(sentences));
