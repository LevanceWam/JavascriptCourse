// in the future we are goinkg to have more than
// one method in our objects
// but with our current implemenation if we were to have 
// a surplus of the current implementation
// this is all in the memory and we do not what to have a large number 
// of objects in the memory 
// doing this can waste a lot of memory 
// our solution around this would be with the help of prototypical inheritance
// we are going to take the draw method out of the circle object 
// and put it in its prototype which we will circleBase

// In JS we have 2 kinds of properties and methods
// Instance members and prototype members

function Circle(radius) {
    // Instance Members
    this.radius = radius;
    this.move = function () {
        this.draw();
        console.log('move');
    }

}

// create the single instance of circle base
// with this the draw method is now on the prototype

// Prototype Members 
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// Because of the prototypical inheritance we can still call and access the 
// draw function 
c1.draw();

// Let's take this to the next level
// we are aware that every object has toString method
// we can overwrite the implementation of this method in the 
// prototype of our circle object

Circle.prototype.toString = function () {
    return 'Circle with radius ' + this.radius;
}

// So when we call this method JS engine looks at our circle object
// because it not in the object it will look to the prototype
// since we have this method implemented, this implementation will be used
// So since we have a implemenation of the toString method on the rootObject
// the implementation we have defined will be used because 
// this is more accessible