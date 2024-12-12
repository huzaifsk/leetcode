/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numCheck = x.toString().split('').reverse().join('');
    if(x == numCheck) return true;
    else return false;
};