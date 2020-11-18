const { sum } = require("./lib");

test("should sum up to  numbers", () => {
  let result = sum(10, 5); // expectation: 15
  expect(result).toBe(6);
});
