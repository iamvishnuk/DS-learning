// 2651. Calculate Delayed Arrival Time

var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    const time = arrivalTime + delayedTime;
    if (time === 24) return 0;
    if (time > 24) return time - 24;
    return time;
};

const arrivalTime = 13,
    delayedTime = 11;

console.log(findDelayedArrivalTime(arrivalTime, delayedTime));
