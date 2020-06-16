// Here we have our circle object 
// with 2 methods defined on its prototype 
// Lets try to create a square object with the same methods
// without repeating the same implementation lets use inheritance

// lets define a shape object and move the duplicate method 
// into the shape prototype and have circle and square inherit from there

function Shape() {
    // 
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

// so this ehat is happening in the memory
// c -> rootCircle(circle.prototype) -> rootObject
// s -> rootShape(shape.prototype) -> rootobject

// to set up the inheritance we want to have rootCircle inherit from rootShape

// in JS we have a method for creating an object with a given prototype

Circle.prototype = Object.create(Shape.prototype);
// now circle is inheriting from the rootShape and if we take ot to the 
// console we will see that we still have a rootCircle object but 
// if we inspect further we see that rootCircle is inheriting 
// from rootShape so now the circle object inherited the duplicate method 

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);