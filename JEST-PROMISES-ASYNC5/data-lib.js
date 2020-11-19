// Promises

const getFruitsData = () => {
  let arrFruits = ["banana", "cherry", "lemon", "tomato"];
  // // here i want to return a promise , not an array like so:

  return Promise.resolve(arrFruits);
};

const getFruitDataDelayed = () => {};

module.exports = { getFruitsData };
/*

ASYNC - AWAIT , .then() and .catch()
is a way to handle promises that you receive, 
NOT TO create promises




const getFruitsData = () => {

  let arrFruits = ["banana", "cherry", "lemon"];

  // here i want to return a promise , not an array like so:
   // return arrFruits;
  //  
1 we have to create a promise to deal with the fruits array
  return Promise.resolve
};

SO IF NOW I WANT TO RETURN THIS array as  Promise 
i can say .resolve() and just put it in this array of 
fruits, like so:

2
return Promise.resolve(arrFruits)

3
NOW WE WANT TO TEST the promise, create another file
index.test.js



const getFruitDataDelayed = () => {};
*/
