//  One thing that seperates JS from other languages is that it is dynamic langauge
//  We have 2 types of langauges: Dynamic and Static
//  In static language when we declare a variable the type of the variable is set and cannot be changed
//  example: string name = 'john';
//  In a dynamic language the type of a variable can change at runtime
//  example: let name = ' John ';


let name2 = 'vance';
let age2 = 25;
let isApproved2 = true;
let firstName2 = undefined;
let selectColor2 = null;

console.log(typeof name2) // this comes back as a string
name2 = 1;
console.log(typeof name2) // this comes back as a number
// this is an example of dynamic language
// unlike static languages the type of the variables will be determined at runtime based on the values that are assigned.

console.log(typeof age2) // comes back as a number
number = 25.1;
console.log(typeof age2) // Still comes back as a number 
// In JS there are only one type of numbers some languages have more than one type of number like float numbers.

console.log(typeof isApproved2) // boolean

console.log(typeof firstName2) // comes back as undefined
// this means that undefined is actually a type and also a value.
// so because we set the value of firstName to undefined its type is undefined

console.log(typeof selectColor2) // This comes back as a object.
// we will look more into object in object.js