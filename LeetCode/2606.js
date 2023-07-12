// FIND THE SUBSTRING WITH MAXIMUM COST

var maximumCostSubstring = function (s, chars, vals) {
    const map = {}
    for (let i = 0; i < chars.length; i++) {
        map[chars[i]] = vals[i]

    }
    let letters = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < 26; i++) {
        if (map[letters[i]] === undefined) { map[letters[i]] = i + 1 }

    }
    let max = 0
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        console.log(map[s[i]])
        sum += map[s[i]]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
};

let s = "adaa"
let chars = "d"
let vals = [-100]

console.log(maximumCostSubstring(s, chars, vals))