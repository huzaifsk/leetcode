/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
    const key = fn(item); // Generate the key using the provided function
    if (!grouped[key]) {
      grouped[key] = []; // Initialize an array for this key if it doesn't exist
    }
    grouped[key].push(item); // Add the item to the appropriate group
    return grouped; // Return the updated grouped object
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */