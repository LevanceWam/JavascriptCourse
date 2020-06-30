// More on Hoisting
// in js there are 2 ways to define functions 

sayHello(); // this is ok this will not cause an error due to hoisting 

// Function Declaration Syntax
function sayHello() {}

// Function Expression Syntax
// by convention we should add a semi-colon at the end 
const sayGoodBye = function () {};

// semi-colon aside there is a critical difference between 
// function declaration and function expression in Js
// Function Declarations are hoisted which means they raise to the top of the code 
// so you can declare a function somewhere and call it before its declaration 

// in contrast function expressions are not hoisted
// if we try to call it before it is declared we will get an error
// this is because we are dealing with an expression 
// we are dealing with a constant or a variable that is not intialized

// when it comes to classes we can define classes using a declaration or a expression syntax.
// now unlike functions, class declarations or class expressions are not hoisted 
// so we can not create a circle object before declaring a class

// Class declaration
class Circle {}

// Class Expression
const Square = class {};

// as far a which one to use no one really uses the expression syntax
// so stick to the declaration because it is simpler and cleaner.