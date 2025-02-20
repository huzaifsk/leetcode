/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0; // pointer to track the position for non-val elements
  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) { // if current element is not equal to val
        nums[j] = nums[i];  // move it to the front
        j++;                // increment the pointer
        }
    }
    
    return j; // j is the count of elements not equal to val
};