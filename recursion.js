// sum of N numbers
function sum(n) {
    if (n <= 0) {
        return n;
    }
    return n + sum(n - 1);
}
// console.log(sum(3));



// console.log("second annswer");
function print(num) {
    if (num >= 1) {
        print(num - 1)
        console.log(num)
    }
}
// print(5)


// factorial of a number
function factorial(n) {
    if (n <= 1) {
        return n;
    }
    return n * factorial(n - 1);
}
// console.log(factorial(5)); 


// fibinocciSeries 
function fibinocciSeries(num){
    if( num <= 1){
        return num
    }else{
        return fibinocciSeries(num-1) + fibinocciSeries(num - 2)
    }
}
for(let i = 0; i < 5; i++){
    console.log(fibinocciSeries(i))
}


// sum of an array
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}

const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);

console.log(sum); // output: 15
