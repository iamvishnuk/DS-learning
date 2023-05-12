let s = ", , , ,        a, eaefa"

let sample = (s)=> {
    let count = 1
    if (s.trim().length === 0) {
        return 0
    }
    for (let i = 0; i < s.trim().length; i++) {
        if (s[i] === " ") {
            count++
        }
    }
    return count
}

console.log(sample(s))