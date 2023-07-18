// 135 leetcode
// var candy = function (ratings) {
//     if (ratings.length < 2) return 1
//     let curr = 1
//     let prev
//     for (let i = 1; i < ratings.length; i++) {
//         prev = curr
//         curr++
//         if (ratings[i] > ratings[i - 1]) {
//             curr = curr + prev
//         }
//     }
//     return curr
// };

// const ratings = [1, 3, 2, 2, 1]
// console.log("this is answer",candy(ratings))

// 122 Best time to buy and sell stock II
// var maxProfit = function (prices) {
//     let minPrice = Infinity
//     let result = 0
//     let maxProfit = 0
//     for (let i = 0; i < prices.length; i++) {
//         if(prices[i] < minPrice) {
//             minPrice = prices[i]
            
//         } else if (prices[i] - minPrice > maxProfit) {
//             maxProfit = prices[i] - minPrice
//             console.log("maxProfit", maxProfit, prices[i], minPrice)
//             result += maxProfit
//         }
//     }
//     return result
// };

// // const prices = [7, 1, 5, 3, 6, 4]
// const prices = [1, 2, 3, 4, 5]

// console.log(maxProfit(prices))



var validMountainArray = function (arr) {
    if (arr.length <= 2) return false
    if (arr.length == 3 && arr[0] < arr[1] && arr[2] < arr[1]) return true
    else return false

};
let arr = [1,3,1]
console.log(validMountainArray(arr))