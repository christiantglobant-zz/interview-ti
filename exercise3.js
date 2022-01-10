/* 
Write a function that:

1. Takes a Javascript object as a first parameter
    - The object can have any structure and depth
2. Takes a string containing a key as second parameter
3. Returns a map with all values that are found for that key within the object
    - The key in the resulting map shall be the path to the key within the object where "/" is used as separator
    - The root key for the map is the name of the object
*/

/**
 * @param {*} object - Object to traverse
 * @param {*} key - Keys to search for in object
 * @returns map containing all found values
 */
const getPathes = (object, key) =>
    Object.entries(object).reduce((r, [k, v]) => {
        if (!v || typeof v !== 'object') return r;
        r.push(...getPathes(v, key).map(([l, v]) => [k + (l && '/') + l, v]));
        return r;
    }, key in object ? [['', object[key]]] : [])

const extractValuesForKey = (object, searchKey) => new Map(getPathes(object, searchKey))

module.exports = extractValuesForKey