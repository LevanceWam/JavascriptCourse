// an array is a data stucture, that we use to represent a list of items.
let selectedColors = ['Blue', 'Red', 'Green']; //array/array litetal []
console.log(selectedColors)
// each element in the array has an index
// the index starts at 0 not 1
// the index determines the postion of the element in the array.
console.log(selectedColors[2]); // will give us the 3rd item in the array
// the length arrays as well as the objects in them are dynamic.
// they can change at runtime.
selectedColors[3] = "Grey";
console.log(selectedColors);
// So here is something cool
// unlike in other programming languages where every item or object in the array has to be the same type.
// in JS we can store different types in a array
selectedColors[4] = 1;
console.log(selectedColors);
// an array is an object.
// it has a lot of key value pairs or properties that can be accessed using dot notation.
console.log(typeof selectedColors); // comes back as an object
console.log(selectedColors.length); // returns the number of items or elements in a array