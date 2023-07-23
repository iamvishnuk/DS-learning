// 1832. check if the sentence is pangram

let sentence = "leetcodeslfkjskfjsdkfjklsdklsdjksdjfklsdkldklfjsdklfjskljf"

// using object
var checkIfPangram = function (sentence) {
    let obj = {}
    if (sentence.length < 26) return false
    for (let i = 0; i < sentence.length; i++) {
        if (obj[sentence[i]]) {
            obj[sentence[i]]++
        } else {
            obj[sentence[i]] = 1
        }
    }
    let count = 0
    for (let key in obj) {
        count++
    }
    return count === 26
};

console.log(checkIfPangram(sentence))

// using set
const checkIfPangram2 = (sentence) => {
    const set = new Set();

    for (let i = 0; i < sentence.length; i++) {
        if (!set.has(sentence[i])) {
            set.add(sentence[i]);
        }
    }

    return set.size === 26;
}

console.log(checkIfPangram2(sentence))