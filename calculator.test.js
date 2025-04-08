const add = require("./calculator.js");

describe("Calculator", () => {
  describe("empty string should return 0", () => {
    it("empty string should return 0", () => {
      expect(add("")).toEqual(0);
    });
  });

  describe("a single value should return as itself", () => {
    it("should return as 1", () => {
      expect(add("1")).toEqual(1);
    });
    it("should return as 2", () => {
      expect(add("2")).toEqual(2);
    });
  });

  describe("comma separator - multiple values should return the sum of it", () => {
    it("should return as 3", () => {
      expect(add("1,2")).toEqual(3);
    });
    it("should return as 6", () => {
      expect(add("1,2,3")).toEqual(6);
    });
    it("should return as 10", () => {
      expect(add("1,2,3,4")).toEqual(10);
    });
  });
});
