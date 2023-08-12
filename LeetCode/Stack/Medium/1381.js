//1381. Design a Stack With Increment Operation

/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.max = maxSize;
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length !== this.max) {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (this.stack.length !== 0) return this.stack.pop();
    return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    const length = Math.min(this.stack.length, k);
    for (let i = 0; i < length; i++) {
        this.stack[i] += val;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
