/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let resultArr = [];
    for(let i = 0; i < arr.length; i+=size){
       resultArr.push(arr.slice(i, i + size));
    }
    return resultArr;
};
