// object basics
// are collections of key values
// if we have properties that are related to the object
// we want to encapsulate or bundle them in the object.
// What we are doing her is 
// Object oriented programming (OOP)
// Is a style of programming where we see a program as a 
// collection of objects that talk to each other to perform some functionality


// example lets say we are building a program for shapes
// One way we can make multiple variables 
// Like right below
let radius = 1;
let x = 1;
let y = 1;

// But a better approach would be to put those variables in a object
// now we can send them anywhere in the program
const circle = {
    // we can but anything in these objects 
    // numbers, function, array, variables, booleans
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // instead of calling a function a property we call it a method.
    draw: function () {
        console.log('draw');
    }
};

// We can call any of the properties by using Dot Notation
circle.draw(); // method