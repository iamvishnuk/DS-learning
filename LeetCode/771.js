// 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    let map = {};

    for (let i = 0; i < stones.length; i++) {
        map[stones[i]] ? map[stones[i]]++ : (map[stones[i]] = 1);
    }
    for (let i = 0; i < jewels.length; i++) {
        if (map[jewels[i]]) {
            count += map[jewels[i]];
        }
    }
    return count;
};

const jewels = "aA";
const stones = "aAAbbbb";

console.log(numJewelsInStones(jewels, stones));
