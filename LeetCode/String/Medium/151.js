// 151. Reverse Words in a String

// Method 1
var reverseWords = function (s) {
    const cleanSentence = s.trim().replace(/\s+/g, " ");
    return cleanSentence.split(" ").reverse("").join(" ")
};

const s = "a good   example";
console.log(reverseWords(s));

// Method 2
var reverseWords2 = function (s) {
    return s
        .split(" ")
        .filter((word) => word !== "")
        .reverse()
        .join(" ");
};