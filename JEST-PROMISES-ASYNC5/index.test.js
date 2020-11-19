const { getFruitsData, getFruitDataDelayed } = require("./data-lib");

describe("sweet fruit testing suite", () => {
  test.only("should get fruit data delayed", async () => {
    //
    try {
      let fruitsDelayed = await getFruitDataDelayed();
      expect(fruitsDelayed.length).toBe(4);
      //
    } catch (err) {
      expect(err).toBe("Fruits not available");
    }
  });

  //
  //
  test("should get fruit data", async () => {
    // Await will wait to the promise : getFruitsData()
    // to complet then return the data to let fruits
    let fruits = await getFruitsData();
    expect(fruits.length).toBe(4);
  });
  //
  //
});
