// 2225. Find Players With Zero or One Losses

var findWinners = function (matches) {
    const winners = {};
    const losers = {};
    const arr1 = [];
    const arr2 = [];

    // create object out of matches alternatively you can use Map
    for (let i = 0; i < matches.length; i++) {
        let winner = matches[i][0];
        let loser = matches[i][1];
        winners[winner] ? winners[winner]++ : (winners[winner] = 1);
        losers[loser] ? losers[loser]++ : (losers[loser] = 1);
    }

    for (const key in winners) {
        if (winners[key] && losers[key]) {
            if (losers[key] == 1) {
                arr2.push(key);
            }
        } else if (winners[key] && !losers[key]) {
            arr1.push(key);
        }
    }

    for (const key in losers) {
        if (losers[key] == 1 && !winners[key]) {
            arr2.push(key);
        }
    }

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    return [arr1, arr2];
};

const matches = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
];

console.log(findWinners(matches));

// output [[1,2,10],[4,5,7,8]]
