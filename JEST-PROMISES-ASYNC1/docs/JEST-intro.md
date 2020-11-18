# _JEST_ ✨

- CREATE A FOLDER AND COPY AND PASTE THERE THE FIRST 2 FILES WE CREATED FOR THE EXERCISES

- DUPLICATE THIS: index.test.js and lib.js
- PASTE these 2 files inside the JEST-INTRO folder
- clear the index.test.js , only leave the following:

`const { sum } = require("./lib");`

<br>

### INSTALL JEST

`npm i -g jest`

- if you get an error , type this:

`sudo npm i -g jest`

#### DONT FORGET TO INSTALL THE AUTO COMPLETION PACKET

> it s helpfull, when you dont want to type the whole thing

`npm i @types/jest`

- to test it, type: test

- You will see the auto complet like so

```javascript
// basic
test("should ", () => {});
```

- add this ✨

```javascript
test("should sum up to  numbers", () => {
  // store it in aresult variable
  let result = sum(10, 5); // expectation: 15
  // NOW instead of doing all manual checking like we did before
  //  we do something like this
  expect(result).toBe(15);
  // from the moment you will type the dot , you will have options
  // these options are calling matcher functions
});
```

#### NOW TEST IT

- type: jest

#### YOU WILL GET THIS ERROR

```javascript
Error: Could not find a config file based on provided values:
path: "/home/dci-st119/Documents/all-Desktop/ROBERT-JS-RECAP_plus-JEST/JEST-PROMISES-ASYNC"
cwd: "/home/dci-st119/Documents/all-Desktop/ROBERT-JS-RECAP_plus-JEST/JEST-PROMISES-ASYNC"
Config paths must be specified by either a direct path to a config
file, or a path to a directory. If directory is given, Jest will try to
traverse directory tree up, until it finds one of those files in exact order: "jest.config.js" or "jest.config.ts" or "jest.config.mjs" or "jest.config.cjs" or "jest.config.json".
    at resolveConfigPathByTraversing (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:135:11)
    at resolveConfigPathByTraversing (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:138:10)
    at resolveConfigPathByTraversing (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:138:10)
    at resolveConfigPathByTraversing (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:138:10)
    at resolveConfigPathByTraversing (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:138:10)
    at resolveConfigPathByTraversing (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:138:10)
    at resolveConfigPathByTraversing (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:138:10)
    at _default (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/resolveConfigPath.js:113:10)
    at readConfig (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/index.js:213:49)
    at readConfigs (/home/dci-st119/.nvm/versions/node/v13.3.0/lib/node_modules/jest/node_modules/jest-config/build/index.js:406:32)
```

<br>
<br>

#### THE SOLUTION

# INSTALL:

- type: npm init
- type again:

`npm i @types/jest`

- NOTICE if the package-lock.json is there? if you have it then add the jest library.

#### RESULT

```javascript
jest
 FAIL  ./index.test.js
  ● Test suite failed to run

    Sum functions sucks

      23 |   console.log("Expected: ", 15)
      24 |   console.log("Found", result)
    > 25 |   throw new Error("Sum functions sucks")
         |         ^
      26 |   }
      27 |

      at Object.<anonymous> (index.test.js:25:9)

 FAIL  JEST-INTRO/index.test.js
  ● should sum up to  numbers

    expect(received).toBe(expected) // Object.is equality

    Expected: 15
    Received: 5

       6 |   // NOW instead of doing all manual checking like we did before
       7 |   //  we do something like this
    >  8 |   expect(result).toBe(15);
         |                  ^
       9 |   // from the moment you will type the dot , you will have options
      10 |   // these options are calling matcher functions
      11 | });

      at Object.<anonymous> (JEST-INTRO/index.test.js:8:18)

Test Suites: 2 failed, 2 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        4.668 s
Ran all test suites.
```

### NOW RUN jest again

#### result

```javascript
// know that i have set the - minus here   return a - b;
// that is why i got the success result, because of course 10-5 is 5 therefore you got this:
//  ✓ should sum up to  numbers (1 ms)
//
 PASS  ./index.test.js
  ✓ should sum up to  numbers (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.998 s, estimated 1 s
Ran all test suites.
```

### make an error on purpose

- TYPE that you can get , 6 for example
- 10-5 is not 6 , so lets see if it works

```javascript
  ✕ should sum up to  numbers (7 ms)

  ● should sum up to  numbers

    expect(received).toBe(expected) // Object.is equality

    Expected: 6
    Received: 5

      3 | test("should sum up to  numbers", () => {
      4 |   let result = sum(10, 5); // expectation: 15
    > 5 |   expect(result).toBe(6);
        |                  ^
      6 | });
      7 |

      at Object.<anonymous> (index.test.js:5:18)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.321 s
Ran all test suites.
```
