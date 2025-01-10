/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        // Check if the left character is not alphanumeric
        if (!isAlnum(s[left])) {
            left++;
        }
        // Check if the right character is not alphanumeric
        else if (!isAlnum(s[right])) {
            right--;
        }
        // Compare characters after converting to lowercase
        else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
    
};

function isAlnum(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

// OR

var isPalindrome = function(x) {
    let numCheck = x.toString().split('').reverse().join('');
    if(x == numCheck) return true;
    else return false;
};
