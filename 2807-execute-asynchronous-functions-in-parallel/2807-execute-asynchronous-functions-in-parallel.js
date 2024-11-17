/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = []; // Array to store resolved values
        let completedCount = 0; // Counter for completed promises

        functions.forEach((fn, index) => {
            // Execute each function and handle its promise
            fn()
                .then(value => {
                    results[index] = value; // Store the result in the correct order
                    completedCount++; // Increment the counter
                    if (completedCount === functions.length) {
                        resolve(results); // Resolve when all are completed
                    }
                })
                .catch(reject); // Reject immediately on the first error
        });

        // Handle the case where the functions array is empty
        if (functions.length === 0) {
            resolve(results);
        }
    });
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */