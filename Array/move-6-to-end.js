let arr = [6, 8, 6, 10, 4, 15, 6, 3, 6, 6];

let method1 = (arr) => {
    let end = arr.length - 1;
    let start = 0;
    let temp;
    while (start < end) {
        if (arr[end] === 6) {
            end--;
        }
        if (arr[start] !== 6) {
            start++;
        }
        if (arr[start] === 6) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
    }
    return arr
};


// this method is with out swapping
let methode2 = () => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 6) {
            arr.splice(i, 1); // remove the element at index i
            arr.push(6); // add the element to the end of the array
        }
    }
};


let method3 = (arr) => {

    let end = arr.length - 1
    let temp

    for (let i = 0; i <= end; i++) {
        if(arr[i] === 6){
            temp = arr[i]
            arr[i] = arr[end]
            arr[end] = temp
            end--
            i--
        }
        
    }
    return arr
}


console.log(method3(arr));
