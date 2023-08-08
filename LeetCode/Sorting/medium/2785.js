// 2785. Sort Vowels in a String

var sortVowels = function (s) {
    const obj = {
        a: "a",
        e: "e",
        i: "i",
        o: "o",
        u: "u",
        A: "A",
        E: "E",
        I: "I",
        O: "O",
        U: "U",
    };
    let vowels = [];
    const output = s.split("");
    let k = 0;

    // creating a array of all vowels in the string
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (obj[letter]) vowels.push(letter);
    }

    // sorting the vowels 
    vowels = vowels.sort();

    // changing the vowels in the sting to sorted vowels
    for (let i = 0; i < output.length; i++) {
        let letter = output[i];
        if (obj[letter]) {
            output[i] = vowels[k];
            k++;
        }
    }
    return output.join("");
};

const s = "lEetcOde";

console.log(sortVowels(s));
