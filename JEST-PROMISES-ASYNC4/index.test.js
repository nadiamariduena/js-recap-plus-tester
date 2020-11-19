const { getFruitsData } = require("./data-lib");

describe("sweet fruit testing suite", () => {
  //
  //
  test("should get fruit data", () => {
    // let fruits = getFruitsData();
    getFruitsData().then((arrFruits) => {
      console.log(arrFruits);
      expect(arrFruits.length).toBe(4);
    });
  });
});

// npm i @types/jest   for auto completion