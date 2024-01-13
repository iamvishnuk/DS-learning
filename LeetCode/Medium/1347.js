/*
    https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/?envType=daily-question&envId=2024-01-13
    1347. Minimum Number of Steps to Make Two string Anagram
*/

const s = "anagram";
const t = "mangaar";

var minSteps = function (s, t) {
    const map = new Map();
    let count = 0;
    for (let char of t) {
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }

    for (let char of s) {
        if (map.has(char)) {
            map.set(char, Math.max(map.get(char) - 1, 0));
        }
    }

    for (let value of map.values()) {
        count += value;
    }
    return count;
};

console.log(minSteps(s, t));
