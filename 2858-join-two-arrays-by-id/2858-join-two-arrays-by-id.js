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


// var join = function(arr1, arr2) {
//   const combinedArray = arr1.concat(arr2);
//   const merged = {};

//   combinedArray.forEach((obj) => {
//     const id = obj.id;
//     if (!merged[id]) {
//       merged[id] = obj;
//     } else {
//         Object.assign(merged[id],obj)
//       //merged[id] = { ...merged[id], ...obj };
//     }
//   });

//   return Object.values(merged)
// };
