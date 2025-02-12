/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0; // Slow pointer

    for (let j = 1; j < nums.length; j++) { // Fast pointer
        if (nums[j] !== nums[i]) { // Found a new unique element
            i++;
            nums[i] = nums[j]; // Move it to the next position
        }
    }
    
    return i + 1; // Number of unique element
};