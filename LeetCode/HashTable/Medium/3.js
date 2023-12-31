// 3. Longest Substring Without Repeating Characters

// Solution - 1
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let start = 0;
    let end = 0;
    let maxLength = 0;

    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            maxLength = Math.max(maxLength, end - start + 1);
            end++;
        } else {
            set.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};


// Solution - 2 
var lengthOfLongestSubstring = function (s) {
    const charMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (charMap.has(s[end])) {
            // Update start to skip characters already encountered
            start = Math.max(start, charMap.get(s[end]) + 1);
        }
        charMap.set(s[end], end); // Update the character's last occurrence index
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
