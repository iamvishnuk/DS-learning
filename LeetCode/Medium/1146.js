// 1146. Snapshot Array

/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.snapId = 0;
  this.array = Array(length)
    .fill(0)
    .map(() => [[-1, 0]]);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.array[index].push([this.snapId, val]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  return this.snapId++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  if (index >= this.length) return -1;
  const array = this.array[index];
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid][0] <= snap_id) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return array[end][1];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

let snapshotArr = new SnapshotArray(1); // set the length to be 1
snapshotArr.set(0, 4); // Set array[0] = 4
snapshotArr.set(0, 16); // Set array[0] = 16
snapshotArr.set(0, 13); // Set array[0] = 13
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 0
console.log(snapshotArr.get(0, 0)); // Get the value of array[0] with snap_id = 0, return 13
console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 1
