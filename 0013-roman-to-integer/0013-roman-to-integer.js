/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToIntMap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    };

    let totalVal = 0;

    for(var i = 0; i < s.length; i++){
        let currentVal = romanToIntMap[s[i]];
        let nextVal = romanToIntMap[s[i + 1]];

        if(currentVal < nextVal){
            totalVal -= currentVal;
        }else{
            totalVal += currentVal;
        }
    }
        return totalVal;
};