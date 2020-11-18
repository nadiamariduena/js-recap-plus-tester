const { sum, subtract } = require("./lib2");

// TEST SUITE
//
// COLLECTION of test cases that logically
//  belong together
//
describe("testing collections", () => {
  //
  //  TEST CASE OR ( UNIT TEST )
  test("should sum up two numbers", () => {
    let result = sum(10, 5);
    // expect(result).toBe(15);
  });
  //

  test("should subtract two numbers", () => {
    let result = subtract(10, 5);
    // expect(result).toBe(5);
  });
  // ---------------new-------------------

  test("should compare objects", () => {
    let obj1 = { name: "Pedro", age: 27 };
    let obj2 = { age: 27, name: "Pedro" };

    expect(obj1).toEqual(obj2);
  });
  // ---------------new-------------------
  test.only("should compare arrays", () => {
    let arr1 = ["raquel", "pedro"];
    let arr2 = ["pedro", "raquel"];

    expect(arr1).toBe(arr2);
  });
  //
});
