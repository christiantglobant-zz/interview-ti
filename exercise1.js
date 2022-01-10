/* 
Implement a high order function called sum in javascript that fulfills teh following cases:

1. sum(result => {console.log("-> ", result)});// -> prints: -> 0
2. sum(1)(result => {console.log("-> ", result)});// -> prints: -> 1
3. sum(1)(2)(result => {console.log("-> ", result)});// -> prints: -> 3
4. sum(1)(2)(4)(result => {console.log("-> ", result)});// -> prints: -> 7
*/

/**
 * Infinite Currying with a HOF
 * @param arg Number for getting sum or callback function to be called.
 * @return Returns a inner function in order to execute the callback function or accumulate number to the sum.
 */
function sum(arg) {
    let total = 0;
    
    function inner(arg) {
        if (typeof arg === "function") {
            arg(total);
        } else {
            total += arg;
            return inner;
        }
    }
    
    return inner(arg);
}

module.exports = sum;