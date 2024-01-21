// 2678. Number of Senior Citizens

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let res = [];
    let count = 0;

    for (let i = 0; i < details.length; i++) {
        res.push(details[i].slice(11, 13));
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i] > 60) {
            count++;
        }
    }

    return count;
};

const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];

console.log(countSeniors(details));
