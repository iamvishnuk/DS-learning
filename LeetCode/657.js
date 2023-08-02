// 657. Robot Return to Origin

var judgeCircle = function (moves) {
    let upDwon = 0
    let leftRight = 0
    for (let i = 0; i < moves.length; i++) {
        if(moves[i] === "U") upDwon++
        if(moves[i] === "D") upDwon--
        if(moves[i] === "L") leftRight++
        if(moves[i] === "R") leftRight--
    }
    return !upDwon && !leftRight
};

const moves = "LL"

console.log(judgeCircle(moves))