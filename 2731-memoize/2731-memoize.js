/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};

  return function(...args) {
    // Convert the arguments to a JSON string as a unique key for caching
    const key = JSON.stringify(args);

    // Check if the result is already cached
    if (key in cache) {
      return cache[key];
    }

    // Compute the result, cache it, and return
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */