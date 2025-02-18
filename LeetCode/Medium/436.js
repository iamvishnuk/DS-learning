// 436. Find Right Interval

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const res = [];
  const end = intervals.length;
  const map = new Map();
  const array = [];

  intervals.forEach((interval, index) => {
    map.set(interval[0], index);
    array.push(interval[0]);
  });

  array.sort((a, b) => a - b);

  for (let i = 0; i < end; i++) {
    let target = intervals[i][1];
    let value = search(array, 0, end - 1, target);
    if (value === undefined) {
      res.push(-1);
    } else {
      res.push(map.get(value));
    }
  }

  return res;
};

var search = function (array, start, end, target) {
  let ans = undefined;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (array[mid] >= target) {
      ans = array[mid];
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

const intervals = [
  [3, 4],
  [2, 3],
  [1, 2],
];

console.log(findRightInterval(intervals)); // [-1, 0, 1]
