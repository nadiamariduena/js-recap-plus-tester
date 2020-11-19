// Promises

const getFruitsData = () => {
  let arrFruits = ["banana", "cherry", "lemon"];
  //
  // if i want to return the array as  promise, i type the line below
  return Promise.resolve(arrFruits);
  // so this wrap an array as  a promise
};

module.exports = { getFruitsData };
