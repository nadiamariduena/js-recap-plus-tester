## PROMISES / ASYNC AWAIT 🌻

<p> ASYNC - AWAIT , .then() and .catch()
 is a way to handle promises that you receive,
 NOT TO create promises
</p>

<br>

# :rowing_man:

<br>

### DONT FORGET

- TO INSTALL the package.json when you install jester

- IT CAN CAUSE ISSUES

### FUNCTIONS

- WHEN YOU CREATE THE FUNCTIONS DONT FORGET TO export them and the import them in the other file

- LIKE SO:

```javascript
// data-lib.js
// Promises

const getFruitsData = () => {
  let arrFruits = ["banana", "cherry", "lemon"];
  //
  // if i want to return the array as  promise, i type the line below
  return Promise.resolve(arrFruits);
  // so this wrap an array as  a promise
};

// export
module.exports = { getFruitsData }; // here you are exporting it
//
//
//

// index.test.js
// import
const { getFruitsData } = require("./data-lib"); // here you are importing it

describe("sweet fruit testing suite", () => {
  //
  //
  test("should get fruit data", () => {
    let fruits = getFruitsData();
    expect(fruits.length).toBe(3);
  });
  //
  //
});
```

<br>
<br>
<hr>
<br>

### BACK to promises

```javascript
// data-lib.js
// Promises

const getFruitsData = () => {
  let arrFruits = ["banana", "cherry", "lemon"];
  //
  //

  // // here i want to return a promise , not an array like so:
  return Promise.resolve(arrFruits);
};

const getFruitDataDelayed = () => {};

// here i export it
module.exports = { getFruitsData };
```

<br>

#### Here you can see , that to pass a Promise and to use it, we need a .then

```javascript
// index.text.js
// here i imprt the lib data
const { getFruitsData } = require("./data-lib");

describe("sweet fruit testing suite", () => {
  //
  //
  test("should get fruit data", () => {
    // let fruits = getFruitsData();
    getFruitsData().then((arrFruits) => {
      // makes alusion to this ::   let arrFruits = ["banana", "cherry", "lemon"];
      console.log(arrFruits);
      expect(arrFruits.length).toBe(3);
    });
  });
});

// npm i @types/jest   for auto completion
```

#### RESULT

```javascript
 PASS  JEST-PROMISES-ASYNC4/index.test.js
  ● Console

    console.log
      [ 'banana', 'cherry', 'lemon', 'tomato' ]

      at JEST-PROMISES-ASYNC4/index.test.js:9:15

 PASS  JEST-PROMISES-ASYNC1/index.test.js

Test Suites: 2 failed, 2 passed, 4 total //the  failed makes ref to the other folders inside this folder , the skipped are all the function that being ignored because of  the .only
Tests:       2 failed, 3 skipped, 3 passed, 8 total
Snapshots:   0 total
Time:        1.436 s
Ran all test suites.
```

<br>
<br>
<br>
<hr>
<br>

# ASYNC AWAIT :rowing_woman:

### FIRST LETS START WITH SOME BASIC WAY OF WRAPPING A PROMISE

<br>

- AFTER THE FIRST RESULT , we will make it more professional.

```javascript
// Promises

const getFruitsData = () => {
  let arrFruits = ["banana", "cherry", "lemon", "tomato"];
  // // here i want to return a promise , not an array like so:

  return Promise.resolve(arrFruits);
};

const getFruitDataDelayed = () => {};

module.exports = { getFruitsData };
```

#### HERE WE WILL DEMONSTRATE HOW _JEST_ WORKS WHEN WE DO A MISTAKE, here for example we forgot to add the async .

- CHECK THE RESULT

```javascript
// IN THIS FUNCTION we added an async await function but we forgot to add the AWAIT
//
const { getFruitsData } = require("./data-lib");

describe("sweet fruit testing suite", () => {
  //
  //

// Await will wait to the promise: getFruitsData()
// to complete, then return the data to "let fruits"

let fruits = await getFruitsData()
expect(fruits.length).toBe(3)

```

<br>

#### the result of forgetting the await :red_circle:

```javascript
// here you clearly see that something is wrong, you will notice the difference with the next result.
//
 FAIL  JEST-PROMISES-ASYNC5/index.test.js
  ● Test suite failed to run
//
// HERE IS THE ERROR
    SyntaxError: /home/dci-st119/Documents/all-Desktop/ROBERT-JS-RECAP_plus-JEST/JEST-PROMISES-ASYNC5/index.test.js: 'await' is only allowed within async functions (9:19)

       7 |         // Await will wait to the promise : getFruitsData()
       8 |   // to complet then return the data to let fruits
    >  9 |       let fruits = await getFruitsData();
         |                    ^
      10 |       expect(fruits.length).toBe(3);
      11 |   });
      12 |

      at Parser._raise (../../../.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/@babel/parser/src/parser/error.js:60:45)

Test Suites: 3 failed, 2 passed, 5 total
Tests:       2 failed, 3 skipped, 3 passed, 8 total
Snapshots:   0 total
Time:        1.967 s
Ran all test suites.
```

##### THE ERROR

```javascript
//
SyntaxError: /home/dci-st119/Documents/all-Desktop/ROBERT-JS-RECAP_plus-JEST/JEST-PROMISES-ASYNC5/index.test.js: 'await' is only allowed within async functions (10:13)
//
```

<br>

### THE SOLUTION :relieved:

```javascript
// this one correspond to another folder, dont mind , as the error is on purpose
 FAIL  JEST-PROMISES-ASYNC3/index.test.js
  ● sweet fruit testing suite › should get fruit data

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: undefined

       6 |   test("should get fruit data", () => {
       7 |     let fruits = getFruitsData();
    >  8 |     expect(fruits.length).toBe(3);
         |                           ^
       9 |     // here you get 3 elements from the array in the data-lib.js
      10 |   });
      11 |   //

      at Object.<anonymous> (JEST-PROMISES-ASYNC3/index.test.js:8:27)
//
//
// here in the number 5 , you can see the it PASS, so there was no problem
 PASS  JEST-PROMISES-ASYNC5/index.test.js
 PASS  JEST-PROMISES-ASYNC1/index.test.js
 PASS  JEST-PROMISES-ASYNC4/index.test.js
  ● Console

    console.log
      [ 'banana', 'cherry', 'lemon', 'tomato' ]

      at JEST-PROMISES-ASYNC4/index.test.js:9:15


Test Suites: 2 failed, 3 passed, 5 total
Tests:       2 failed, 3 skipped, 4 passed, 9 total
Snapshots:   0 total
Time:        1.475 s
Ran all test suites.
```

<br>

### AFTER THIS RESULT

- LETS START BY WRAPPING THE PROMISE in a professional way

> Take the array out of the getFruitsData function and make it global

```javascript
// ------------
// data-lib.js
// ------------
//
let arrFruits = ["banana", "cherry", "lemon", "tomato"];

const getFruitsData = () => {
  return Promise.resolve(arrFruits);
};
// --------------------------------------------
// create a new promises in the second function

const getFruitDataDelayed = () => {
  return new Promise((resolve, reject) => {
    // by calling RESOLVE you automatically EXIT the promise
    resolve(arrFruits);
  });
};

module.exports = { getFruitsData, getFruitDataDelayed };
```
