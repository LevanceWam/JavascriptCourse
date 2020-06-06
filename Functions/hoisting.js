// Hoisting
// The key difference between these 2 functions 
// is that the function made with the 
// function declaration syntax can be called before it is defined 
// this is not possible with a function declared 
// using the function expression syntax
// the reason why the function declaration syntax can do this is because
// when JS engine executes this code
// it moves all the function declarations to the top
// this is called hoisting
// Hoisting is the process of moving function declarations to the top of the file
// this is done automatically by the JS engine we are using


// Function Declaration
walk();

function walk() {
    console.log('walk');
}

// Function Expression
const run = function () {
    console.log('run');
};