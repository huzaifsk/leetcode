/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let charCount = new Map();

    for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
}
// Step 2: Extract unique frequency values
    const freqSet = new Set(charCount.values());

    // Step 3: If only one unique frequency exists, it's a good string
    return freqSet.size === 1;
};