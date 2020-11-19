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
});


