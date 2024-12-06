/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length; // Calculate the upper bound
    let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
    let actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of array elements
    return expectedSum - actualSum; // The difference is the missing number
};