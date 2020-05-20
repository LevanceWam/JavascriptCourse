// Reference Types
// In this category we have:
/*
Objects
Arrays
Functions
*/

// Object in programming languages are like objects in real life.
// Thing of an object like a person.
// A person has a name, age, height, eye color.
// these are all the properties of a person
// we have the same concept on JS

// so when dealing with related variables
// we can store them in a object
// that way instead of having to reference 2 variable we can reference the person object
// this helps keeps our code clean

let person = {
    // between these braces we are going to add 1 or more key value pairs.
    // these are the properties of the object
    name: 'Catcus',
    age: 30
}; // the curly braces makes this a object/object literal
// there are 2 ways to work with properties
// let's try to change the name. There are 2 ways:

// First is dot notation.
person.name = 'Daniel';
console.log(person.name) // we can use the dot notation to view just the name.

// Second is Bracket Notation.
person['name'] = 'Stacy';

console.log(person) // printing out the properties