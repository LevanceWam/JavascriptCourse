// This is the circle module for commonJsModule.js 

// by default everything we define in a module is considered to be private
// so it won't be accessible to the outside unless we explicitly export it 

const _radius = new WeakMap();

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

module.exports = Circle;