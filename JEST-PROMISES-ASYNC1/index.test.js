const { sum, subtract } = require("./lib");

test("should sum up two numbers", () => {
  let result = sum(10, 5); // expectation: 15
  expect(result).toBe(15);
  //but here we are telling that the result will be 5
  // even if we know that the result is 15 but it s just for error purposes
});
//

test("should subtract two numbers", () => {
  let result = subtract(10, 5); // expectation: 15
  expect(result).toBe(5);
});
