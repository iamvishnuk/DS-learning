let linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
}

let arr = [10,3,5,6,9,2,12,2,4]
const result = linearSearch(arr, 12)
console.log("Target found at index = ",result)