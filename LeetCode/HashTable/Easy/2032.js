// 2032. Two Out of Three

var twoOutOfThree = function (nums1, nums2, nums3) {
    const arr = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
    let obj = {};
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) obj[arr[i]]++;
        else obj[arr[i]] = 1;
    }

    console.log(obj);

    for (let key in obj) {
        if (obj[key] >= 2) output.push(key);
    }
    return output;
};

const nums1 = [3, 1],
    nums2 = [2, 3],
    nums3 = [1, 2];

console.log(twoOutOfThree(nums1, nums2, nums3));
