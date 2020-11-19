// Promises
let arrFruits = ["banana", "cherry", "lemon", "tomato"];

const getFruitsData = () => {
  return Promise.resolve(arrFruits);
};

// create a new promises in the second function

const getFruitDataDelayed = () => {
  return new Promise((resolve, reject) => {
    // by calling RESOLVE you automatically EXIT the promise
    resolve(arrFruits);
    // Since promises can be broken. you also need a way to reject them, theres when the REJECT comes
  });
};

module.exports = { getFruitsData, getFruitDataDelayed };
