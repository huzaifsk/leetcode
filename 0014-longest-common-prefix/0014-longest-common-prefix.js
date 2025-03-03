/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    let prefix = strs[0];

    for(let i = 0; i< strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }return prefix;
};

// Step 2: Compare with "flow"

// "flow".indexOf("flower") !== 0 → Shorten prefix
// "flow".indexOf("flowe") !== 0 → Shorten prefix
// "flow".indexOf("flow") === 0 ✅ (Match found)
// Step 3: Compare with "flight"

// "flight".indexOf("flow") !== 0 → Shorten prefix
// "flight".indexOf("flo") !== 0 → Shorten prefix
// "flight".indexOf("fl") === 0 ✅ (Match found)