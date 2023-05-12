

let string = "xyz"
let change =(string,value) =>{
    let output = ""
    for (let i = 0; i < string.length; i++) {
        let a = string[i].charCodeAt()+value
        if(a <= 122){
            output += String.fromCharCode(a)
        }else{
            output += String.fromCharCode(96 + a % 122)
        }
    }
    return output
}

console.log(change(string,2))



