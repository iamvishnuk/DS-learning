// 2418. Sort the People

var sortPeople = function (names, heights) {
    let map = {};
    let output = [];
    for (let i = 0; i < heights.length; i++) {
        map[heights[i]] = names[i];
    }
    heights.sort((a, b) => b - a);
    for (let i = 0; i < heights.length; i++) {
        output.push(map[heights[i]]);
    }
    return output;
};

const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];

console.log(sortPeople(names, heights));
