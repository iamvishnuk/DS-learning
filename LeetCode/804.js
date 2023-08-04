// 804. Unique Morse Code Words

var uniqueMorseRepresentations = function (words) {
    const moreseCode = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
    };
    let set = new Set();

    for (let i = 0; i < words.length; i++) {
        let letter = words[i];
        let temp = "";
        for (let j = 0; j < letter.length; j++) {
            temp += moreseCode[letter[j]];
        }
        set.add(temp);
    }

    return set.size;
};

const words = ["gin", "zen", "gig", "msg"];

console.log(uniqueMorseRepresentations(words));
