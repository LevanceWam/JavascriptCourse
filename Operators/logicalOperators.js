// logical operators
// We use these operators to make decisions based on
// multiple conditons.
// In JS we have 3 logical operators: 
// and, or, and not.

// Logical AND &&
// Returns true if both operands are TRUE
// it doesn't matter what way we type it if one of the operand is false it will print as false
console.log(true && true); // comes out as true
console.log(true && false); // this will come out as false


// Logical OR
// Returns TRUE if one of the operands is TRUE
// as long as one of the operands comes out as true 
// the value of the expression will come out as true

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

// NOT (!)
// this will print the opposite of eligibleFor loan
let applicationRefused = !eligibleForLoan;

console.log(applicationRefused)


// Part II non-booleans
// In JS we use logical operators with non boolean values
// What we need ro understand is that the result 
// Of a logical expression is not necessarily 
// true or false it depends on the value of the operance we have
console.log(false || true); // true
console.log(false || 'jack'); // jack
console.log(false || 1); // 1

// So when JS tried to evaluate the expression 
// it looks at each operand and if it is not boolean true or false
// it'll try to interpet it as truthy or false

// in JS we have values that are falsey that is not boolean false.
// these falsey values include:
/*
Undefined
Null 
Number
0
false
empty string ('')
NaN // this is a special value in JS
*/

// if we use any of these falsey values it will be 
// treated as falsey which is almost like false but not exactly the same 

// Anything that is not falsy -> truthy

console.log(false || 1 || 2); // returns one this is called short-circuiting
// the evalution starts at the left and as soon as an operand that is true is found
// it will return that operand and stop the evalution right there
// it will not run the rest of the operands

// real word application of this 

let userColor = 'red';
let userSecondColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; // red
let currentColour = userSecondColor || defaultColor; // blue

console.log(currentColor); // this comes out to red becsause the user choose the color
console.log(currentColour); // if the user doesn't pick it'll go to blue