// 3016. Minimum Number of Pushes to Type Word II

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let map = {};
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (map[word[i]]) {
            map[word[i]]++;
        } else {
            map[word[i]] = 1;
        }
    }

    const sortedEntries = Object.entries(map).sort(
        ([, valueA], [, valueB]) => valueB - valueA
    );

    const sortedObje = Object.fromEntries(sortedEntries);
    console.log(sortedObje);

    Object.entries(sortedObje).forEach(([key, value], index) => {
        let temp = Math.floor(index / 8);
        let num = temp >= 1 ? temp + 1 : 1;
        count += value * num;
    });
    return count;
};
