const { getFruitsData } = require("./data-lib");

describe("sweet fruit testing suite", () => {
  //
  //
  test("should get fruit data", async () => {
    // Await will wait to the promise : getFruitsData()
    // to complet then return the data to let fruits
    let fruits = await getFruitsData();
    expect(fruits.length).toBe(4);
  });

  /*
  
  
  
  
  
  
  
  */
  // test("should get fruit data", () => {
  //   // let fruits = getFruitsData();
  //   getFruitsData().then((arrFruits) => {
  //     console.log(arrFruits);
  //     expect(arrFruits.length).toBe(4);
  //   });
  // });
});

// npm i @types/jest   for auto completion
