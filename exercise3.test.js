/* 
Case 1: The result is a map with the following key value pairs
    - "" -> 1
    - "innerTwo" -> 2
    - "innerTwo/innerThree/innerFour" -> 3

Case 2: How do you have to pass someObject to the function in order to get the following result
    - "someObject" -> 1
    - "someObject/innerTwo" -> 2
    - "someObject/innerTwo/innerThree/innerFour" -> 3
*/

const extractValuesForKey = require('./exercise3')

const someObject = {
    uuid: 1,
    innerOne: {
        someKey: "some text"
    },
    innerTwo: {
        uuid: 2,
        innerThree: {
            someOtherKey: "some other text",
            innerFour: {
                uuid: 3
            }
        }
    }
}

describe('Exercises: Task 3', () => {
    test("should return an empty Map if keys are not found in object", () => {
        const expected = 0;
        const result = extractValuesForKey(someObject, "id")
        expect(expected).toBe(result.size)
    })

    test("should return a new Map with all found values in object", () => {
        const result = extractValuesForKey(someObject, "uuid")
        expect(result).toBeInstanceOf(Map)
    })

    test("should return a new Map with expected values found in example object: 'someObject'", () => {
        const result = extractValuesForKey(someObject, "uuid")
        const expected = new Map([
            ["", 1],
            ["innerTwo", 2],
            ["innerTwo/innerThree/innerFour", 3]
        ])
        expect(expected).toEqual(result)
    })

    test("should return a new Map with expected values found in example object sent like new object with its name as key", () => {
        const result = extractValuesForKey({ someObject }, "uuid")
        const expected = new Map([
            ["someObject", 1],
            ["someObject/innerTwo", 2],
            ["someObject/innerTwo/innerThree/innerFour", 3]
        ])
        expect(expected).toEqual(result)
    })
})