// in modern JS we have 2 new methods
// Every and Sum

const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 5, 6, -7];

// every method
// so lets say we want to get all of the positive numbers out of the array
// so we are gonna call a callback function
// the function has 3 parameters
// Value, which is a number because we have an array of numbers
// Index, which is the index of the values in the array, thats a number
// The array itself
const allpositive = numbers.every(function (value) {
    return value >= 0;
});
const allpositive2 = numbers2.every(function (value) {
    return value >= 0;
});

console.log(allpositive); // returns true 
console.log(allpositive2); // returns false

// Sum method 
// similar to every
// the sum method checks to see if there is at least one
// element in the array that matches the crieria
const atLeastOnePositive = numbers2.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnePositive); // returns true

// recap
// every() checks to see if every element in a given array matches given criteria
// some() checks to see if at least one element matches the given criteria

// Remember that these 2 methods are new 
// so some older browsers do not support this