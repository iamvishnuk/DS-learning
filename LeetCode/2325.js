// 2325 Decode the Message

var decodeMessage = function (key, message) {
    let map = {}
    let charcode = 97
    let result = ""
    
    for(let i = 0; i < key.length; i++) {
        if(key[i] == " " || map[key[i]]) {
            continue
        } else {
            map[key[i]]  = String.fromCharCode(charcode)
            charcode++
        }
    }
    
    for(let i = 0; i < message.length; i++) {
        if(message[i] == " ") {
            result += " "
        } else {
            result += map[message[i]]
        }
    }
    return result
};

const key = "the quick brown fox jumps over the lazy dog";
const message = "vkbs bs t suepuv";

console.log(decodeMessage(key, message));

console.log(key.length)
