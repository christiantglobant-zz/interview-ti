/* 
Exercises task 1
1. sum(result => {console.log("-> ", result)});// -> prints: -> 0
2. sum(1)(result => {console.log("-> ", result)});// -> prints: -> 1
3. sum(1)(2)(result => {console.log("-> ", result)});// -> prints: -> 3
4. sum(1)(2)(4)(result => {console.log("-> ", result)});// -> prints: -> 7

Exercises task 2
1. sum(1)(2)(3)(4)(5)(6)(result => {console.log("-> ", result)});// -> prints: -> 21
*/

const sum = require('./exercise1')

describe('Exercises: Task 1', () => {
    test("should print 0 if they receive an empty value as parameter", () => { 
        const expected = 0
        const consoleSpy = jest.spyOn(console, 'log')
        sum(result => {console.log(result)})
        expect(consoleSpy).toHaveBeenCalledWith(expected)
    })

    test("should print 1 if they receive only 1 as parameter", () => { 
        const expected = 1
        const consoleSpy = jest.spyOn(console, 'log')
        sum(1)(result => {console.log(result)})
        expect(consoleSpy).toHaveBeenCalledWith(expected)
    })

    test("should print 3 if they receive 1 and 2 as parameters", () => { 
        const expected = 3
        const consoleSpy = jest.spyOn(console, 'log')
        sum(1)(2)(result => {console.log(result)})
        expect(consoleSpy).toHaveBeenCalledWith(expected)
    })

    test("should print 7 if they receive 1, 2 and 4 as parameters", () => { 
        const expected = 7
        const consoleSpy = jest.spyOn(console, 'log')
        sum(1)(2)(4)(result => {console.log(result)})
        expect(consoleSpy).toHaveBeenCalledWith(expected)
    })
})

describe('Exercises: Task 2', () => {
    test("should print the sum of any arbitrary number of calls", () => { 
        const expected = 21
        const consoleSpy = jest.spyOn(console, 'log')
        sum(1)(2)(3)(4)(5)(6)(result => {console.log(result)})
        expect(consoleSpy).toHaveBeenCalledWith(expected)
    })
})