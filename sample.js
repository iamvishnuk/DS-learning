console.log("first annswer");
function sum(n) {
    if (n <= 0) {
        return n;
    }
    return n + sum(n - 1);
}
console.log(sum(3));



console.log("second annswer");
function print(num) {
    if (num >= 1) {
        print(num - 1)
        console.log(num)
    }
}
print(5)



function factorial(n) {
    if (n <= 1) {
        return n;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));