/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Check if concatenation rule is valid
    if (str1 + str2 !== str2 + str1) {
        return ""; // If the strings cannot form a repeating pattern, return an empty string
    }

    // Helper function to calculate the GCD of two numbers
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Calculate the GCD of the lengths of str1 and str2
    const gcdLength = gcd(str1.length, str2.length);

    // Return the substring of str1 with length equal to the GCD
    return str1.substring(0, gcdLength);
};