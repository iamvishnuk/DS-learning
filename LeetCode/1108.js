// 1108. Defanging an IP Address

var defangIPaddr = function (address) {
    let result = ""
    for(let i = 0; i < address.length; i++) {
        if(address[i] === ".") {
            result += `[.]`
        } else {
            result += address[i]
        }
    }
    return result
};

let address = "1.1.1.1"

console.log(defangIPaddr(address))