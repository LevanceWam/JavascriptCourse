// Finding elements Primitive types
// finding elements depends if they are primitive or reference types

const numbers = [2, 3, 4, 5, 6, 4];


console.log(numbers.indexOf(2)); // we place the element that we are looking for and this will return the index
// if it is not there it will return -1

console.log(numbers.indexOf('3')); // will return negative one because the 3 we have in the array is not a string

console.log(numbers.lastIndexOf(4)); // will return the last index of a given element. -1 if it doesn't exist

// if we want to see if a given element exist we can do this 
console.log(numbers.indexOf(1) !== -1); // this is an older way of doing this so lets look at a easier way

console.log(numbers.includes(1)); // this returns true if the given element exist

// All of the methods above have a second optional parameter startingIndex
console.log(numbers.indexOf(5, 1));
// the second parameter is called from index 
// if filled the search will start from that index