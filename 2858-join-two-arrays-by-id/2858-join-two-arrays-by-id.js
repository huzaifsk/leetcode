/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
     let map = new Map();

    // Add all objects from arr1 into the map
    for (let obj of arr1) {
        map.set(obj.id, obj);
    }

    // Add objects from arr2 into the map
    for (let obj of arr2) {
        if (map.has(obj.id)) {
            // Merge properties, with arr2 overriding arr1
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, obj);
        }
    }

    // Convert the map's values to an array and sort by id
    let result = Array.from(map.values()).sort((a, b) => a.id - b.id);

    return result;
};