/*
    https://leetcode.com/problems/word-break/description/
    139. Word Break 
*/

var wordBreak = function (s, wordDict) {
    let visited = new Set();
    let set = new Set(wordDict);
    let queue = [0];

    while (queue.length) {
        let current = queue.shift();

        if (!visited.has(current)) {
            for (let i = current + 1; i <= s.length; i++) {
                if (set.has(s.slice(current, i))) {
                    if (i === s.length) {
                        return true;
                    }
                    queue.push(i);
                }
            }
            visited.add(current);
        }
    }
    return false;
};

const s = "leetcode";
const wordDict = ["leet", "code"];

wordBreak(s, wordDict);
