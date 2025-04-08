const add = require("./calculator.js");

describe("Calculator", () => {
  describe("empty string should return 0", () => {
    logger("", 0);
  });

  describe("a single value should return as itself", () => {
    logger("1", 1);
    logger("2", 2);
  });

  describe("comma separator - multiple values should return the sum of it", () => {
    logger("1,2", 3);
    logger("1,2,3", 6);
    logger("1,2,3,4", 10);
  });

  describe("newline separator", () => {
    logger("1\n2,3", 6);
    logger("1\n2,3\n4\n5\n6,7",28)
  });

  describe("different delimeters", () => {
    logger("//;\n1;2", 3)
    logger("//&\n1&2&3&4&5",15)
  });

  describe("no negative numbers allowed", () => {
    it("-1 should throw an error", () => {
      expect(() => add("-1")).toThrow("negative numbers not allowed -1");
    });
    it("-1,2,-3 should throw an error", () => {
      expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed -1, -3");
    });
  });

  function logger(operands, sum){
    it(`should return "${operands.replace(/\n/g,'\\n')}" as ${sum}`, () => {
      expect(add(operands)).toEqual(sum);
    })
  }
});
