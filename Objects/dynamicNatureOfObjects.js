// One thing about objects in JS is that they are dynamic
// this means once we create them we can always add new properties
// or methods. we can also remove them
const circle = {
    radius: 1
};

// lets add another property
circle.color = yellow;
circle.draw = function () {}

// we can remove properties in objects 
delete circle.draw

// Let's pay attention to this
// noticed that we used const to declare the object
// normally we aren't allowed to modify constants
// we use the key word constant here it means we can not reassign the variable 
// so basically the varible is a constant
// so we cannot reset the const to a new object like this
// circle = {} this will cause an error
// so in short:
// We cannot reassign the constant
//  but we can always change the circle object by ading and removing objects



console.log(circle);