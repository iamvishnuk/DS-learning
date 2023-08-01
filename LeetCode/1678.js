// 1678. Goal Parser Interpretation

var interpret = function (command) {
    let result = ""
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "(" && command[i + 1] === ")") {
            result += "o"
        } else if (command[i] !== "(" && command[i] !== ")") {
            result += command[i]
        }
    }
    return result
};

let command = "(al)G(al)()()G"

console.log(interpret(command))