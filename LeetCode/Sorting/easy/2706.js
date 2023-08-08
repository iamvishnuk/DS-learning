//2706. Buy Two Chocolates

var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b);
    let firstMin = prices[0];
    let secondMin = prices[1];

    return firstMin + secondMin <= money
        ? money - (firstMin + secondMin)
        : money;
};

const prices = [1, 2, 3];
const money = 3;

console.log(buyChoco(prices, money));
