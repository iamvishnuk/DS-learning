// 2053. Kth Distinct String in an Array

var kthDistinct = function (arr, k) {
    const map = {};
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }

    for (const key in map) {
        if (map[key] === 1 && k > 0) {
            result = key;
            k--;
        }
    }
    return result && k === 0 ? result : "";
};

const arr = ["d", "b", "c", "b", "c", "a"];
const k = 2;

console.log(kthDistinct(arr, k));
