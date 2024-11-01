/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;
    let prev = 0; curr = 1
    for(var i = 2; i <= n; i++){
        let next = prev + curr; //next = 0 + 1
        prev = curr; // prev = 1
        curr = next; // curr = 1
    }

    return curr; // next = 1 + 1

    //other way (recurring function)

    // if(n <= 1) return n;
    // return fib(n-1) + fib(n-2);
};