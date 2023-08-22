// 1282. Group the People Given the Group Size They Belong To

var groupThePeople = function (groupSizes) {
    let map = {};
    let output = [];
    for (let i = 0; i < groupSizes.length; i++) {
        let temp = groupSizes[i];
        if (map[temp]) {
            map[temp].push(i);
        } else {
            map[temp] = [i];
        }
    }

    for (let key of Object.keys(map)) {
        if (key == map[key].length) {
            output.push(map[key]);
        } else {
            const partsize = parseInt(key);
            for (let i = 0; i < map[key].length; i += partsize) {
                output.push(map[key].slice(i, i + partsize));
            }
        }
    }
    return output;
};

const groupSizes = [2, 2, 1, 1, 1, 1, 1, 1];

console.log(groupThePeople(groupSizes));
