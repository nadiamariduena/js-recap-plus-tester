const {
  getFruitData,
  getFruitDataDelayedSuccess,
  getFruitDataDelayedFail,
} = require("./data-lib");

describe("sweet fruit testing suite", () => {
  test("should get fruit data delayed success", async () => {
    let fruits = await getFruitDataDelayedSuccess(); // waits for resolve() function of the Promise to finish
    expect(fruits.length).toBe(3);
  });

  // TEST error scenarios
  // if error happens like expected => this is a SUCCESS test
  test("should get fruit data delayed fail", async () => {
    try {
      let fruits = await getFruitDataDelayedFail(); // waits for resolve() function of the Promise to finish
    } catch (err) {
      // catch handles reject case of Promise
      expect(err).toEqual({
        error: "Fruits not available...",
        code: 404,
      });
    }
  });

  test("should get fruit data", async () => {
    let fruits = await getFruitData();
    expect(fruits.length).toBe(3);

    // this is doing the same as above just with normal .then() handler
    // getFruitData()
    // .then(arrFruits => {
    //   console.log(arrFruits)
    //   expect(arrFruits.length).toBe(3)
    // })
  });
});

/*






const {
  getFruitData,
  getFruitDataDelayedSuccess,
  getFruitDataDelayedFail,
} = require("./data-lib");

describe("sweet fruit testing suite", () => {
  //
  //
  test("should get fruit data delayed success", async () => {
    // this is expected to be successful
    let fruitsDelayed = await getFruitDataDelayedSuccess();
    expect(fruitsDelayed.length).toBe(4);
  });

  //
  //
  test("should get fruit data delayed fail", async () => {
    // this is expected to fail
    try {
      let fruits = await getFruitDataDelayedFail();
    } catch (error) {
      expect(error).toEqual({
        error: "Fruits not available",
        code: 404,
      });
    }
  });
  //
  //
  test("should get fruit data delayed", async () => {
    let fruitos = await getFruitData();
    expect(fruitos.length).toBe(4);
  });
  //
});



*/
