## JEST

- THE REASON FOR NOT SEEING THE RESULTS AND HAVING THEM ALWAYS LIKE THEY WERE CORRECT
- iT was because i changed to file name to index.test2.js , instead of index.test.js, apparently
  it did like it but it will work fine later.

##### SEVERAL FUNCTIONS inside one

- IN THE FOLLOWING EXAMPLE WE WILL START BY GRABBING SELECTED FUNCTIONS

- FOR EXAMPLE here i only want to work with this function and not the 2 others

- _should compare objects_

> with "ONLY." you will grab it

```javascript
// ---------------new-------------------

test.only("should compare objects", () => {
  let obj1 = { name: "Marcell" };
  let obj2 = { name: "Pedro" };

  // expect(obj1).expect(obj2);
});
//
```

<br>

## ERRORS

###### I WAS HAVING THE ERRORS IN THE EXAMPLE BELOW, AND I FOUND OUT THAT IT WAS because i have named the files in the first Folder with the same name, so i changed the names there in the Basic-sum-function folder

```javascript
 PASS  ./index.test.js
 PASS  ../JEST-PROMISES-ASYNC1/index.test.js
 FAIL  ../Basic-sum-function/index.test.js //here it says fail, but as you see it didnt come from this folder, so i will have to name it differently everytime
//
  ● Test suite failed to run

    Sum functions sucks

      23 |   console.log("Expected: ", 15)
      24 |   console.log("Found", result)
    > 25 |   throw new Error("Sum functions sucks")
         |         ^
      26 |   }
      27 |

```

#### AFTER I CHANGED THE NAMES FROM THE 2 OTHER FOLDERS , i could finally see the result for this exercise

- This result shows that the

```javascript
 PASS  ../JEST-PROMISES-ASYNC1/index.test.js
  testing suite collections
    ✓ should sum up two numbers (1 ms)
    ✓ should subtract two numbers (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.147 s
Ran all test suites.
```

### IN MY TEACHERS RESULT i should be seeing the 2 functions that were skipped because of the use of the .only, but i cannot see it here

- it just shows

```javascript
    ✓ should sum up two numbers (1 ms)
    ✓ should subtract two numbers (1 ms)
```

- WHICH CORRESPOND TO THE 2 FUNCTIONS IGNORED

- THE REASON FOR NOT SEEING THE RESULTS AND HAVING THEM ALWAYS LIKE THEY WERE CORRECT
- iT was because i changed to file name to index.test2.js , instead of index.test.js, apparently
  it did like it but it will work fine later.

<br>

#### what if you want to check if the content of the objects are the same?

- you can use .toEqual

```javascript
  });
  // ---------------new-------------------

  test.only("should compare objects", () => {
    let obj1 = { name: "Marcell" };
    let obj2 = { name: "Pedro" };

    expect(obj1).toEqual(obj2);
  });
  //
```

### in an array the object matters, in object doesnt matter, that s why we can check the error here, by making an error with the order in an array

```javascript
  // ---------------new-------------------

  test("should compare objects", () => {
    let obj1 = { name: "Pedro", age: 27 };
    let obj2 = { age: 27, name: "Pedro" };

    expect(obj1).toEqual(obj2);
  });
  // ---------------new-------------------
  test.only("should compare arrays", () => {
    let arr1 = ["raquel", "pedro"];
    let arr2 = ["pedro", "raquel"];

    expect(arr1).toBe(arr2);
  });
  /*





  */
  //no error
 PASS  ../JEST-PROMISES-ASYNC1/index.test.js
  testing suite collections
    ✓ should sum up two numbers (3 ms)
    ✓ should subtract two numbers (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.717 s
Ran all test suites.

//   with error


 FAIL  ./index.test.js
  ● testing collections › should compare arrays

    expect(received).toBe(expected) // Object.is equality

    - Expected  - 1
    + Received  + 1

      Array [
    -   "pedro",
        "raquel",
    +   "pedro",
      ]

      32 |     let arr2 = ["pedro", "raquel"]; //here you see the source of the issue
      33 |
    > 34 |     expect(arr1).toBe(arr2);
         |                  ^
      35 |   });
      36 |   //
      37 | });

      at Object.<anonymous> (JEST-PROMISES-ASYNC2/index.test.js:34:18)

 PASS  ../JEST-PROMISES-ASYNC1/index.test.js

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 3 skipped, 2 passed, 6 total //the 3 skipped are the 3 functions we are not using
Snapshots:   0 total
Time:        2.232 s
Ran all test suites.
```

<br>
<br>

### THE WHOLE CODE

```javascript
const { sum, subtract } = require("./lib2");

// TEST SUITE
//
// COLLECTION of test cases that logically
//  belong together
//
describe("testing collections", () => {
  //
  //  TEST CASE OR ( UNIT TEST )
  test("should sum up two numbers", () => {
    let result = sum(10, 5);
    // expect(result).toBe(15);
  });
  //

  test("should subtract two numbers", () => {
    let result = subtract(10, 5);
    // expect(result).toBe(5);
  });
  // ---------------new-------------------

  test("should compare objects", () => {
    let obj1 = { name: "Pedro", age: 27 };
    let obj2 = { age: 27, name: "Pedro" };

    expect(obj1).toEqual(obj2);
  });
  // ---------------new-------------------
  test.only("should compare arrays", () => {
    let arr1 = ["raquel", "pedro"];
    let arr2 = ["pedro", "raquel"];

    expect(arr1).toBe(arr2);
  });
  //
});

```
