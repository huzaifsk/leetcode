/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args){
        if(!hasBeenCalled){
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        }
        return undefined
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

//  Explanation:

// hasBeenCalled is initially set to false.

// The returned function checks hasBeenCalled:

// If false, it calls fn with the provided arguments (...args), sets 

// hasBeenCalled to true, and stores the result.

// If true, it returns undefined without calling fn.
