const { getFruitsData } = require("./data-lib");

describe("sweet fruit testing suite", () => {
  //
  //
  test("should get fruit data", () => {
    let fruits = getFruitsData();
    expect(fruits.length).toBe(3);
    // here you get 3 elements from the array in the data-lib.js
  });
  //
  //
});

// npm i @types/jest   fro auto completion
