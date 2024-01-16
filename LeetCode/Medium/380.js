/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=daily-question&envId=2024-01-16
 * 380. Insert Delete GetRandom 0(1)
 */

var RandomizedSet = function () {
    this.randomizedSet = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.randomizedSet.has(val)) return false;
    this.randomizedSet.add(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.randomizedSet.has(val)) return false;
    this.randomizedSet.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const maxLen = this.randomizedSet.size;
    const randIndex = Math.floor(Math.random() * maxLen);
    const randomizedSetArr = Array.from(this.randomizedSet);
    return randomizedSetArr[randIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
