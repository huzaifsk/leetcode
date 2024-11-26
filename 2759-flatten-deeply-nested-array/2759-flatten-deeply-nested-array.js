/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const result = []; // Store the flattened elements

  for (let item of arr) {
    if (Array.isArray(item) && n > 0) {
      // If the element is an array and we haven't reached max depth...
      result.push(...flat(item, n - 1)); // Recursively flatten it
    } else {
      result.push(item); // Otherwise, just add the element directly
    }
  }

  return result;
};