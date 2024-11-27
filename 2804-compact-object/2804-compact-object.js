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

// if (Array.isArray(obj)) {
//         const newArr = [];
//         let count = -1;
//         for (let i = 0; i < obj.length; i++) {
//             if (obj[i] && obj[i] !== null) {
//                 newArr.push(obj[i]);
//                 count++;
//                 if (typeof newArr[count] === "object") newArr[count] = compactObject(newArr[count]);
//             }
//         }
//         return newArr;
//     }
//     else {
//         for (const key in obj) {
//             if (!obj[key] || obj[key] === null) delete obj[key];
//             else if (typeof obj[key] === "object") obj[key] = compactObject(obj[key]);
//         }
//     }
//     return obj;
