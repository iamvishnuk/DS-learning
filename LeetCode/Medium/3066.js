// 3066. Minimum Operation to to Exceed Threshold Value II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const { MinPriorityQueue } = require("../../utils/MinPriorityQueue");

var minOperations = function (nums, k) {
  const pq = new MinPriorityQueue();
  let operation = 0;

  for (let num of nums) {
    pq.enqueue(num);
  }

  while (pq.front().element < k) {
    let x = pq.dequeue();
    let y = pq.dequeue();
    pq.enqueue(x * 2 + y);
    operation++;
  }

  return operation;
};

let nums = [999999999, 999999999, 999999999];
let k = 1000000000;

console.log(minOperations(nums, k));
