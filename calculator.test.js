const calculator = require("./calculator.js");

describe("Calculator", () => {
    test("empty string should return 0", ()=>{
        expect(calculator("")).toEqual(0);
    })
})