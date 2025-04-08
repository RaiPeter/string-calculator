const calculator = require("./calculator.js");

describe("Calculator", () => {
  describe("empty string should return 0", () => {
    it("empty string should return 0", () => {
      expect(calculator("")).toEqual(0);
    });
  });

  describe("a single value should return as itself", () => {
    it("should return as 1", () => {
      expect(calculator("1")).toEqual(1);
    });
    it("should return as 2", () => {
      expect(calculator("2")).toEqual(2);
    });
  });
});
