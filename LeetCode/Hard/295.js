// 295. Find Median from Data Stream

var MedianFinder = function () {
    this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let left = 0;
    let right = this.arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    this.arr.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.arr.length % 2 === 0) {
        let mid = this.arr.length / 2;
        return (this.arr[mid] + this.arr[mid - 1]) / 2;
    } else {
        return this.arr[Math.floor(this.arr.length / 2)];
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
