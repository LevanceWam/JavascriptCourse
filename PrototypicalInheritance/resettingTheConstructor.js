// Resetting the constructor
function Shape() {
    //
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

// There is a tiny problem with this implementation
// with this code her we are not able to make more circle objects based on the constructor
// because this changes the constructor to the object we are inheriting from
// so if we try to create a new object we would get a shape object and not a circle.
// The reason we are havinf this problem is because we reset the prototype of the circle 

// so for best practice when we reset the prototype of an object we should also reset the constructor
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log('draw');
}

// Recap
// When ever we reset the prototype as a best practice 
// make sure to reset the constructor as well.