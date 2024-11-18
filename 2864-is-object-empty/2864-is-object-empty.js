/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let objectLength = Object.keys(obj).length;
    if(objectLength === 0){
        return true;
    }
    return false;
};