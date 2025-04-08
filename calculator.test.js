const calculator = require("./calculator.js");

describe("Calculator", () => {
    test("empty string should return 0", ()=>{
        expect(calculator("")).toEqual(0);
    })
    test("a single value should return as itself", ()=>{
        expect(calculator("1").toEqual(1))
    })
})