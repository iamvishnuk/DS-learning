// 383. Ransom Note

var canConstruct = function (ransomNote, magazine) {
    let map = {}
    for (let i = 0; i < magazine.length; i++) {
        let letter = magazine.charAt(i)
        if(map[letter]) {
            map[letter]++
        } else {
            map[letter] = 1
        }
    }
    for (let j = 0; j < ransomNote.length; j++) {
        let letter = ransomNote.charAt(j)
        let count = map[letter]
        console.log(count)
        if(count == 0 || count == undefined) {
            return false
        }
        map[letter]--
        
    }
    return true
};

let ransomeNote = "fffbfg"
let magazine = "effjfggbffjdgbjjhhdegh"

console.log(canConstruct(ransomeNote,magazine))