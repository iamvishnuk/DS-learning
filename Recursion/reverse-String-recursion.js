const s = ["h", "e", "l", "l", "o"]

const reverse = (s) => {
    if(s.length < 1) return []
    let lastChar = s.pop()
    return [lastChar,...reverse(s)]
}

console.log(reverse(s))