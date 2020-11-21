# RECURSION RECAP BY ROBERT 🌳

### TREE STRUCTURE => RECURSION

> parents have children and children have children
> // PARENT => CHILDREN => CHILDREN

#### Recursion works like a tree

> So with recursion we want to make sure we touch
> every single leaf

> the leaves are the children we see in the example
> below.

<br>

#### 1 SET UP all the family members 👪

```javascript
let arrayFamily = [
  {
    name: "Tomas Mariduena and Silvestra Quezada",
    children: [
      { name: "Lorenzo Mariduena" },
      { name: "Marcelino Mariduena" },
      { name: "Leon Mariduena" },
      {
        name: "Juan de Dios Mariduena y Damiana Montero",
        children: [
          { name: "Isabel" },
          { name: "Luis Felipe" },
          { name: "Horacio" },
          { name: "Temistocles" },
          { name: "Guillermo" },
          { name: "Rosaura" },
          { name: "Isabel Segunda" },
          { name: "Isabel tercio" },
          {
            name: "Coronel Manuel Lorenzo Mariduena Montero y Dolores Moncada",
            children: [
              {
                name:
                  "Manuel Ignacio Mariduena Moncada y Yolanda Graciela Alvarado Acosta",
                children: [
                  {
                    name: "Mario Mariduena",
                    children: [{ name: "Nadia" }, { name: "Angelita" }],
                  },
                ],
              },
            ],
          },
        ],
      },
      { name: "Mercedes Mariduena" },
      { name: "Vicente Mariduena" },
      { name: "Tomas Mariduena" },
    ],
  },
];
```

<br>

#### 2 HERE YOU WILL LOOP on the data in step 1 (the family members)

```javascript
const familyTreeDisplay = (arr) => {
  // instead of child you can also use item, or whatever you want to identify it.
  arr.forEach((child) => {
    console.log(child.name);
  });
};
```

<br>

##### 3 CALL THE FUNCTION

```javascript
familyTreeDisplay(arrayFamily);
```

> type: node children.js , you will see that you get the parent element which is: Tomas Mariduena and Silvestra Quezada

<br>

#### 4 But what if i want to call this function again and again, so to display every children?

- ADD THIS

>

    familyTreeDisplay(child.children); //**

>

<br>

##### LIKE SO

```javascript
const familyTreeDisplay = (arr) => {
  arr.forEach((child) => {
    console.log(child.name);
    familyTreeDisplay(child.children); //**
  });
};


//familyTreeDisplay(child.children);
//
//.children);
// it makes reference to the children you have in step (1)

    name: "Tomas Mariduena and Silvestra Quezada",
    children: [
      {
        name: "Lorenzo Mariduena",


// By adding the children here : (child.children);
// -  you are going to check on each one of them
// - IMPORTANT! due to the fact its a loop, you have to set up an ending "an exit condition" , otherwise it will create an endless loop.
```

<br>

##### RESULT

```javascript
Tomas Mariduena and Silvestra Quezada
Lorenzo Mariduena
Marcelino Mariduena
Leon Mariduena
Juan de Dios Mariduena y Damiana Montero
Isabel
Luis Felipe
Horacio
Temistocles
Guillermo
Rosaura
Isabel Segunda
Isabel tercio
Coronel Manuel Lorenzo Mariduena Montero y Dolores Moncada
Manuel Ignacio Mariduena Moncada y Yolanda Graciela Alvarado Acosta
Mercedes Mariduena
Vicente Mariduena
Tomas Mariduena
```

<br>

##### 5 NOW WE WILL STRUCTURE THE FAMILY MEMBERS ON LEVELS

- ADD THE FOLLOWING

<br>

```javascript
//  level = 0)
//  (child.name, level); to see it
//  level + 1); here we indicate that go descend one level further
const familyTreeDisplay = (arr, level = 0) => {
  arr.forEach((child) => {
    console.log(child.name, level);
    if (child.children && child.children.length > 0) {
      familyTreeDisplay(child.children, level + 1);
    }
  });
};
```

#### RESULT

```javascript
Tomas Mariduena and Silvestra Quezada 0
Lorenzo Mariduena 1
Marcelino Mariduena 1
Leon Mariduena 1
Juan de Dios Mariduena y Damiana Montero 1
Isabel 2
Luis Felipe 2
Horacio 2
Temistocles 2
Guillermo 2
Rosaura 2
Isabel Segunda 2
Isabel tercio 2
Coronel Manuel Lorenzo Mariduena Montero y Dolores Moncada 2
Manuel Ignacio Mariduena Moncada y Yolanda Graciela Alvarado Acosta 3
Mario Mariduena 4
Nadia 5
Angelita 5
Mercedes Mariduena 1
Vicente Mariduena 1
Tomas Mariduena 1
```

<br>
<br>

## SO THIS IS RECURSION, you start somewhere from the top and go down to all the leaves 🍃