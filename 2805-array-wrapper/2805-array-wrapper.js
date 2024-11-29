/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums; // Store the array in the instance
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // Return the sum of all elements in the array
    return this.nums.reduce((sum, num) => sum + num, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // Return a comma-separated string representation of the array wrapped in brackets
    return `[${this.nums.join(",")}]`;
};

/**
 * Example usage:
 * const obj1 = new ArrayWrapper([1, 2]);
 * const obj2 = new ArrayWrapper([3, 4]);
 * console.log(obj1 + obj2); // 10
 * console.log(String(obj1)); // "[1,2]"
 * console.log(String(obj2)); // "[3,4]"
 */
