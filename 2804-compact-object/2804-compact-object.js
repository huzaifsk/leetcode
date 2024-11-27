/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        // Process arrays by filtering out falsy values
        return obj
            .map(item => compactObject(item)) // Recur for nested elements
            .filter(Boolean); // Remove falsy values
    } else if (typeof obj === 'object' && obj !== null) {
        // Process objects by iterating over its keys
        return Object.entries(obj).reduce((acc, [key, value]) => {
            const compactValue = compactObject(value); // Recur for nested objects
            if (Boolean(compactValue)) {
                acc[key] = compactValue; // Include only truthy values
            }
            return acc;
        }, {});
    }
    // For primitive types, return the value directly
    return obj;
};