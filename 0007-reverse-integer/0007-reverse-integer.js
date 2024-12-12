/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let revNum = 0;
    isNegative = x < 0
    x = Math.abs(x)
    while(x > 0){
      let lastDigit = x % 10;
        revNum = (revNum * 10) + lastDigit
        x = Math.floor(x / 10);

        // Check if revNum is out of the 32-bit signed integer range
        if (revNum > Math.pow(2, 31) - 1) {
            return 0; // Return 0 if the number exceeds the range
        }  
    }
    return isNegative ? -revNum : revNum;
};