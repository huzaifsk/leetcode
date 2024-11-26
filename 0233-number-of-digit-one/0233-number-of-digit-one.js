/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;
    let place = 1; // Start from the units place (1, 10, 100, ...)

    while (place <= n) {
        let higher = Math.floor(n / (place * 10)); // Digits higher than the current place
        let current = Math.floor((n / place) % 10); // Current digit
        let lower = n % place; // Digits lower than the current place

        // Count the contribution of the current place:
        if (current === 0) {
            count += higher * place; // Only higher digits contribute
        } else if (current === 1) {
            count += higher * place + lower + 1; // Higher + remainder of numbers with '1'
        } else {
            count += (higher + 1) * place; // All full cycles contribute
        }

        place *= 10; // Move to the next digit place
    }

    return count;
};