// Promises and how to handle them

// .then() .catch() async / await
// => relevant for HANDLING received promises

let arrFruits = ["Banana", "Cherry", "Lemon"];

const getFruitData = () => {
  // wrap array as a promise
  return Promise.resolve(arrFruits);
};

const getFruitDataDelayedSuccess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrFruits);
    }, 2000);
  });
};

// broken call to backend
// possible reasons: backend not started, route not available, error in backend server
const getFruitDataDelayedFail = () => {
  return new Promise((resolve, reject) => {
    reject({
      error: "Fruits not available...",
      code: 404,
    });
  });
};

module.exports = {
  getFruitData,
  getFruitDataDelayedSuccess,
  getFruitDataDelayedFail,
};

/*


// Promises
let arrFruits = ["banana", "cherry", "lemon", "tomato"];

const getFruitData = () => {
  return new Promise((resolve, reject) => {
    resolve("arrFruits");
  });
};

const getFruitDataDelayedSuccess = () => {
  return new Promise((resolve, reject) => {
    resolve("arrFruits");
  });
};

//

const getFruitDataDelayedFail = () => {
  return new Promise((resolve, reject) => {
    // by calling RESOLVE you automatically EXIT the promise
    //   resolve(arrFruits);
    reject({
      error: "Fruits not available",
      code: 404,
    });
    // Since promises can be broken. you also need a way to reject them, theres when the REJECT comes
  });
};

module.exports = {
  getFruitData,
  getFruitDataDelayedSuccess,
  getFruitDataDelayedFail,
};


*/
