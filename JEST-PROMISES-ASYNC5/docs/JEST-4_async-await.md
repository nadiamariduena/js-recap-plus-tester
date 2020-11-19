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

<br>
<br>
<br>
<hr>
<br>

## ASYNC AWAIT :art:

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

#### the result of forgetting the await

```javascript
// here you clearly see that something is wrong, you will notice the difference with the next result.
//
 FAIL  JEST-PROMISES-ASYNC5/index.test.js
  ● Test suite failed to run
//
//  HERE YOU SEE THE ERROR
    SyntaxError: /home/dci-st119/Documents/all-Desktop/ROBERT-JS-RECAP_plus-JEST/JEST-PROMISES-ASYNC5/index.test.js: 'await' is only allowed within async functions (10:13)

       8 | // to complet then return the data to let fruits
       9 |
    > 10 | let fruits = await getFruitsData()
         |              ^
      11 | expect(fruits.length).toBe(3)
      12 |
      13 |

      at Parser._raise (../../../.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/@babel/parser/src/parser/error.js:60:45)

 PASS  JEST-PROMISES-ASYNC1/index.test.js //this is another folder, dont care about it

Test Suites: 3 failed, 2 passed, 5 total
Tests:       2 failed, 3 skipped, 3 passed, 8 total
Snapshots:   0 total
Time:        3.107 s
Ran all test suites.
```

#####  HERE YOU SEE THE ERROR

>  
    SyntaxError: /home/dci-st119/Documents/all-Desktop/ROBERT-JS-RECAP_plus-JEST/JEST-PROMISES-ASYNC5/index.test.js: 'await' is only allowed within async functions (10:13)