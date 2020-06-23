// Calling the super constructor
// taking our example from the previous file further
// let's modify the shape constructor and add the color parameter
// we want every shape to have a color

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

// with the old implementation of this example if we create a circle we are only passing radius
// but because of inheritance we should see the color property but it is not there
// so let's try to have it to where our circle object will show the color property

// first thing we should do is within the circle constructor call the shape constructor
// the easiest way to do this which will not work is to call the shape function like a normal function and pass the correct parameters. (commented out for example purposes)
// this doesn't work because we aren't pointing to the object we are pointing to the window in the browser and global in node 
// If we remember this is one of the things that happens when we forget to put the new operator we creating a object from a constructor function
// basically the normal function syntax here will be pointing to the window in the browser and the global in node

// how would we go about fixing this 
// Well for starters we do not want to use the new operator because this will create another new object and
// then set the color property on that object 
// we want to use that object that is referenced by keyword 'this'

// the correct way to fix this problem is to call the shape function and set 'this' to point to point to the new instance of the circle object
// we are going to want to use the call method we learned about earlier
// the first argument of the call method is thisArg, so the object to be used as the current object
// now when we look at the console we will see 2 properties
// this is how we call the super constructor

function Circle(radius, color) {
    // Shape(color);
    // new Shape(color);
    Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

console.log(c)