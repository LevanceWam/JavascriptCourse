// This is the circle module for commonJsModule.js 

// here is something interesting to know
// here in our module we are only exporting the circle class 
// so the radius weakmap is not accessible in our other module
// this is part of the implementation detail of the circle module 
// what we are exporting which is our circle class is what we call the public interface 
// radius is the implementation detail 
// this is abstraction in pratice we are hiding the details or the complexity inside of the module

// lets say tomorrow we may decide to replace this weakmap with a symbol or a different object
// that change is not going to breaknthe rest of the application because nowhere
// esle we have code that touches this radius object
// it is part of the implementation detail of this module


// by default everything we define in a module is considered to be private
// so it won't be accessible to the outside unless we explicitly export it 

// implementation detail
const _radius = new WeakMap();


// Public Interface 
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

// this is how we export objects in node or in commonjs format:
// first we have this keyword 'module' this refers to the current module or file 
// module has a property called "exports" this is an object
// we can add one or more properties to this object
// we can add a property called circle and set it to the circle class

// module.exports.Circle = Circle;

// now what if we had multiple classes and we wanted to export them all together 
// we would do this:
// lets say we had a square class
// we would do it like how we have the circle object

// module.exports.Square = Square;

// so now module.exports is an object with 2 properties 
// we can import this object inside of our commonJsModule.js and access these properties
// but this implementation we are exporting a single object
// so lets try and simplfy it 

// so instead of adding a circle property to module.exports object 
// we can just reset the object to circle 
// now when we import the circle module we get the circle class 
// lets go back to commonJsModule.js

// so module.exports represents the object that is exported from this module.
// in this case that module is the circle class

module.exports = Circle;

// here is something interesting to know
// here in our modulw we are only