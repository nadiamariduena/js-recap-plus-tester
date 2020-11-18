const { sum, subtract } = require("./lib");

// TEST SUITE
//
// COLLECTION of test cases that logically
//  belong together
//
describe("testing suite collections", () => {
  //
  //  TEST CASE OR ( UNIT TEST )
  test("should sum up two numbers", () => {
    let result = sum(10, 5);
    expect(result).toBe(15);
  });
  //

  test("should subtract two numbers", () => {
    let result = subtract(10, 5);
    expect(result).toBe(5);
  });
});
