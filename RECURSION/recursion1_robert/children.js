// TREE STRUCTURE => RECURSION
// parents have children and children have children
// PARENT => CHILDREN => CHILDREN
/*


Recursion works like a tree
the leaves are the children we see in the example
below.

So with recursion we want to make sure we touch 
every single leaf



*/
//
// 1
let arrayFamily = [
  {
    name: "Tomas Mariduena and Silvestra Quezada",
    children: [
      { name: "Lorenzo Mariduena" },
      { name: "Coronel Marcelino Mariduena" },
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
      {
        name: "Mercedes Mariduena Quezada y Pedro José Montero Ramos",
        children: [
          { name: "Delia" },
          { name: "General Pedro Jacinto Montero" },
          { name: "Rosa" },
          { name: "Francisco" },
          { name: "Mercedes" },
          { name: "Jose Lorenzo" },
          { name: "Eufemia" },
        ],
      },
      { name: "Vicente Mariduena" },
      { name: "Tomas Mariduena" },
    ],
  },
];
// 2 here you want to loop on the data in step 1
const familyTreeDisplay = (arr, level = 0) => {
  // instead of child you can also use item, or whatever you want to identify it.
  arr.forEach((child) => {
    console.log(child.name, level);

    if (child.children && child.children.length > 0) {
      // if this child has a child and if this child length is greater than zero, then go down on the tree.
      // if children have children only then , you can go further down on the tree
      familyTreeDisplay(child.children, level + 1);
    }
  });
};

//3 CALL the function
familyTreeDisplay(arrayFamily);

// type: node children.js , you will see that you get the parent element which is: Tomas Mariduena and Silvestra Quezada

// 4
// But what if i want to call this function again and again so to
// display every children?
/*

let arrayFamily = [
  {
    name: "Tomas Mariduena and Silvestra Quezada",
    children: [
      {
        name: "Lorenzo Mariduena",
        name: "Marcelino Mariduena",
        name: "Leon Mariduena",
        name: "Juan de Dios Mariduena",
        name: "Mercedes Mariduena",
        name: "Vicente Mariduena",
        name: "Tomas Mariduena",
      },
    ],
  },
];


let arrayFamily = [
  {
    name: "yolanda",
    children: [
      {
        name: "mario",
        children: [
          { name: "melissa", children: [] },
          { name: "ciro", children: [] },
        ],
      },
    ],
  },
];

*/
