### 1 DECLARE the varibles

- you will be assigning their VALUE in step 5

```javascript
const sum = (a, b) => {
  return a + b;
};
```

### 2 EXPORT THE FUNCTION

```javascript
module.exports = { sum };
```

> so everything you export, you typically put it in an object

### 3 CREATE ANOTHER FILE TO TEST IT

- index.test.js

> What we want to do in the test, is check if
> the library in step 1 is working as expected.

### 4 inside the index.test.js

- import the function in step 1:

```javascript
const { sum } = require("./lib");
```

<br>

## HOW CAN I TEST IT NOW ?

### 5 ASSIGN the value to the variables in step 1

```javascript
let result = sum(10, 5);
// a : 10
// b: 5
/*
const sum = (a, b) => {
  return a + b;
};

*/
```

### 6 NOW WE CHECK the result with an IF/STATEMENT

```javascript
if (result == 15) {
  //  a + b = 15
  // so if the result is correct = 15, show the message below
  console.log("Summing 10 + 5  worked");
} else {
  //  if the result is incorrect, show the message below
  throw new error("Sum functions sucks");
}
```

### 7 NOW GO TO THE CONSOLE AND VERIFY

- type this:

`node index.test.js`

### 8 the result

`Summing 10 + 5 worked`

<br>
<hr>
<br>

## NOW IMAGINE WE HAVE SEVERAL FUNCTIONS LIKE THE ONE WE JUST CREATED AND DOING IT MANUALLY THIS WAY:

```javascript
if (result == 15) {
  //  a + b = 15
  // so if the result is correct = 15, show the message below
  console.log("Summing 10 + 5  worked");
} else {
  //  if the result is incorrect, show the message below
  throw new error("Sum functions sucks");
}
```

### CAN QUICKLY BECOME A NIGHTMARE

## LETS MAKE AN ERROR

#### 1

```javascript
//  instead of + type -
const sum = (a, b) => {
  return a - b;
};
```

### now type this:

`node index.test.js`

### the result

```javascript
  throw new error("Sum functions sucks");
  ^

ReferenceError: error is not defined
```

<br>
<br>

#### LET'S TEST THE FOLLOWING

- focus on the "else"

```javascript
if (result == 15) {
  //  a + b = 15
  // so if the result is correct = 15, show the message below
  console.log("Summing 10 + 5  worked");
} else {
  console.log("Expected: ", 15);
  console.log("Found", result);
  throw new Error("Sum functions sucks");
}
```

### now type this:

`node index.test.js`

### the result

```javascript
// check the 2 data below
Expected:  15
Found 5
/home/dci-st119/Documents/all-Desktop/ROBERT-JS-RECAP_plus-JEST/JEST-PROMISES-ASYNC/index.test.js:25
  throw new Error("Sum functions sucks")
  ^
Error: Sum functions sucks

```

<br>
<br>

### WE GOT THE ERROR but the way we get the error can be more "USER friendly" for that we will use _JEST_

<br>

## TESTING the previous SUM function , now with JEST

- CLICK ON THE LINK TO CONTINUE the exercise

[JEST INTRO](docs/JEST-intro.md)
