// let's filter an array

const numbers = [1, -1, 2, 3, 4];

// let's return all of the positve numbers
// just like every() and some() this is a callback function
// that takes 3 parameters
const filtered = numbers.filter(function (value) {
    return value >= 0;
});

//let's practice our arrow functions
// same as the function above 
const filtered2 = numbers.filter(value => value >= 0);

console.log(filtered2);

// a real world example would be 
// filtering restuarants on yelp