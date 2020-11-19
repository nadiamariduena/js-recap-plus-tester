## JEST / PROMISES 🌻

> ASYNC - AWAIT , .then() and .catch()
> is a way to handle promises that you receive,
> NOT TO create promises

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

### so back to the promises `

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
